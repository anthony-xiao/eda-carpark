module.exports = (carparks, id, self, other) => {
  carparks.carparks[id - 1].colour = self
  carparks.carparks[id - 7].colour = other
  if (id === 9) { carparks.carparks[10].colour = other }
  console.log(self)
  console.log(other)
  console.log(carparks)
  return carparks
}