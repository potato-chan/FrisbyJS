const frisby = require('frisby');
const fs = require("fs");
const Joi = frisby.Joi
jest.setTimeout(500000);

describe('30 days of Postman - Day 23: Data files', () => {
    it('Status code is 200. Args contains region and boba properties', async () => {
        let data = fs.readFileSync('geoMap.csv', { encoding: 'utf8', flag: 'r' })
        data = data.split('\n').slice(1, -1)

        for (let i = 0; i < data.length; i++) {
            let element = data[i].split(',')//First element of array is region, second is boba
            const result = await frisby.get(`https://postman-echo.com/get?${element[0]}=${element[1]}`)
            .expect('status', 200)
            .expect('jsonTypes', 'args', Joi.object().required())
        }
    })
})    