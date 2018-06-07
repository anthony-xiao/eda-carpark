const blocker = require('../functions/blocker')

test('testing blocker function changes colour to self-colour and other car to other colour', done => {
  const carparks = {
    'carparks': [
      {
        'id': 1,
        'colour': 'clear'
      },
  
      {
        'id': 2,
        'colour': 'clear'
      }
    ]
  }
  const id = 1
  const self = 'green'
  const other = 'red'
  const expected = 'red'
  const actual = blocker(carparks, id, self, other)
  expect(actual).toBe(expected)
})
