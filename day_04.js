const frisby = require('frisby');
const api_key = 'API_KEY' //use your api_key

describe('30 days of Postman - Day 04: Authorization', () => {
    it('Send get request with headers', function () {
        return frisby
          .setup({
            request: {
              headers: {
                'x-api-key': api_key
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
        .get(`https://api.getpostman.com/collections?apikey=${api_key}`)
        .expect('status', 200)
        .then((result) => {
          let collections = result.json.collections;
          let params_result = ['Result request with parametres']
          collections.forEach(element => params_result.push(element.name))
          console.log(params_result)
        })
        });
    })