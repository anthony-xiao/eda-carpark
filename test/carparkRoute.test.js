const cheerio = require('cheerio')
const request = require('supertest')
const server = require('../server')

test('GET carpark edit page form', done => {
  request(server)
    .get('/carpark/edit/1')
    .expect(200)
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const h1 = $('form').text()
      console.log(h1)
      expect(h1).toMatch('name')
      done(err)
    })
})

test('POST carpark edit', done => {
  request(server)
    .post('/carpark/edit/1')
    .send('name=test')
    .end((err, res) => {
      expect(res.statusCode).toBe(302)
      expect(res.text).toBe('Found. Redirecting to /')
      done(err)
    })
})
