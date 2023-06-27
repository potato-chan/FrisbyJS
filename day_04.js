const frisby = require('frisby');
const API_KEY = process.env.API_KEY

describe('30 days of Postman - Day 04: Authorization', () => {
    it('Send get request with headers', function () {
        return frisby
          .setup({
            request: {
              headers: {
                'x-api-key': API_KEY
              }
            }
          })
          .get('https://api.getpostman.com/collections')
          .expect('status', 200)
          .then((result) => {
            let collections = result.json.collections;
            let headers_result = ['Result request with headers']
            collections.forEach(element => headers_result.push(element.name))
            console.log(headers_result)
          })
          });

    it('Send get request with parametres', function () {
      return frisby
        .get(`https://api.getpostman.com/collections?apikey=${API_KEY}`)
        .expect('status', 200)
        .then((result) => {
          let collections = result.json.collections;
          let params_result = ['Result request with parametres']
          collections.forEach(element => params_result.push(element.name))
          console.log(params_result)
        })
        });
    })
