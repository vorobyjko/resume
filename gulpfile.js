/**
 * Created by kostiantyn.bogapov on 12/14/2015.
 */

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');



gulp.task('webserver', function() {
    return gulp.src('./src/')
        .pipe(webserver({
            port: '8080',
            livereload: true,
        }));
});


gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('dist'))
});


gulp.task('default', ['js', 'webserver']);