module.exports = (carparks, id, self, other) => {
  if (id === 9) { carparks.carparks[9].colour = other } 
  //failing because of [10], there is only 10 spots, index 10 would find 11??
  carparks.carparks[id - 7].colour = other
  carparks.carparks[id - 1].colour = self
  return carparks
}
