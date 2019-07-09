import { series, src, dest, watch, parallel } from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import del from 'del';
import plumber from 'gulp-plumber';
import cleanCSS from 'gulp-clean-css';
import babel from 'gulp-babel';
import compiler from 'webpack';
import webpack from 'webpack-stream';
//import deporder from 'gulp-deporder';
//import htmlclean from 'gulp-htmlclean';
//import stripdebug from 'gulp-strip-debug';
//import { merge } from 'event-stream';
const browserSync   = require('browser-sync').create();

function clearDist() {
	return del(['dist/**', '!dist', '!dist/.gitkeep']);
}

function clearCss() {
	return del(['dist/css/**']);
}

function clearImage() {
	return del(['dist/img/**']);
}

function clearLib() {
	return del(['dist/lib/**']);
}

function clearHtml() {
	return del(['dist/**/*.+(html|htm)', '!dist/lib', '!dist/lib/**/*.+(html|htm)']);
}

function clearBabel() {
	return del(['app/js/babel/**']);
}

function clearWebpack() {
	return del(['app/babel/webpack/**']);
}

function clearJs() {
	return del(['dist/js/**']);
}

function buildImage() {
	return src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
		.pipe(imagemin())
		.pipe(dest('dist/img'));
}

function buildSass() {
	return src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(dest('app/css/sass'));
}

function buildCss() {
	return src('app/css/**/*.css')
		.pipe(plumber())
		.pipe(concat('styles.css'))
		.pipe(dest('dist/css', { overwrite: true }))
		.pipe(rename('styles.min.css'))
		.pipe(cleanCSS())
		.pipe(dest('dist/css', { overwrite: true }));
}

function buildWebpack() {
	return src('app/webpack/**/*.js')
		.pipe(webpack({
			mode: 'development'
		}, compiler, function (err, stats) { }))
		.pipe(rename('webpack.js'))
		.pipe(dest('app/babel/webpack'));
}

function buildBabel() {
	return src('app/babel/**/*.js')
		.pipe(plumber())
		.pipe(babel({ presets: ['@babel/preset-env'], sourceType: 'script' }))
		.pipe(dest('app/js/babel'));
}

function buildJs() {
	return src('app/js/**/*.js')
		.pipe(plumber())
		//.pipe(deporder()) // Ensure dependency order
		.pipe(concat('scripts.js'))
		.pipe(dest('dist/js'))
		.pipe(rename('scripts.min.js'))
		//.pipe(stripdebug()) // Remove debug lines
		.pipe(uglify())
		.pipe(dest('dist/js'));
}

function buildLib() {
	return src(['app/lib/**/*', '!app/lib/.gitkeep'])
		.pipe(dest('dist/lib'));
}

function buildHtml() {
	return src(['app/**/*.+(html|htm)', '!app/lib/**'])
		//.pipe(htmlclean()) // Clean HTML (comments, unnecessary whitespaces / attributes, etc.)
		.pipe(dest('dist'));
}

function taskConnect(cb) {
	browserSync.init({
		server: { baseDir: 'dist/', directory: true },
		open: false,
		minify: false,
		reloadOnRestart: true
	});
	cb();
}

function taskWatch(cb) {
	watch(['app/img/**/*.+(png|jpg|jpeg|gif|svg)'], { delay: 250 }, taskImage);
	watch(['app/scss/**/*.scss'], { delay: 250 }, taskSass);
	watch(['app/css/**/*.css'], { delay: 250 }, taskCss);
	watch(['app/webpack/**/*.js'], { delay: 250 }, taskWebpack);
	watch(['app/babel/**/*.js'], { delay: 250 }, taskBabel);
	watch(['app/js/**/*.js'], { delay: 250 }, taskJs);
	watch(['app/lib/**/*', '!app/lib/.gitkeep'], { delay: 250 }, taskLib);
	watch(['app/**/*.+(html|htm)', '!app/lib'], { delay: 250 }, taskHtml);
	watch(['dist/**/*'], { delay: 250 }, function ReloadBrowser(cb) {
		browserSync.reload();
		cb();
	});
	cb();
}

const taskImage   = series(clearImage, buildImage);
const taskSass    = series(buildSass);
const taskCss     = series(clearCss, buildCss);
const taskWebpack = series(clearWebpack, buildWebpack);
const taskBabel   = series(clearBabel, buildBabel);
const taskJs      = series(clearJs, buildJs);
const taskLib     = series(clearLib, buildLib);
const taskHtml    = series(clearHtml, buildHtml);
const taskBuild   = series(
	clearDist,
	parallel(
		taskImage,
		series(
			taskSass,
			taskCss
		),
		series(
			taskWebpack,
			taskBabel,
			taskJs
		),
		taskLib,
		taskHtml
	)
);
const taskDev     = series(taskBuild, taskConnect, taskWatch);

exports.build     = taskBuild;
exports.dev       = taskDev;
exports.default   = taskBuild;