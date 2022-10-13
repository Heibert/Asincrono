const axios = require('axios')

const endpoint = 'http://universities.hipolabs.com/search?country=colombia'

let config = {
    url: endpoint,
    method: 'get'
}
function exito(response){
    const tipos = response
    /* console.log(tipos) */
/*      tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log()
    }); */
}
function fallo(status){
    console.log(status)
    console.log("Fallo")
}

const f = async ()=>{
    try {
        let response = await axios(config)
        exito(response)
    } catch (error) {
        fallo(error)
    }
    axios(config)
}
f()
/* Entonces va a dejar esa? */