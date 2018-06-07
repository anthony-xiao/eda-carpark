const free = require('./free')
const blocker = require('./blocker')


function leave (carparks, id) {
  if (id > 6 <= 9) { return blocker(carparks, id, 'clear', 'green') } else { return free(carparks, id, 'clear') }
}

function park (carparks, id) {
  if (id > 6 <= 9) { return blocker(carparks, id, 'green', 'red') } else { return free(carparks, id, 'green') }
}

module.exports = {
  leave,
  park
}


console.log(carparks.carparks[0].colour)