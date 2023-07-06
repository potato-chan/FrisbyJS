const frisby = require('frisby')
const Joi = frisby.Joi
const baseURL = 'https://randomuser.me/api'


describe('30 days of Postman - Day 08: Run a collection', () => {
    it('Get single random user', function () {
        return frisby.get(`${baseURL}`)
          .expect('status', 200)
          .expect('header', 'Content-Type', 'application/json; charset=utf-8')
          .expect('json', 'info', {'results': 1})
    })

    it('Get single random female user', function () {
        let gender = 'female'
        return frisby.get(`${baseURL}?gender=${gender}`)
          .expect('status', 200)
          .expect('header', 'Content-Type', 'application/json; charset=utf-8')
          .expect('json', 'info', {'results': 1})
          .expect("jsonTypes", {
            "results.0.gender": Joi.string().valid("female")
        })
    })

    it('Get single random female french user', function () {
        let gender = 'female'
        let nat = 'FR'
        return frisby.get(`${baseURL}?gender=${gender}nat=${nat}`)
          .expect('status', 200)
          .expect('header', 'Content-Type', 'application/json; charset=utf-8')
          .expect('json', 'info', {'results': 1})
          .expect("jsonTypes", {
            "results.0.nat": Joi.string().valid("FR")
        })
    })
})
