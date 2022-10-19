const request = require('request')

const url = 'https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood'

let r = request(url,{json:true},function(error, response, body){
    const json = response.body.data
    var i= 0
    json.forEach(element => {
        i++
        console.log("Verdad N°",i,element.fact)
        console.log()
    });
})