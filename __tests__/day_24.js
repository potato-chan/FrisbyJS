const frisby = require('frisby');
const randomWords = require('better-random-words');
const moment = require('moment')

describe('30 days of Postman - Day 24: Using libraries', () => {
    it('Status code is 200. Response contains random generated word.', async () => {
        var word = randomWords()
        const result = await frisby
            .setup({
                request: {
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            })
            .get(`https://icanhazdadjoke.com/search?term=${word}`)
            .expect('status', 200)
            .expect('json', 'search_term', word)
    })

    it('Log to the console what day is two days from now', async () => {
        const result = await frisby.get('http://worldtimeapi.org/api/ip')
        .expect('status', 200)
        var response_day = result.json.day_of_week
        var currentDate = moment()
        var dayName = currentDate.day(response_day + 2).format('dddd')
        console.log(dayName)
    })
})    
