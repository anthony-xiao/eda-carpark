const park = require('../functions/park')
const carpark = {
  'id': 1,
  'name': 'test',
  'rego': 'test',
  'mobile': '111',
  'status': false,
  'blocked': false,
  'colour': null
}

test('testing blocker function changes colour to self-colour and other car to other colour', () => {
  const expected = 'green'
  const actual = park(carpark)
  expect(actual.carparks[1].colour).toBe(expected)
})
