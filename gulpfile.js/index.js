var gulp        = require('gulp');
var concat      = require('gulp-concat');
var coffee      = require('gulp-coffee');
var uglify      = require('gulp-uglify');
var sass        = require('gulp-sass');
var rename      = require('gulp-rename');
var imagemin    = require('gulp-imagemin');
var htmlclean   = require('gulp-htmlclean');
var deporder    = require('gulp-deporder');
var stripdebug  = require('gulp-strip-debug');
var del         = require('del');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var cleanCSS    = require('gulp-clean-css');

gulp.task('clean:dist', function(pFnDone) {
	del.sync(['dist/**', '!dist', '!dist/.gitkeep']);
	pFnDone();
});

gulp.task('clean:css', function(pFnDone) {
	del.sync(['dist/css/**']);
	pFnDone();
});

gulp.task('clean:image', function(pFnDone) {
	del.sync(['dist/img/**']);
	pFnDone();
});

gulp.task('clean:js', function(pFnDone) {
	del.sync(['dist/js/**']);
	pFnDone();
});

gulp.task('clean:lib', function(pFnDone) {
	del.sync(['dist/lib/**']);
	pFnDone();
});

gulp.task('clean:html', function(pFnDone) {
	del.sync(['dist/**/*.+(html|htm)', '!dist/lib', '!dist/lib/**/*.+(html|htm)']);
	pFnDone();
});

gulp.task('image', gulp.series('clean:image', function imageBuild(pFnDone) {
	!(gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
		.pipe(imagemin({
			optimizationLeve : 5,
			interlaced: true
		}))
		.pipe(gulp.dest('dist/img'))
	);
	pFnDone();
}));

gulp.task('sass', function(pFnDone) {
	!(gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(concat('scssStyles.css'))
		.pipe(gulp.dest('app/css'))
	);
	pFnDone();
});

gulp.task('css', gulp.series('clean:css', function cssBuild(pFnDone) {
	!(gulp.src('app/css/**/*.css')
		.pipe(plumber())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('dist/css', { overwrite: true }))
		.pipe(rename('styles.min.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css', { overwrite: true }))
	);
	pFnDone();
}));

gulp.task('coffee', function(pFnDone) {
	!(gulp.src('app/coffee/**/*.coffee')
		.pipe(coffee())
		.pipe(concat('coffeeScripts.js'))
		.pipe(gulp.dest('app/js'))
	);
	pFnDone();
});

gulp.task('js', gulp.series('clean:js', function jsBuild(pFnDone) {
	!(gulp.src('app/js/*.js')
		.pipe(plumber())
		.pipe(deporder()) // Ensure dependency order
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename('scripts.min.js'))
		//.pipe(stripdebug()) // Remove debug lines
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
	);
	pFnDone();
}));

gulp.task('lib', gulp.series('clean:lib', function libBuild(pFnDone) {
	!(gulp.src(['app/lib/**/*', '!app/lib/.gitkeep'])
		.pipe(gulp.dest('dist/lib'))
	);
	pFnDone();
}));

gulp.task('html', gulp.series('clean:html', function htmlBuild(pFnDone) {
	!(gulp.src(['app/**/*.+(html|htm)', '!app/lib/**'])
		//.pipe(htmlclean()) // Clean HTML (comments, unnecessary whitespaces / attributes, etc.)
		.pipe(gulp.dest('dist'))
	);
	pFnDone();
}));

gulp.task('watch', function(pFnDone) {
	gulp.watch('app/img/**/*.+(png|jpg|jpeg|gif|svg)', gulp.series('image'))
	gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
	gulp.watch('app/css/**/*.css', gulp.series('css'));
	gulp.watch('app/coffee/**/*.coffee', gulp.series('coffee'));
	gulp.watch('app/js/**/*.js', gulp.series('js'));
	gulp.watch(['app/lib/**/*', '!app/lib/.gitkeep'], gulp.series('lib'));
	gulp.watch(['app/**/*.+(html|htm)', '!app/lib'], gulp.series('html'));
	gulp.watch('dist/**/*', function ReloadBrowser(pFnDone) {
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

gulp.task('build', gulp.series('clean:dist', gulp.parallel('image', gulp.series('sass','css'), gulp.series('coffee', 'js'), 'lib', 'html')));

gulp.task('dev', gulp.parallel(gulp.series('build', 'connect', 'watch')));

gulp.task('default', gulp.series('build'));
