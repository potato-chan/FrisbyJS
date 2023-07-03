const frisby = require('frisby');
const API_KEY = process.env.API_KEY

describe('30 days of Postman - Day 21: WebSockets', () => {
    it('Check the collectionUid', () => {
      let collectionId = '649d57c9b8e38d5db3a10165'
      return frisby
        .setup({
            request: {
            headers: {
                'x-api-key': API_KEY
            }
            }
        })  
        .get(`https://postman-echo.com/get?collectionUid=${collectionId}`)
        .expect('status', 200)
        .expect('json', ['args', 'collectionUid'], collectionId)
      });
})