const frisby = require('frisby')
const TOKEN = process.env.TOKEN

describe('30 days of Postman - Day 14: OAuth', () => {
    it('Status code is 200. Get repositories from Github', async () => {
        const result = await frisby
        .setup({
            request: {
              headers: {
                'Authorization': TOKEN
              }
            }
          })
          .get('https://api.github.com/user/repos')
          .expect('status', 200)
        let namesOfRepo = ['Repositories:']
        result.json.forEach(element => {
            namesOfRepo.push(element.name)
        });
        console.log(namesOfRepo)
    })
})
