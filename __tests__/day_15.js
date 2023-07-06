const frisby = require('frisby')

describe('30 days of Postman - Day 15: Write to file', () => {
    it('Status code is 200. Write the result to file', async () => {
        const result = await frisby
          .get('https://api.spacexdata.com/v4/launches/latest')
          .expect('status', 200)

        const fs = require('fs');
        var content = JSON.stringify(result.json);

        fs.writeFile('result.json', content, err => {
          if (err) {
            console.error(err);
          }
        });
    })
})
