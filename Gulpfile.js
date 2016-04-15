var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat =  require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');

gulp.task('sass', function () {
    return gulp.src('./src/sass/clockpicker.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [
                './bower_components/'
            ],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(concat('materialize.clockpicker.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function () {
    return gulp.src('./src/js/materialize.clockpicker.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('watch', function () {
    watch('src/**/*.js', function () {
        gulp.start('js');
    });

    watch('src/**/*.scss', function () {
        gulp.start('sass');
    })
});


