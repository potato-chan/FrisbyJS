const frisby = require('frisby')

describe('30 days of Postman - Day 11: Monitoring', () => {
    it('Status code is 200. Check level of water and water plants, if level is low', async () => {
        const status = await frisby.get('https://water-ttl.herokuapp.com/hygrometer')
          .expect('status', 200)
          var levelOfWater = status.json.level
    
        //Check level of water and water plants, if level is low
        if (levelOfWater < 0.6){
            const watering = await frisby.post('https://water-ttl.herokuapp.com/water',{'duration': 10})
            .expect('status', 200)
            let success = watering.json.success
            if (success) {
                console.log('Plants were watering.')
            }
            else {
                console.log('Plants weren\'t watering.')
            }
        }
        else {
            console.log(`The soil isn't too dry. Level of water: ${levelOfWater}`)
        }
    })
})
