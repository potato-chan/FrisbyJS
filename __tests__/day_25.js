const frisby = require('frisby');
const Joi = frisby.Joi
const hexColorString = require('randomhexcolor')

describe('30 days of Postman - Day 25: Dynamic request bodies', () => {
    it('Status code is 200. Response contains info about random generated hex.', async () => {
       var randomHex = hexColorString().substring(1)
       const colorInfo = await frisby.get(`https://www.thecolorapi.com/id?hex=${randomHex}`)
       .expect('status', 200)
       .expect('json', ['hex', 'clean'], randomHex.toUpperCase())

       const result = await frisby.post('https://postman-echo.com/post', {
        hex: colorInfo.json.hex.value,
        rgb: colorInfo.json.rgb.value,
        name: colorInfo.json.name.value
       })
       .expect('status', 200)
       .expect('jsonTypes', 'data', Joi.object().required())
       console.log(result.json.data)
    })
})    
