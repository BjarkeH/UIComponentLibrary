var gulp = require('gulp');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var wait = require('gulp-wait');
var concat = require('gulp-concat');

var fractal = require('./fractal.js');
const logger = fractal.cli.console; // Storing a reference to the fractal CLI console utility

const chalk = require('chalk');

/**
 * Custom Build tools
 * TODO:
 * Compile sass
 * Concatenate vendors
 * Concatenate JS & uglifying
 * Look into FTP 
 */

gulp.task("scripts", function() {
  return gulp
    .src('./Components/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('script.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('www/assets/js/'));
});

gulp.task('compile:sass', function() {
  return gulp
    .src(['./Components/**/*.sass', './Components/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(wait(200))
    .pipe(sass({
      outputStyle: 'expanded',
      sourceMap: true,
      // indentedSyntax: true
      // onError: function(err){
      //   console.log(chalk.red(err.message))
      // }
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(flatten())
    .pipe(sourcemaps.write())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./www/assets/css/'))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./www/assets/css'));
});

gulp.task('watchers:start', function() {
  // gulp.watch(gulp.parallel('./Components/**/*.sass', './Components/**/*.scss'), 'compile:sass');
  gulp.watch('./Components/**/*.sass', gulp.parallel('compile:sass'));
  gulp.watch('./Components/**/*.scss', gulp.parallel('compile:sass'));
  gulp.watch('./Components/**/*.js', gulp.parallel('scripts'));
});



/**
 * Fractal related -v- 
 */
// Start the fractal server with livereload
gulp.task('fractal:start', function() {
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
      logger.success(`Fractal server is now running at ${server.url}`);
  });
});

// Build a static version that an be uploaded to any server
gulp.task('fractal:build', function(){
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
      logger.success('Fractal build completed!');
  });
});


gulp.task('default', gulp.series(['fractal:start', 'compile:sass', 'scripts', 'watchers:start']));