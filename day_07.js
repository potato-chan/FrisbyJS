const frisby = require('frisby')

describe('30 days of Postman - Day 07: Debugging', () => {
    it('Using warn, info and log console statments for debugging', function () {
        let api_key = 'DEMO_KEY'
        let count = 10
        return frisby.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${count}`)
          .expect('status', 200)
          .expect('header', 'Content-Type', 'application/json')
          .then((result) => {
            let pics = result.json
            pics.forEach((pic) => { console.warn(pic.date), console.info(pic.media_type), console.log(pic.title, pic.url)})
          })
    })
});