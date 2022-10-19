const request = require('request')

const url = 'https://pokeapi.co/api/v2/type'

let r = request(url,{json:true},function(error, response, body){
    const json = response.body.results
    console.log(json)
})