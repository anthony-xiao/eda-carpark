const free = require('./free')
const blocker = require('./blocker')


module.exports = (carparks, id) => {
  if (id > 6 && id <= 9) { return blocker(carparks, id, 'clear', 'green') } else { return free(carparks, id, 'clear') }
}
