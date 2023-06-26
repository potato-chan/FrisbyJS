const frisby = require('frisby')

describe('30 days of Postman - Day 10: Mock services', () => {
    it('Call the mock', function () {
        return frisby.get('https://79728b7e-c313-4724-8f8e-f8f3f5841f1f.mock.pstmn.io')
          .expect('status', 200)
          .expect('header', 'Content-Type', 'application/json; charset=utf-8')
          .expect('json', 'greeting', {'message': 'Hello there 🍪'})
          .then((result) => {
            console.info(result.json)
          })
    })

    it('Call the mock with params', function () {
        let goodbye = true
        return frisby.get(`https://79728b7e-c313-4724-8f8e-f8f3f5841f1f.mock.pstmn.io?goodbye=${goodbye}`)
          .expect('status', 200)
          .expect('header', 'Content-Type', 'application/json; charset=utf-8')
          .expect('json', 'goodbye', {'message': 'See you 🌸'})
          .then((result) => {
            console.info(result.json)
          })
    })
})