



function leave (carparks, id) {
  if (id > 6 <= 9) { return blocker(carparks, id, 'clear', 'green') } else { return free(carparks, id, 'clear') }
}

function park (carparks, id) {
  if (id > 6 <= 9) { return blocker(carparks, id, 'green', 'red') } else { return free(carparks, id, 'green') }
}

function free (carparks, id, self) {
  carparks.carparks[id - 1].colour = self
  return carparks
}
function blocker (carparks, id, self, other) {
  carparks.carparks[id - 1].colour = self
  carparks.carparks[id - 7].colour = other
  if (id === 9) { carparks.carparks[10].colour = other }
  return carparks
}

module.exports = {
  leave,
  park
}
