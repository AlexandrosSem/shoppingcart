const gulp          = require('gulp');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const sass          = require('gulp-sass');
const rename        = require('gulp-rename');
const imagemin      = require('gulp-imagemin');
const htmlclean     = require('gulp-htmlclean');
const deporder      = require('gulp-deporder');
const stripdebug    = require('gulp-strip-debug');
const del           = require('del');
const plumber       = require('gulp-plumber');
const browserSync   = require('browser-sync').create();
const cleanCSS      = require('gulp-clean-css');
const babel         = require('gulp-babel');
const compiler      = require('webpack');
const webpack       = require('webpack-stream');

gulp.task('clean:dist', function(pFnDone) {
	return del(['dist/**', '!dist', '!dist/.gitkeep']);
});

gulp.task('clean:css', function(pFnDone) {
	return del(['dist/css/**']);
});

gulp.task('clean:image', function(pFnDone) {
	return del(['dist/img/**']);
});

gulp.task('clean:lib', function(pFnDone) {
	return del(['dist/lib/**']);
});

gulp.task('clean:html', function(pFnDone) {
	return del(['dist/**/*.+(html|htm)', '!dist/lib', '!dist/lib/**/*.+(html|htm)']);
});

gulp.task('image', gulp.series('clean:image', function imageBuild(pFnDone) {
	return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
}));

gulp.task('sass', function(pFnDone) {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css/sass'));
});

gulp.task('css', gulp.series('clean:css', function cssBuild(pFnDone) {
	return gulp.src('app/css/**/*.css')
		.pipe(plumber())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('dist/css', { overwrite: true }))
		.pipe(rename('styles.min.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css', { overwrite: true }));
}));

gulp.task('clean:webpack', function clearBabel(pFnDone) {
	return del(['app/babel/webpack/**']);
});

gulp.task('webpack', gulp.series('clean:webpack', function webpackBuild(pFnDone) {
	return gulp.src('app/webpack/**/*.js')
		.pipe(webpack({
			mode: 'development'
		}, compiler, function (err, stats) { }))
		.pipe(rename('webpack.js'))
		.pipe(gulp.dest('app/babel/webpack'));
}));

gulp.task('clean:babel', function clearBabel(pFnDone) {
	return del(['app/js/babel/**']);
});

gulp.task('babel', gulp.series('clean:babel', function babelBuild(pFnDone) {
	return gulp.src('app/babel/**/*.js')
		.pipe(plumber())
		.pipe(babel({ presets: ['@babel/preset-env'], sourceType: 'script' }))
		.pipe(gulp.dest('app/js/babel'));
}));

gulp.task('clean:js', function(pFnDone) {
	return del(['dist/js/**']);
});

gulp.task('js', gulp.series('clean:js', function jsBuild(pFnDone) {
	return gulp.src('app/js/**/*.js')
		.pipe(plumber())
		.pipe(deporder()) // Ensure dependency order
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename('scripts.min.js'))
		//.pipe(stripdebug()) // Remove debug lines
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
}));

gulp.task('lib', gulp.series('clean:lib', function libBuild(pFnDone) {
	return gulp.src(['app/lib/**/*', '!app/lib/.gitkeep'])
		.pipe(gulp.dest('dist/lib'));
}));

gulp.task('html', gulp.series('clean:html', function htmlBuild(pFnDone) {
	return gulp.src(['app/**/*.+(html|htm)', '!app/lib/**'])
		//.pipe(htmlclean()) // Clean HTML (comments, unnecessary whitespaces / attributes, etc.)
		.pipe(gulp.dest('dist'));
}));

gulp.task('watch', function(pFnDone) {
	gulp.watch(['app/img/**/*.+(png|jpg|jpeg|gif|svg)'], { delay: 250 }, gulp.series('image'))
	gulp.watch(['app/scss/**/*.scss'], { delay: 250 }, gulp.series('sass'));
	gulp.watch(['app/css/**/*.css'], { delay: 250 }, gulp.series('css'));
	gulp.watch(['app/webpack/**/*.js'], { delay: 250 }, gulp.series('webpack'));
	gulp.watch(['app/babel/**/*.js'], { delay: 250 }, gulp.series('babel'));
	gulp.watch(['app/js/**/*.js'], { delay: 250 }, gulp.series('js'));
	gulp.watch(['app/lib/**/*', '!app/lib/.gitkeep'], { delay: 250 }, gulp.series('lib'));
	gulp.watch(['app/**/*.+(html|htm)', '!app/lib'], { delay: 250 }, gulp.series('html'));
	gulp.watch(['dist/**/*'], { delay: 250 }, function ReloadBrowser(pFnDone) {
		browserSync.reload();
		pFnDone();
	});
	pFnDone();
});

gulp.task('connect', function(pFnDone) {
	browserSync.init({
		server: { baseDir: 'dist/', directory: true },
		open: false,
		minify: false,
		reloadOnRestart: true
	});
	pFnDone();
});

gulp.task('build', gulp.series('clean:dist', gulp.parallel('image', gulp.series('sass','css'), gulp.series('webpack', 'babel', 'js'), 'lib', 'html')));

gulp.task('dev', gulp.parallel(gulp.series('build', 'connect', 'watch')));

gulp.task('default', gulp.series('build'));
