const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const url = 'https://pokeapi.co/api/v2/type'
/* const url = 'https://pokeapi.co/api/v2/pokemon/zorua' */

function get_data(endpoint,exito,fallo){
    const h = new XMLHttpRequest();
    h.open('GET',url)
    h.send()
    h.onload = function(){
        exito(h.responseText)
    }
}
function exito(response){
    /* const json = (response)=>{
        console.log(JSON.parse(response))
    } */
    const tipos = JSON.parse(response).results
     tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log()
    });
    /* json(response) */
}
function fallo(status){
    console.log(status)
}
get_data(url,exito,fallo)