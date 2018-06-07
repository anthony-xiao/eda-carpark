
// function park (carparks, id) {
//   if (id < 4) { return student(carparks, id) }
//   else if (id >= 4 < 10) { return 'green' }
//   else { return corner(carparks, id) }
// }

// function student (carparks, id) {
//   var blockercar = carparks.carparks[id + 5]
//   if (blockercar.status) {
//     return 'red'
//   } else { return 'green' }
// }

// function corner (carparks, id) {
//   var blockercar = carparks.carparks[id - 2]
//   if (blockercar.status) {
//     return 'red'
//   } else { return 'green' }
// }

// function unParked (carparks, id) {
//   for
// }
function leave (carparks, id) {
  if (id > 6 <= 9) { return blocker(carparks, id, 'clear', 'green') }
  else { return free(carparks, id, 'clear') }
}

function park (carparks, id) {
  if (id > 6 <= 9) { return blocker(carparks, id, 'green', 'red') }
  else { return free(carparks, id, 'green') }
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

