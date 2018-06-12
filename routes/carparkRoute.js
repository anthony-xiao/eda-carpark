const express = require('express')
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

router.get('/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  db.findPark(id)
    .then(park => {
      const parkObj = park[0]
      res.render('./partials/edit', parkObj)
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

router.get('/view', (req, res) => {
  db.show()
    .then(parkInfo => {
      res.render('./partials/details', {parkInfo})
    })
    .catch(err => {
      res.send(err.message).status(500)
    })
})

router.post('/edit/:id', (req, res) => {
  const id = req.params.id
  let parkData = {
    name: req.body.name,
    rego: req.body.rego,
    mobile: req.body.mobile,
    comments: req.body.comments
  }
  db.updatePark(id, parkData)
    .then(res.redirect('/carpark')
    )
    .catch(err => {
      res.send(err.message).status(500)
    })
})

module.exports = router
