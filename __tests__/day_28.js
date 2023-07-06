const frisby = require('frisby')
const URL = 'https://www.w3schools.com'

describe('30 days of Postman - Day 28: UI testing', () => {
    it('Response time less then 1000 ms', async () => {
       const result = await frisby.get(`${URL}`)
       .expect('status', 200)
       expect(result._responseTimeMs < 1000)
    })

    it('Lighthouse performance score at least 90', async () => {
        const result = await frisby
        .setup({
         request: {
            timeout: 500000,
         }
        })
        .get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}`)
        .expect('status', 200)
        var score = result.json.lighthouseResult.categories.performance.score * 100
        expect(score >= 90)
     }, 500000)
})    
