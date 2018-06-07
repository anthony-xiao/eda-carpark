const express = require('express')
const router = express.Router()
const dataProc = require('../dataProc.js')
//const changeData = require('../dataProc.js')

router.get('/', (req, res) => {
  res.send('I am here!')
})

// call main page//////////////////////////////////////
router.get('/carpark', (req, res) => {
  res.render('main')
})

// read all car park status //////////////////////////////
router.get('/carpark_test', (req, res) => {
  dataProc.getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const carParkData = JSON.parse(data)
      console.log(carParkData)
      res.render('./home/index', carParkData)
    }
  })
})

// read one car information /////////////////////////////
router.get('/carpark_test/:id', (req, res) => {
  const id = Number(req.params.id)
  dataProc.getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const allData = JSON.parse(data)
      const carData = allData.carparks.find(pup => pup.id === id)
      console.log(carData)
      res.render('./home/index', carData)
    }
  })
})

module.exports = router
