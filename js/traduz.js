exports.hex2dec = function hex2dec(hex) {    
    var convertido = parseInt(hex, 16);
    return convertido

}
exports.hex2bin = function hex2bin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}



//console.log(cabecalho)


exports.header = function header(chave){
    if (chave == "50F7"){
        //contador_post++;    
        return chave}
    else
        return "null"
}

//identificador
exports.device_id = function device_id(id_do_dispositivo){
    if (id_do_dispositivo.length == 6)
    return id_do_dispositivo;
    else
    return "null"
}


exports.type_message = function type_message(tipo_mensagem){
  /*  if (tipo_mensagem.length == 2)
        return tipo_mensagem;
    else
        return "null"*/
        return tipo_mensagem
}
exports.date_gps = function date_gps(data_gps_adquirido){
        return "1970-01-01T00:00:00:00"
    
    
}

//A direção que o equipamento está apontando pode variar entre 0 e 359.99
//O valor do pacote de exemplo é "dec 5487"
exports.direction_equipament = function direction_equipament(direcao){
    var value = parseInt(direcao, 16);
    return value
}

exports.distance_equipament = function distance_equipament(distancia){
    var value = parseInt(distancia, 16);
    return value+" metros";
}
//hex 5EFCF950 dec 1.593.637.200 
// nao foi possivel interpretar o dado da conversao
exports.time_reporting = function time_reporting(time){
    var value = parseInt(time, 16);
    return value+" minutos"
}



//5. Um ponto de localização não fixado significa que a latitude ou longitude poderá estar incorreta ou com
//precisão insuficiente para encontrar o dispositivo em um mapa

exports.bin_location = function bin_location(valores_binarios){
    return (parseInt(valores_binarios, 16).toString(2)).padStart(8, '0');
    
}

exports.current_speed = function current_speed(velocidade_atual){
    var value = parseInt(velocidade_atual, 16);
    return value+" KM/h"
}
exports.f_latitude = function f_latitude(latitude){
    var value = parseInt(latitude, 16);
    value = value/ 1000000

    if (value >= -90.000000 && value <= 90.000000){
        //contador_post++;    
        return value
    }
    else         
        return "null"
    
}
exports.f_longitude = function f_longitude(longitude){
    
    var value = parseInt(longitude, 16);
    value = value / 1000000
    if (value >= -180.000000 && value <= 180.000000){        
        return value
    }
    else        
        return "null"   
}


exports.footer = function footer(rodape){
    if (rodape == "73C4"){
        //contador_post++;
        return rodape
    }
    else{    
        return "null"
    }
}