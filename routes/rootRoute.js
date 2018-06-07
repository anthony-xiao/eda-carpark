const express = require('express')
const router = express.Router()
const getData = require('../getData.js')

router.get('/', (req, res) => {
  res.send('I am here!')
})

router.get('/carpark', (req, res) => {
  res.render('main')
})

router.get('/carpark_test', (req, res) => {
  getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const carParkData = JSON.parse(data)
      res.render('./home/index', carParkData)
    }
  })
})

module.exports = router
