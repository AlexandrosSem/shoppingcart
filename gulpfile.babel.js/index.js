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
		.pipe(plumber())
		.pipe(sass())
		.pipe(concat('styles.css'))
		.pipe(dest('dist/css', { overwrite: true }))
		.pipe(rename('styles.min.css'))
		.pipe(cleanCSS())
		.pipe(dest('dist/css', { overwrite: true }));
}

function buildWebpack() {
	return src('app/webpack/**/*.js')
		.pipe(plumber())
		.pipe(webpack({
			mode: 'development'
		}, compiler, function (err, stats) { }))
		.pipe(babel({ presets: ['@babel/preset-env'], sourceType: 'script' }))
		.pipe(rename('scripts.js'))
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

function serverInit(cb) {
	browserSync.init({
		server: { baseDir: 'dist/', directory: true },
		open: false,
		minify: false,
		reloadOnRestart: true
	});
	cb();
}

function watchFiles(cb) {
	watch(['app/img/**/*.+(png|jpg|jpeg|gif|svg)'], taskImage);
	watch(['app/scss/**/*.scss'], taskSass);
	watch(['app/webpack/**/*.js'], taskWebpack);
	watch(['app/lib/**/*', '!app/lib/.gitkeep'], taskLib);
	watch(['app/**/*.+(html|htm)', '!app/lib'], taskHtml);
	watch(['dist/**/*'], function ReloadBrowser(cb) {
		browserSync.reload();
		cb();
	});
	cb();
}

const taskImage   = series(clearImage, buildImage);
const taskSass    = series(clearCss, buildSass);
const taskWebpack = series(clearJs, buildWebpack);
const taskLib     = series(clearLib, buildLib);
const taskHtml    = series(clearHtml, buildHtml);
const taskConnect = series(serverInit);
const taskWatch   = series(watchFiles);
const taskBuild   = series(
	clearDist,
	parallel(
		taskImage,
		taskSass,
		taskWebpack,
		taskLib,
		taskHtml
	)
);
const taskDev     = series(taskBuild, taskConnect, taskWatch);

exports.build     = taskBuild;
exports.dev       = taskDev;
exports.default   = taskBuild;