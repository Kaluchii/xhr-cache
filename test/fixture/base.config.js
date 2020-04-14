const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  render: {
    resourceHints: false
  },
  modules: [
    require('../..')
  ]
}
