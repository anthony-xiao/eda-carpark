module.exports = (carparks, id, self) => {
  carparks.carparks[id - 1].colour = self
  return carparks
}
