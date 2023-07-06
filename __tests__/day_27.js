const frisby = require('frisby')
const Joi = frisby.Joi
const BASEURL = 'http://security.postman-breakable.com'
const USERNAME = "itsusername" //should be new username, when create new user
const PASSWORD = "qwerty1234"

describe('30 days of Postman - Day 27: Scenario testing', () => {
    it('Bank user action scenario', async () => {
       //Create new user
       const createUser = await frisby.post(`${BASEURL}/user`, {
            "username": USERNAME, 
            "password": PASSWORD
        })
      .expect('status', 200)

       //Login with created user data
       const userLogin = await frisby.post(`${BASEURL}/user/login`, {
            "username": USERNAME,
            "password": PASSWORD
       })
       .expect('status', 200)
       .expect('json', ['response', 'username'], USERNAME)

       //Get userID and token for next steps
       var userId = userLogin.json.response.user_id
       var token = userLogin.json.response.session_token

       frisby.globalSetup({
        request: {
            headers: {'x-api-key': token}
        }
        });

      //Get account summary with logined user
      const accountSummary = await frisby.get(`${BASEURL}/account/${userId}/summary`)
     .expect('status', 200)
     .expect('jsonTypes', 'response', {
       'balance': Joi.number().required(),
       'last_transaction': Joi.number().required(),
     })

     //Logout from account
     const userLogout = await frisby.get(`${BASEURL}/user/logout`)
     .expect('status', 200)
     .expect('json', 'response', 'Successfully logged out!')

     //Try to get account summary with logouted user
     const accountSummaryLogout = await frisby.get(`${BASEURL}/account/${userId}/summary`)
     .expect('status', 403)

    })
})    
