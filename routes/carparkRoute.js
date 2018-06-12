const express = require('express')
const util = require('../functions/util')
const db = require('../functions/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.show()
    .then(parkInfo => {
      res.render('./partials/index', {parkInfo})
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

// router.get('/edit/:id', (req, res) => {
//   util.getData((err, data) => {
//     if (err) {
//       res.send('broken').status(500)
//     } else {
//       const parkArr = JSON.parse(data)
//       const parkId = Number(req.params.id)
//       const parkProfile = parkArr.carparks.find(obj => obj.id === parkId)
//       res.render('./partials/edit', parkProfile)
//     }
//   })
// })

router.get('/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  db.findPark(id)
    .then(park => {
      const parkObj = park[0]
      console.log(parkObj)
      res.render('./partials/edit', parkObj)
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

router.get('/view', (req, res) => {
  db.show()
    .then(parkInfo => {
      const parkObj = {parkInfo}[0]
      console.log(parkInfo)
      res.render('./partials/details', parkObj)
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

router.post('/edit/:id', (req, res) => {
  util.getData((err, data) => {
    const newName = req.body.name
    const newRego = req.body.rego
    const newMobile = req.body.mobile
    const newComments = req.body.comments
    if (err) {
      res.send('broken').status(500)
    } else {
      const parkArr = JSON.parse(data)
      const parkId = Number(req.params.id)
      const parkProfile = parkArr.carparks.find(obj => obj.id === parkId)
      parkProfile.name = newName
      parkProfile.rego = newRego
      parkProfile.mobile = newMobile
      parkProfile.comments = newComments
      const newProfile = JSON.stringify(parkArr, null, 2)
      util.writeData(newProfile, (err) => {
        if (err) {
          res.send('broken').status(500)
        } else {
          res.redirect('/carpark')
        }
      })
    }
  })
})

module.exports = router
