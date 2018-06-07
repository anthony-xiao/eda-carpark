const request = require('supertest')
const server = require('../server')

test('server is up and running', done => {
  request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
      expect(res.text).toMatch('here')
      done(err)
    })
})
