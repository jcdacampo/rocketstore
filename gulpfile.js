let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');

let styleSRC = './src/assets/scss/*.scss';
let styleDIST = './dist/css/';
let scriptSRC = './src/assets/js/*.js';
let scriptDIST = './static/js/';

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
 * Edição em tempo real
 */
gulp.task('watch', function () {
  gulp.watch(scriptSRC, ['scripts']);
  gulp.watch('./**/*.scss', ['styles']);
});

/**
 * Tarefa Principal
 */
gulp.task('default', ['scripts', 'styles', 'watch']);
