const frisby = require('frisby')
const Joi = frisby.Joi

describe('30 days of Postman - Day 13: Newman', () => {
    it('The response includes a planet called "Tatooine"', function () {
        return frisby
          .get('https://swapi.dev/api/planets')
          .expect('status', 200)
          .expect("jsonTypes", {
            "results.0.name": Joi.string().valid("Tatooine")
        })
    })

    it('The first page includes a species that speaks the "Ewokese" language. Show the number of species taller 100.', async () => {
        const result = await frisby
          .get('https://swapi.dev/api/species')
          .expect('status', 200)
          .expect("bodyContains", "Ewokese")
        let results = result.json.results;
        let talls = 0
        results.forEach(element => {
            if (Number(element.average_height) > 100) {
                talls++
            }
        })
        console.log(`The number of species taller 100: ${talls}`)
    })
})
