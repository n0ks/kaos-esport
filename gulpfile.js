var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	uglifyes = require('gulp-uglify-es').default,
	concat = require('gulp-concat'),
	prefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass');

gulp.task('browser-sync', ['sass'], function () {
	browserSync.init({
		server: "./app"
	});
	gulp.watch("app/*.html").on('change', browserSync.reload);
})

gulp.task('sass', function () {
	return gulp.src('./src/sass/main.scss')
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(prefixer({ browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] }))
		.pipe(gulp.dest('./app/assets/css/'))
		.pipe(browserSync.stream())
});

gulp.task('js', function () {
	return gulp.src('./src/js/**/*.js')
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglifyes())
		.pipe(gulp.dest('./app/assets/js/'))

});

gulp.task('imagemin', function () {
	return gulp.src('./src/img/**/*')
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(gulp.dest('./app/assets/img/'))
});

gulp.task('watch', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./src/js/**/*.js', ['js']);
	gulp.watch('./src/img/*.{jpg,png,gif,jpeg}', ['imagemin']);
});

gulp.task('default', ['sass','imagemin', 'js', 'browser-sync', 'watch']);