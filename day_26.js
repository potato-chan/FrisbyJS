const frisby = require('frisby')
const cheerio = require('cherio')

describe('30 days of Postman - Day 26: Parse HTML response', () => {
    it('Status code is 200. Parse links from response.', async () => {
       let q = 'postman'
       const result = await frisby.get(`https://www.bing.com/search?q=${q}`)
       .expect('status', 200)

       const $ = cheerio.load(result.body)
       let responce_links = $('a');
       var links = []
       $(responce_links).each(function(i, link) {
        let url = $(link).attr('href');
        if ((typeof url === 'string') && (url.includes('http'))) {
            links.push(url)
        }
        })

        console.log(links)
    })
})    