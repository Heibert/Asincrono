const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
/* const url = 'https://pokeapi.co/api/v2/type' */
const url = 'https://pokeapi.co/api/v2/pokemon/zora'

function get_data(endpoint,exito,fallo){
    const h = new XMLHttpRequest();
    h.open('GET',url)
    h.send()
    h.onload = ()=>{
        if (h.status === 200) {
            exito(h.responseText)    
        } else {
            fallo(h.status)
        }
    }
}
const exito = (response)=>{
    const tipos = JSON.parse(response).results
}
const fallo = (status)=>{
    console.log(status)
}
get_data(url,exito,fallo)