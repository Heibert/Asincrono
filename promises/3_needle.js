const needle = require('needle')

let endpoint = 'https://pokeapi.co/api/v2/type'

needle('get',endpoint)
.then((response)=>{
    return response.body.results
})
.then((results)=>{
    results.forEach(element => {
        console.log(element)
    });
})
.catch((error)=>{
    console.log(error)
    console.error("asd");
})