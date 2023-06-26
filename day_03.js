const frisby = require('frisby');
const baseURL = 'https://postman-echo.com'

describe('30 days of Postman - Day 03: Add request details', () => {
    it('Send post request with raw JSON', function () {
        return frisby.post(`${baseURL}/post`, {'data': 'doodles'})
          .expect('status', 200)
          .expect('json', 'data', {'data': 'doodles'})
          .then((result) => {
            console.log(result.json)
          })
          });
    })