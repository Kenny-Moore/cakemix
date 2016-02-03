//Gulpfile.js
//BackOffice front-end development taskrunner
//See Readme.md for more info

//get all your task dependencies first
var gulp = require('gulp');
var sass = require('gulp-sass'); 
var autoprefixer = require('gulp-autoprefixer');
var taskListing = require('gulp-task-listing');

//set configuration
var config = {
  styles: ['core/**/*.scss', 'docs/**/*.scss'],
  styleIncludes: ['bower_components'],
  html: ['**/*.html'],
  outputPaths: { //careful not to use arrays here
    styles: './' //for now
  },
};


// build our styles
gulp.task('sass', [], function () {
  console.log("paths in sass task:", config.styles, config.outputPaths.styles);
  return gulp
    .src(config.styles, { base: './' })
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded',
      includePaths: config.styleIncludes,
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.outputPaths.styles));
});


// The default task (called when you run `gulp` from cmd)
gulp.task('default', taskListing);
