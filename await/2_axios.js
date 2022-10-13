const axios = require('axios')

const endpoint = 'https://pokeapi.co/api/v2/type'

let config = {
    url: endpoint,
    method: 'get'
}
function exito(response){
    const tipos = response.results
     tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log()
    });
}
function fallo(status){
    console.log(status)
}

const f = async ()=>{
    try {
        let response = await axios(config)
        exito(response.data)
    } catch (error) {
        fallo(error)
    }
    axios(config)
}
f()