const free = require('../functions/free')

function leave (carparks, id) {
  if (id > 6 <= 9) { return blocker(carparks, id, 'clear', 'green') } else { return free(carparks, id, 'clear') }
}

function park (carparks, id) {
  if (id > 6 <= 9) { return blocker(carparks, id, 'green', 'red') } else { return free(carparks, id, 'green') }
}


function blocker (carparks, id, self, other) {
  carparks.carparks[id - 1].colour = self
  carparks.carparks[id - 7].colour = other
  if (id === 9) { carparks.carparks[10].colour = other }
  console.log(self)
  console.log(other)
  console.log(carparks)
  return carparks
}

module.exports = {
  leave,
  park
}


console.log(carparks.carparks[0].colour)