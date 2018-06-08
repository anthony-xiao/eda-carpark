module.exports = (carData) => {
  for (let info in carData) {
    carData[info] = ''
  }
  carData.id = 1
  carData.status = false
  carData.blocked = false
  return carData
}
