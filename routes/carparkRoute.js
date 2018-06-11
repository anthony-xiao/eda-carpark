const express = require('express')
const util = require('../functions/util')

const router = express.Router()

router.get('/', (req, res) => {
  util.getData((err, data) => {
    if (err) {
      res.send('oh no').status(500)
    } else {
      const parkInfo = JSON.parse(data)
      res.render('./partials/index', parkInfo)
    }
  })
})

router.get('/edit/:id', (req, res) => {
  util.getData((err, data) => {
    if (err) {
      res.send('broken').status(500)
    } else {
      const parkArr = JSON.parse(data)
      const parkId = Number(req.params.id)
      const parkProfile = parkArr.carparks.find(obj => obj.id === parkId)
      res.render('./partials/edit', parkProfile)
    }
  })
})

// router.get('/view/:id', (req, res) => {
//   const id = req.params.id
//   res.send(id)
// })

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
