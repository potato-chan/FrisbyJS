const frisby = require('frisby');

describe('30 days of Postman - Day 19: GraphQL', () => {
    it ('Send request with query to get artist and albums', async () => {
        let artist = "Queen"
        const result = await frisby
            .post('https://joyce-spotify-graphql.herokuapp.com/graphql', {
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: `
                        query getByArtist($name: String!) {
                            queryArtists(byName: $name) {
                                name
                                image
                                albums {
                                name
                            }
                            }
                        }
                    `,
                    variables: {name: artist},
                    })
                })
            .expect('status', 200)
            .expect('bodyContains', artist)
        
        console.log(result.json.data.queryArtists[0])
    })
})
