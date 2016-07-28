
module.exports = function(config) {
  config.set({
    basePath: '',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    // reporters: ['progress', 'junit'],
    reporters: ['dots'],

    junitReporter: {
      outputDir: 'testReports',
      outputFile: 'unit.xml',
      suite: 'unit'
    }

  })
}