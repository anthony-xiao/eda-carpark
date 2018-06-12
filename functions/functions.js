const data = require('../data.json')

function clear (id) {
  let park = data.carparks
  for (let spot of park) {
    if (spot.id === id) {
      spot.name = ''
      spot.rego = ''
      spot.mobile = ''
      spot.colour = ''
      spot.parked = false
      spot.blocked = false
    }
  }
}

module.exports = {
  clear
}
