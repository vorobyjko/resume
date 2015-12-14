/**
 * Created by kostiantyn.bogapov on 12/14/2015.
 */

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var browserify = require("browserify");
var source = require('vinyl-source-stream');


gulp.task('webserver', function() {
    return gulp.src('dist')
        .pipe(webserver({
            port: '8080',
            livereload: true,
        }));
});


/*gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('dist'))
});*/

gulp.task('html', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'))
})

gulp.task('css', function() {
	gulp.src('src/css/style.css')
		.pipe(gulp.dest('dist/css/'))
})

gulp.task('img', function() {
	gulp.src('src/css/img/*.jpg')
		.pipe(gulp.dest('dist/css/img/'))
})


gulp.task('watch', function() {
    gulp.watch(['src/js/*.js', 'src/*.html', 'src/css/*.css'], ['html', 'css'])
});

gulp.task('browserify', function() {
    return browserify('src/js/main.js') 
			   .bundle()
			   .pipe(source('main.js'))
			   .pipe(gulp.dest('./dist/js'))
        });


gulp.task('default', ['watch', 'browserify', 'html', 'css', 'img', 'webserver']);