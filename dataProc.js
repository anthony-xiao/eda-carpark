const fs = require('fs')
const path = require('path')

function getData (callback) {
  const filePath = path.join(__dirname, 'data.json')
  fs.readFile(filePath, 'utf8', callback)
}

function changeData (newData, callback) {
  const filePath = path.join(__dirname, 'data.json')
  fs.writeFile(filePath, newData, 'utf8', callback)
}

module.exports = {
  changeData,
  getData
}
