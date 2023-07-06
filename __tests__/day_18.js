const frisby = require('frisby');
const API_KEY = process.env.API_KEY

describe('30 days of Postman - Day 18: API specifications', () => {
    frisby.globalSetup({
      request: {
        headers: {
          'x-api-key': API_KEY
        }
      }
    })  
    
    it('Check collection', function () {
      let collectionId = '28158533-c50eb461-abc9-4082-8f9a-dbf5ab898e2e'
      return frisby
        .get(`https://api.getpostman.com/collections/${collectionId}`)
        .expect('status', 200)
        .expect('json', ['collection', 'info', 'uid'], collectionId)
        .expect('json', ['collection', 'info', 'name'], 'Cosmos')
      });

    it('Check API', function () {
    let apiId = 'fc4677d7-838a-4e3b-9d8b-8ae712f5343a'
    return frisby
        .get(`https://api.getpostman.com/apis/${apiId}`)
        .expect('status', 200)
        .expect('json', ['api', 'id'], apiId)
        .expect('json', ['api', 'name'], 'Cosmos')
    });
})
