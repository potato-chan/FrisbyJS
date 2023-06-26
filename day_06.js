const frisby = require('frisby');

describe('30 days of Postman - Day 06: Tests', () => {
    //This test should be PASS
    it('Status code is 200', function () {
        return frisby.get('https://icanhazdadjoke.com/')
          .expect('status', 200)
    });

    //This test should be FAIL
    it('Expected a 404', function () {
        return frisby.get('https://icanhazdadjoke.com/')
          .expect('status', 404)
    });
});