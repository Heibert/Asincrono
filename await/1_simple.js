const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const url = 'https://pokeapi.co/api/v2/type'

function get_data(endpoint,exito,fallo){
    const h = new XMLHttpRequest();
    h.open('GET',url)
    h.send()
    h.onload = function(){
        exito(h.responseText)
    }
}
function exito(response){
    const tipos = JSON.parse(response).results
     tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log()
    });
    
}
function fallo(status){
    console.log(status)
}
get_data(url,exito,fallo)
const f = async function(){
    try {
        let response = await get_data(url)    
        exito(response)
    } catch (error) {
        fallo(error)
    }
    
}
f()