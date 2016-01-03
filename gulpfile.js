var del = require('del');
var gulp = require('gulp');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject('tsconfig.json', {typescript: require('typescript')});
var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var nano = require('gulp-cssnano');
var watch = require('gulp-watch');

var livereload = require('gulp-livereload');

gulp.task('js', function () {

    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(rename({dirname: ''}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app'));
});

gulp.task('css', function () {
    return gulp.src('src/*.less')
        //.pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefix())
        //.pipe(concat('todo.css'))
        //.pipe(sourcemaps.write())
        //.pipe(nano())
        //.pipe(watch('src/**/*.less'))
        .pipe(gulp.dest('app'));
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
    	//.pipe(watch('src/**/*.html'))
        .pipe(gulp.dest('app'));
});

gulp.task('clean', function (done) {
    del(['app'], done);
});

gulp.task('default', ['clean','js', 'css', 'html','watch']);


gulp.task('watch',function(){
    gulp.watch('src/*.less',['css','js']);
    gulp.watch('src/*.ts',['js']);
    gulp.watch('src/*.html',['html']);
});
