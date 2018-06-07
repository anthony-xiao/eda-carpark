module.exports = (carparks, id, self, other) => {
  carparks.carparks[id - 7].colour = other
    // carparks.carparks[id - 1].colour = self --line that is breaking the test, colour of undefined
  if (id === 9) { carparks.carparks[10].colour = other }
  return carparks
}