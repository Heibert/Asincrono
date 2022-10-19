const axios = require('axios')

const endpoint = 'https://poetrydb.org/title/Ozymandias/lines.json'

let config = {
    url: endpoint,
    method: 'get'
}
function exito(response){
    const tipos = response
    var i = 0
     tipos.forEach(element => {
        for (let i = 0; i < element.lines.length; i++) {
            console.log("Frase N°",i,element.lines[i])
            console.log()
        }
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