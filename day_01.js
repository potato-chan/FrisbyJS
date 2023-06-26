const frisby = require('frisby');

describe('30 days of Postman - Day 01: Fork a collection', () => {
    it('Receive user-argent value and send user-argent value as parameter', function () {
        return frisby.post('https://postman-echo.com/post', {payload: 'hello world'})
          .expect('status', 200)
          .then((result) => {
            let user_agent = result.json.headers['user-agent'].replace('+', '')
            return frisby
            .get(`https://postman-echo.com/get?user-agent=${user_agent}`)
            .expect('status', 200)
            .expect('json', 'args', {'user-agent': user_agent}) 
          });
      });
})
