
function parked (carparks, id) {
  if (id < 4) { return student(carparks, id) } 
  else if (id >= 4 < 10) { return 'green' } 
  else { return corner(carparks, id) }
}

function student (carparks, id) {
  var blockercar = carparks.carparks[id + 5]
  if (blockercar.status) {
    return 'red'
  } else { return 'green' }
}

function corner (carparks, id) {
  var blockercar = carparks.carparks[id - 2]
  if (blockercar.status) {
    return 'red'
  } else { return 'green' }
}


function unParked (carparks, id) {
  
}
