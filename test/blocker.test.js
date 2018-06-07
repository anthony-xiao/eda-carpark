const blocker = require('../functions/blocker')

test('testing blocker function changes colour to self-colour and other car to other colour', () => {
  const carparks = {
    'carparks': [
      {
        'id': 8,
        'colour': 'clear'
      },
  
      {
        'id': 9,
        'colour': 'clear'
      }
    ]
  }
  const id = 8
  const self = 'green'
  const other = 'red'
  const expected = 'red'
  const actual = blocker(carparks, id, self, other)
  expect(actual).toBe(expected)
})
