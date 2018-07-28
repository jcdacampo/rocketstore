let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let uglifyes = require('gulp-uglify-es').default;

let styleSRC = './src/assets/scss/*.scss';
let styleDIST = './dist/css/';
let scriptSRC = './src/assets/js/*.js';
let scriptClassSRC = './src/assets/js/class/*.js';
let scriptDIST = './dist/js/';
let scriptClassDIST = './dist/js/class';

/**
 * Minificar arquivos CSS
 */
gulp.task('styles', function () {
  gulp.src(styleSRC)
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(styleDIST));
});

/**
 * Minificar arquivos JS
 */
gulp.task('scripts', function () {
  gulp.src(scriptSRC)
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(scriptDIST));
});

/**
 * Minificar classes JS
 */
gulp.task('uglify-class', function () {
    gulp.src(scriptClassSRC)
        .pipe(uglifyes().on('error',function (e) {
            console.log(e);
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(scriptClassDIST));
});

/**
 * Edição em tempo real
 */
gulp.task('watch', function () {
  gulp.watch(scriptSRC, ['scripts']);
  gulp.watch('./**/*.scss', ['styles']);
  gulp.watch(scriptClassSRC, ['uglify-class']);
});

/**
 * Tarefa Principal
 */
gulp.task('default', ['scripts', 'uglify-class' ,'styles', 'watch']);
