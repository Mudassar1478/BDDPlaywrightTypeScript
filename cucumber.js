const { format } = require("path");

module.exports = {
  default: {
    require: [
      'features/step_definitions/**/*.ts',
      'support/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    paths: ['features/**/*.feature'],    
    timeout : 20000,
    format: ['./reporter.js'],
    formatOptions: {
      resultsDir: 'allure-results'
    }
    
  }
};