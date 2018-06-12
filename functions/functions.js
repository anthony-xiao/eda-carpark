const data = require('../data.json')
// let data = {
//   'carparks': [
//     {
//       'id': 1,
//       'name': 'test',
//       'rego': '',
//       'mobile': '',
//       'parked': false,
//       'blocked': false,
//       'colour': ''
//     }
//   ]
// }

// function clear (id) {
//   const park = data.carparks
//   for (let i = 0; i < park.length; i++) {
//     if (park[i].id === id)
//     for (let j = 0; j< park.length[i].length; i++)
//   }
// }

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

