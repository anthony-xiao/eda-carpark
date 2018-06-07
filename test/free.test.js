const free = require('../functions/free')
const carparks = require('../data.json')

test('testing free function changes colour to self-colour', () => {
  const id = 1
  const self = 'green'
  const expected = 'green'
  const actual = free(carparks, id, self)
  expect(actual.carparks[0].colour).toBe(expected)
})
