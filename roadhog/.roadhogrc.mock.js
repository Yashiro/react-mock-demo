const url = '/index'
const data = ['haha1','haha2', 'haha3']
const mock = {
  [`GET ${url}`]: (req, res) => {
    const { query } = req
    console.log('query', query)
    res.status(200).json({
      data: data[query],
      total: data.length,
    })
  },
  [`POST ${url}`]: (req, res) => {
    const { query } = req
    console.log('query', query)
    res.status(300).json({
      data: data[query],
      total: data.length,
    })
  }
}
// require('fs').readdirSync(require('path').join(__dirname + '/src/mock')).forEach(function(file) {
// 	Object.assign(mock, require('./src/mock/' + file))
// })
module.exports = mock
