const frisby = require('frisby')
const Joi = frisby.Joi
const API_KEY = process.env.API_KEY

describe('30 days of Postman - Day 29: Webhooks', () => {
    frisby.globalSetup({
        request: {
          headers: {
            'x-api-key': API_KEY
          }
        }
      })

    it('Create and trigger Webhook', async () => {
        let workspaceId = 'be1683ea-5240-4e58-abcd-c4b8cf89e0d9'
        let webhookName = 'echo webhook'
        let collectionUid = '28158533-c9816c9f-3b79-47d7-8c09-fa8824c52f18'
        const createWebhook = await frisby.post(`https://api.getpostman.com/webhooks?workspace=${workspaceId}`, {
            "webhook":{
                "name": webhookName,
                "collection": collectionUid
            }
        })
        .expect('status', 200)
        .expect('jsonTypes', 'webhook.webhookUrl', Joi.string().required())

        let webhookUrl = createWebhook.json.webhook.webhookUrl

        const triggerWebhook = await frisby.post(webhookUrl, {"message": "yellow world"})
        .expect('status', 200)
        .expect('bodyContains', 'ok')
    })
})