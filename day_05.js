const frisby = require('frisby');
const currency = 'usd'

describe('30 days of Postman - Day 05: Variables', () => {
    it('Send get request with collection variable', function () {
        let coindeskBaseUrl = 'https://api.coindesk.com'
        return frisby.get(`${coindeskBaseUrl}/v1/bpi/currentprice/btc.json`)
          .expect('status', 200)
          .expect('header', 'Content-Type', 'application/javascript')
          .expect('bodyContains', 'BTC')
    });

    it('Send get request with global variable', function () {
        let coindeskBaseUrl = 'https://api.coindesk.com'
        return frisby.get(`${coindeskBaseUrl}/v1/bpi/currentprice/${currency}.json`)
          .expect('status', 200)
          .expect('header', 'Content-Type', 'application/javascript')
          .expect('bodyContains', 'USD')
    });
});