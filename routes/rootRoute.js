const express = require('express')
const router = express.Router()
const dataProc = require('../dataProc.js')
// const changeData = require('../dataProc.js')

router.get('/', (req, res) => {
  res.send('I am here!')
})

// call main page//////////////////////////////////////
router.get('/carpark', (req, res) => {
  res.render('main')
})

// read all car park status //////////////////////////////
router.get('/carpark_allCars_test', (req, res) => {
  dataProc.getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const carParkData = JSON.parse(data)
      console.log(carParkData)
      // res.render('./home/index', carParkData)
      res.send('Test success! [carpark_allCars_test] : ' + JSON.stringify(carParkData))
    }
  })
})

// read one car information /////////////////////////////
router.get('/carpark_oneCar_test/:id', (req, res) => {
  const id = Number(req.params.id)
  dataProc.getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const allData = JSON.parse(data)
      const carData = allData.carparks.find(pup => pup.id === id)
      console.log(carData)
      // res.render('./home/index', carData)
      res.send('Test success! [carpark_oneCar_test by id] : ' + JSON.stringify(carData))
    }
  })
})

// read one car information return colour///////////////////
router.get('/carpark_colour_test/:id', (req, res) => {
  const id = Number(req.params.id)
  dataProc.getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const allData = JSON.parse(data)
      const carData = allData.carparks.find(pup => pup.id === id)
      console.log(carData.colour)
      // res.render('./home/index', carData)
      res.send('Test success! [carpark_getColour_test] : ' + JSON.stringify(carData.colour))
    }
  })
})

// change one car information by post method//////////////
router.post('/carpark_post_test/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  dataProc.getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const allData = JSON.parse(data)
      const carData = allData.puppies.find(pup => pup.id === id)
      carData.name = req.body.name
      carData.rego = req.body.rego
      carData.mobile = req.body.mobile
      carData.status = req.body.status
      console.log(carData)
      const newData = JSON.stringify(allData, null, 2)
      // dataProc.changeData(newData, (err) => {
      //  if (err) {
      //    res.send('unable to save the file').status(500)
      //  } else {
      //    res.redirect('/puppies/' + id)
      //  }
      // })

      res.send('Test success! [carpark_carpark_post_test]: ' + newData)
    }
  })
})

module.exports = router
