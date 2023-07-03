const frisby = require('frisby')
const Joi = frisby.Joi

describe('30 days of Postman - Day 17: Visualizations', () => {
    it('Find pokemons types and visualize them', async () => {
        const result = await frisby.get('https://pokeapi.co/api/v2/type')
        .expect('status', 200)
        .expect('jsonTypes', 'results', Joi.array());

        function Type(name, url) {
            this.name = name;
            this.url = url;
          }
        
        let results = result.json.results
        let types = {}
        let counter = 1
        results.forEach(element => {
            types[counter] = new Type(element.name, element.url);
            counter++
        });

        console.table(types);
    })
})