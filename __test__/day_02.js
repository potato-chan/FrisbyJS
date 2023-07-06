const frisby = require('frisby');
const baseURL = 'https://postman-echo.com'

describe('30 days of Postman - Day 02: Collections and environments', () => {
    it('Send post request with raw text', function () {
        return frisby.post(`${baseURL}/post`)
          .expect('status', 200)
          .expect('json', {'json': null})
          });

    it('Send get request with parameters', function () {
    return frisby.get(`${baseURL}/get?name=Ivan&surname=Ivanov`)
        .expect('status', 200)
        .expect('json', 'args', {'name': 'Ivan', 'surname': 'Ivanov'}) 
        });
    })
