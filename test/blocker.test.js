const blocker = require('../functions/blocker')

test('testing blocker function changes colour to self-colour and other car to other colour', () => {
  const carparks = {
    'carparks': [
      {
        'id': 1,
        'name': null,
        'rego': null,
        'mobile': null,
        'status': false,
        'blocked': false,
        'colour': null
      },

      {
        'id': 2,
        'name': null,
        'rego': null,
        'mobile': null,
        'status': false,
        'blocked': false,
        'colour': null
      },

      {
        'id': 3,
        'name': null,
        'rego': null,
        'mobile': null,
        'status': false,
        'blocked': false,
        'colour': null
      },

      {
        'id': 4,
        'name': null,
        'rego': null,
        'mobile': null,
        'status': false,
        'blocked': false,
        'colour': null
      },

      {
        'id': 5,
        'name': null,
        'rego': null,
        'mobile': null,
        'status': false,
        'blocked': false,
        'colour': null
      },

      {
        'id': 6,
        'name': null,
        'rego': null,
        'mobile': null,
        'status': false,
        'blocked': false,
        'colour': null
      },

      {
        'id': 7,
        'name': null,
        'rego': null,
        'mobile': null,
        'status': false,
        'blocked': false,
        'colour': null
      },

      {
        'id': 8,
        'name': null,
        'rego': null,
        'mobile': null,
        'status': false,
        'blocked': false,
        'colour': null
      },

      {
        'id': 9,
        'name': null,
        'rego': null,
        'mobile': null,
        'status': false,
        'blocked': false,
        'colour': null
      },

      {
        'id': 10,
        'name': null,
        'rego': null,
        'mobile': null,
        'status': false,
        'blocked': false,
        'colour': null
      }
    ]
  }

  const id = 9
  const self = 'red'
  const other = 'green'
  const expected = 'green'
  const actual = blocker(carparks, id, self, other)
  expect(actual).toBe(expected)
})
