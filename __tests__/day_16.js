const frisby = require('frisby')
jest.setTimeout(500000);

describe('30 days of Postman - Day 16: Pagination', () => {
    it('Find error page', async () => {
        let page = 0
        let status = 200

        while (status == 200){
            page++
            const result = await frisby.get(`http://xkcd.com/${page}/info.0.json`)
            status = result.status
        }

        console.log(`Error page is http://xkcd.com/${page}/info.0.json`)
    })
})
