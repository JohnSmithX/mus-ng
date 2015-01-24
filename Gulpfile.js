'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');


var browserSync = require('browser-sync'),
    reload = browserSync.reload;


gulp.task('browser-sync', function() {
  browserSync({
    server: {
      notify: false,
      logPrefix: 'BW',
      baseDir: './dist',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });
});


// Dev task
gulp.task('dev', ['clean', 'views', 'styles', 'images', 'lint', 'browserify']);

// Clean task
gulp.task('clean', function() {
	gulp.src('./dist/views', { read: false }) // much faster
  .pipe(rimraf({force: true}));
});

// JSHint task
gulp.task('lint', function() {
  gulp.src('app/scripts/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Styles task
gulp.task('styles', function() {
  gulp.src('app/styles/*.scss')
    // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
    .pipe(sass({onError: function(e) { console.log(e); } }))
    // Optionally add autoprefixer
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    // These last two should look familiar now :)
    .pipe(gulp.dest('dist/css/'))
    .pipe(reload({stream:true}));
});

//Images task
gulp.task('images', function () {
  gulp.src('app/images/**')
    .pipe(gulp.dest('dist/images/'));
});

// Browserify task
gulp.task('browserify', function() {
  // Single point of entry (make sure not to src ALL your files, browserify will figure it out)
  gulp.src(['app/scripts/main.js'])
    .pipe(browserify({
    insertGlobals: true,
    debug: false,
    shim: {
      angular: {
        path: './bower_components/angular/angular.js',
        exports: 'angular'
      },
      'angular-resource': {
        path: './bower_components/angular-resource/angular-resource.js',
        exports: 'ngResource',
        depends: {
          angular: 'angular'
        }
      },
      'angular-animate': {
        path: './bower_components/angular-animate/angular-animate.js',
        exports: 'ngAnimate',
        depends: {
          angular: 'angular'
        }
      },
      'angular-aria': {
        path: './bower_components/angular-aria/angular-aria.js',
        exports: 'ngAria',
        depends: {
          angular: 'angular'
        }
      },
      'hammerjs': {
        path: './bower_components/hammerjs/hammer.js',
        exports: 'hammerjs'

      },
      'angular-material': {
        path: './bower_components/angular-material/angular-material.js',
        exports: 'ngMaterial',
        depends: {
          angular: 'angular',
          'angular-animate': 'ngAnimate',
          'angular-aria': 'ngAria',
          hammerjs: 'hammerjs'
        }
      }

    }
  }))
    // Bundle to a single file
    .pipe(concat('bundle.js'))
    // Output it to our dist folder
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({stream:true}));
});

// Views task
gulp.task('views', function() {
  // Get our index.html
  gulp.src('app/index.html')
  // And put it in the dist folder
    .pipe(gulp.dest('dist/'))
    .pipe(reload({stream:true}));

  // Any other view files from app/views
  gulp.src('app/views/**/*')
  // Will be put in the dist/views folder
    .pipe(gulp.dest('dist/views/'))
    .pipe(reload({stream:true}));
});

gulp.task('reload', function () {
  browserSync.reload({
    stream: true
  });
});

gulp.task('watch', ['browser-sync'], function() {

  // Watch our scripts, and when they change run lint and browserify
  gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'],[
    'lint',
    'browserify'

  ]);
  // Watch our sass files
  gulp.watch(['app/styles/**/*.scss'], [
    'styles'
  ]);

  gulp.watch(['app/**/*.html'], [
    'views'
  ]);

});

gulp.task('default', ['dev', 'watch']);
