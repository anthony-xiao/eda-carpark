const free = require('./free')
const blocker = require('./blocker')

module.exports = (carpark, id) => {
  if (id > 6 && id <= 9) {
    return blocker(carpark, id, 'green', 'red')
  } else {
    return free(carpark, 'green')
  }
}
