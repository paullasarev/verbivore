// Karma configuration
// Generated on Sat Dec 27 2014 14:40:08 GMT+0400 (SAMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'dist',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],
    // frameworks: ['mocha', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      // 'test-main.js',
      // {pattern: 'test/**/*.js', included: false}
      {pattern: 'bower_components/jquery/dist/jquery.js', watched:false, included:true, served:true},
      {pattern: 'bower_components/underscore/underscore.js', watched:false, included:true, served:true},
      {pattern: 'bower_components/backbone/backbone.js', watched:false, included:true, served:true},
      {pattern: "bower_components/backbone.marionette/lib/backbone.marionette.js", watched:false, included:true, served:true},
      {pattern: "bower_components/backbone.babysitter/lib/backbone.babysitter.js", watched:false, included:true, served:true},
      {pattern: "bower_components/backbone.wreqr/lib/backbone.wreqr.js", watched:false, included:true, served:true},
      'app/app.js',
      'app/app.css',
      'start_app.js',
      // 'test/*.js',
      {pattern: 'bower_components/assert/assert.js', watched:false, included:true, served:true},
      {pattern: 'bower_components/tdstyle/tdstyle.js', watched:false, included:true, served:true},
      // {pattern: './app/**/*.html', watched:true, included:false, served:true},
      // {pattern: './test/*.html', watched:true, included:false, served:true},
      '../test/app.js',

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
