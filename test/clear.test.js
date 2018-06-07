const clear = require('../functions/clear')
const carData = {
  "id": 1,
  "name": 'test',
  "rego": 'test',
  "mobile": '111',
  "status": false,
  "blocked": false,
  "colour": null 
}

test('testing clear functions null everything buut id and returns status false', () => {
  const expected = {
    "id": 1,
    "name": null,
    "rego": null,
    "mobile": null,
    "status": false,
    "blocked": false,
    "colour": null 
  }
  const actual = clear(carData)
  expect(actual).toEqual(expected)
})
