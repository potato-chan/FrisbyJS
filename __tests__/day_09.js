const frisby = require('frisby')

describe('30 days of Postman - Day 09: Scripting', () => {
    it('Get single random user and send it', function () {
        return frisby.get('https://randomuser.me/api')
          .expect('status', 200)
          .expect('header', 'Content-Type', 'application/json; charset=utf-8')
          .expect('json', 'info', {'results': 1})
          .then((result) => {
            let user = result.json.results[0]
            let firstName = user['name']['first']
            let lastName = user['name']['last']
            let email = user['email']
            let uuid = user['login']['uuid']
            console.info(firstName, lastName, email, uuid)
            return frisby.post('https://postman-echo.com/post', {
                'name': `${firstName} ${lastName}`,
                'email': email,
                'id': uuid
            })
            .expect('status', 200)
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
            .expect('json', 'data', {
                'name': `${firstName} ${lastName}`,
                'email': email,
                'id': uuid
            })
            .then((result) => {
                console.log(result.json)
            })
          })
    })
})
