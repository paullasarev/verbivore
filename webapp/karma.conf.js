module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'browserify'],

        // list of files / patterns to load in the browser
        files: [
            // 'test/client/support/phantomjs-shims.js',
            '.tmp/styles/*.css',
             {pattern: 'app/images/*.png', watched: true, included: false, served: true},
            'app/vendor/jquery/dist/jquery.js',
            'app/vendor/tdstyle/tdstyle.js',
            'test/**/*.jsx'
        ],
 
         proxies:  {
            '/images': '/base/app/images',
          },
                // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // 'app/scripts/**/*.jsx': ['browserify'],
            'test/**/*.jsx': ['browserify'],
        },

        browserify: {
            debug: true,
            transform: [ 'reactify' ]
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
        //browsers: ['Chrome', 'Firefox', 'PhantomJS'],
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        // singleRun: true
        singleRun: false
    });
};