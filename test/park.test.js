const park = require('../functions/park')
const carparks = require('../data.json')

test('testing blocker function changes colour to self-colour and other car to other colour', () => {
  const id = 2
  const expected = 'green'
  const actual = park(carparks, id)
  expect(actual.carparks[1].colour).toBe(expected)
})
