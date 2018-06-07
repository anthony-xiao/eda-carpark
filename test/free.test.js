const free = require('../functions/free')

test('testing free function changes colour to self-colour', done => {
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
  const expected = 'green'
  const actual = free(carparks, id, self)
  expect(actual).toBe(expected)
})
