const needle = require("needle");

const endpoint = 'https://pokeapi.co/api/v2/type'

function exito(response){
    const tipos = response
    console.log(tipos)
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
        const response = await needle('get',endpoint)
        exito(response.body.results)
    } catch (error) {
        fallo(error)
    }
}
f()