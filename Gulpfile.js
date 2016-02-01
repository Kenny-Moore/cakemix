//Gulpfile.js
//BackOffice front-end development taskrunner
//See Readme.md for more info

//get all your task dependencies first
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var taskListing = require('gulp-task-listing');
var livereload = require('gulp-livereload');
var bower = require('main-bower-files');
var path = require("path");

console.log(__dirname);
var load_paths = bower({
  base: path.join(__dirname, "bower_components"),
  filter: '**/_*.scss'
});

var bower_src_paths = [];

for (var i = 0; i < load_paths.length; i++) {
  // we need to use the parent directories of the main files, not the files themselves
  // so ./bower_components/bootstrap-sass-official/assets/stylesheets/_bootstrap.scss
  // becomes ./bower_components/bootstrap-sass-official/assets/stylesheets
  load_paths[i] = path.dirname(load_paths[i]);
  bower_src_paths[i] = load_paths[i] + '**/*';
}

//set configuration
var config = {
  styles: ['core/**/*.scss'],
  styleIncludes: load_paths,
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
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded',
      includePaths: config.styleIncludes,
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.outputPaths.styles))
    .pipe(livereload());
});

// watch files we are working on
gulp.task('watch', ['sass'], function () {
  livereload.listen();
  gulp.watch(config.styles, ['sass']);
  gulp.watch(config.html, ['markup-watch']);
});

// reload browser(s) when markup changes
gulp.task('markup-watch', [], function () {
  return gulp.src(config.html)
          .pipe(livereload());
});

// update bower dependencies located in the vendor folder
gulp.task('mixer', function () {
  return gulp.src(bower_src_paths)
  .pipe(rename(function (path) {
    path.dirname += "/ciao";
  }))
  .pipe(gulp.dest('core/vendor'));
})

// The default task (called when you run `gulp` from cmd)
gulp.task('default', taskListing);
