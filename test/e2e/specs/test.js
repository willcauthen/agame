// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:9080')
      .waitForElementVisible('#app', 5000)
      .assert.containsText('#logs-panel', 'Log Panel')
      .assert.containsText('#actions-header', 'Action Panel')
      .assert.containsText('#stats-panel', 'stats are set up, too')
      .end()
  }
}
