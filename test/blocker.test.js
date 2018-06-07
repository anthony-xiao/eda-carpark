const blocker = require('../functions/blocker')
const carparksTest = require('../data.json')


test('testing blocker function changes colour to self-colour and other car to other colour', () => {
  
  const id = 9
  const self = 'red'
  const other = 'green'
  const expected = 'green'
  const actual = blocker(carparksTest, id, self, other)
  expect(actual.carparks[9].colour).toBe(expected)
})
