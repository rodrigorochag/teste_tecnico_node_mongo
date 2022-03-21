const mongoose = require('mongoose')




//Arquivo JSON
const Location = mongoose.model('Location',{   
        Tcabecalho:String,
        id_do_dispositivo:String,
        tipo_mensagem:String,
        data_gps_adquirido:String,
        direcao_equipamento: String,
        distancia_percorrida:String,
        tempo_reporte: String,
        valores_binarios: String,        
        velocidade_atual: String,
        latitude: String,
        longitude:String,
        rodape: String
})

module.exports = Location


