const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
/* const url = 'https://pokeapi.co/api/v2/type' */
const url = 'https://pokeapi.co/api/v2/pokemon/zorua'

function get_data(endpoint){
    let promise = new Promise((resolve,rejected)=>{
        const h = new XMLHttpRequest();
        h.open('GET',url)
        h.send()
        h.onload = ()=>{
            if (h.status === 200) {
                resolve(h.responseText)    
            } else {
                rejected(h.status)
            }
        }
    })
    return promise;
}

get_data(url).then((data)=>{
    console.log(JSON.parse(data))
})