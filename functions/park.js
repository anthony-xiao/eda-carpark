const free = require('./free')
const blocker = require('./blocker')

module.exports = (carparks, id) => {
    if (id > 6 || id <= 9) { return blocker(carparks, id, 'green', 'red') } else { return free(carparks, id, 'green') }
  }