const axios = require('axios')

let endpoint = 'https://api.open-meteo.com/v1/forecast?latitude=4.6473&longitude=-74.0962&hourly=temperature_2m&timezone=auto'

let config = {
    method: 'get',
    url: endpoint
}
axios(config)
.then((response)=>{
    return response.data
}).then((results)=>{
    const Lugar = results.timezone
    const Hora = results.hourly.time
    const Temperatura = results.hourly.temperature_2m
    
    /* console.log(Hora) */
    for (let i = 0; i < Hora.length; i++) {
        console.log("La hora es:",Hora[i].split("T",3)[1],"La temperatura es: ",Temperatura[i])
    }
})
.catch((error)=>{
    console.log((`${error}`))
})