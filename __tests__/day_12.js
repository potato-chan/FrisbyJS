const frisby = require('frisby');
const API_KEY = process.env.API_KEY

describe('30 days of Postman - Day 12: Postman API', () => {
    frisby.globalSetup({
      request: {
        headers: {
          'x-api-key': API_KEY
        }
      }
    })  
    
    it('Get single collection', function () {
      let collectionId = '28158533-301ca513-c62b-4935-bff3-4423f41a46b8'
      return frisby
        .get(`https://api.getpostman.com/collections/${collectionId}`)
        .expect('status', 200)
        .expect('json', ['collection', 'info', 'uid'], collectionId)
        .then((result) => {
            console.log(`Collection name: ${result.json.collection.info.name}`)
          })
      });

    it('Get single environment', function () {
      let environmentId = '28158533-21ffa9c6-510c-4fa5-90a2-4b2458678673'
      return frisby
        .get(`https://api.getpostman.com/environments/${environmentId}`)
        .expect('status', 200)
        .then((result) => {
            console.log(`Enviroment name: ${result.json.environment.name}`)
            let valuesArr = result.json.environment.values
            let values = ['Values']
            valuesArr.forEach(element => {values.push(`${element.key}: ${element.value}`)});
            console.log(values)
          })
      });

      it('Get single workspace', function () {
        let workspaceId = 'be1683ea-5240-4e58-abcd-c4b8cf89e0d9'
        return frisby
          .get(`https://api.getpostman.com/workspaces/${workspaceId}`)
          .expect('status', 200)
          .expect('json', ['workspace', 'id'], workspaceId)
          .then((result) => {
              console.log(`Workspace name: ${result.json.workspace.name}`)
            })
        });
    
})
