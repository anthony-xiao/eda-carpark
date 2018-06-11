const express = require('express')
const hbs = require('express-handlebars')
const rootRoute = require('./routes/rootRoute.js')
const carparkRoute = require('./routes/carparkRoute.js')

const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

server.use('/', rootRoute)
server.use('/carpark', carparkRoute)

module.exports = server
