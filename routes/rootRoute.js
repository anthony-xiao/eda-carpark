const express = require('express')
const router = express.Router()
const dataProc = require('../dataProc.js')
const lib = require('../functions/lib')

// const changeData = require('../dataProc.js')

// router.get('/', (req, res) => {
//  res.send('I am here!')
// })

// call main page//////////////////////////////////////
router.get('/', (req, res) => {
  res.redirect('/carpark')
})

// read all car park status //////////////////////////////
router.get('/carpark', (req, res) => {
  dataProc.getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const carParkData = JSON.parse(data)
      res.render('/main', carParkData)
      // res.send('Test success! [carpark_allCars_test] : ' + JSON.stringify(carParkData))
    }
  })
})

// read one car information /////////////////////////////
router.get('/carpark/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  dataProc.getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const allData = JSON.parse(data)
      const carData = allData.carparks.find(pup => pup.id === id)
      // res.render('edit', carData)
      res.send('Test success! [carpark_oneCar_test by id] : ' + JSON.stringify(carData))
    }
  })
})

// read one car information /////////////////////////////
router.get('/carpark/view/:id', (req, res) => {
  const id = Number(req.params.id)
  dataProc.getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const allData = JSON.parse(data)
      const carData = allData.carparks.find(pup => pup.id === id)
      // res.render('view', carData)
      res.send('Test success! [carpark_oneCar_test by id] : ' + JSON.stringify(carData))
    }
  })
})

// change one car information by post method//////////////
router.post('/carpark/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  dataProc.getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const allData = JSON.parse(data)
      const carData = allData.carparks.find(pup => pup.id === id)
      carData.name = req.body.name
      carData.rego = req.body.rego
      carData.mobile = req.body.mobile
      carData.status = req.body.status
      let updatedData = lib.park(allData, id)
      const newData = JSON.stringify(updatedData, null, 2)
      dataProc.changeData(newData, (err) => {
        if (err) {
          res.send('unable to save the file').status(500)
        } else {
          res.redirect('/main')
        }
      })
    }
  })
})

router.post('/carpark/view/:id', (req, res) => {
  const id = Number(req.params.id)
  dataProc.getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const allData = JSON.parse(data)
      allData.carparks[id - 1] = lib.clear(allData.carparks.find(pup => pup.id === id))
      let updatedData = lib.leave(allData, id)
      const newData = JSON.stringify(updatedData, null, 2)
      dataProc.changeData(newData, (err) => {
        if (err) {
          res.send('unable to save the file').status(500)
        } else {
          res.redirect('/main')
        }
      })
    }
  })
})

module.exports = router
