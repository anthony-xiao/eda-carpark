module.exports = (carparks, id, self, other) => {
  if (id === 9) { carparks.carparks[9].colour = other } 
  carparks.carparks[id - 7].colour = other
  carparks.carparks[id - 1].colour = self
  return carparks
}
