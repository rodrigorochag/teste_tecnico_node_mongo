exports.string_hash = function string_hash(hash){

var hash_separado = [];
var cabecalho = "";
var id_do_dispositivo= "";
var tipo_mensagem = "";
var data_gps_adquirido = "";
var direcao_equipamento = "";
var distancia_percorrida = "";
var tempo_reporte = "";
var valores_binarios = "";
var velocidade_atual = "";
var longitude = "";
var latitude = "";
var rodape = "";



   
for(var i = 0; i<=3; i++){
    cabecalho += hash[i]

}

for(var i = 4; i<=9; i++){
    id_do_dispositivo += hash[i]
}



for(var i = 10; i<=11; i++){
    tipo_mensagem += hash[i]

};

for(var i = 12; i<=19; i++){
    data_gps_adquirido += hash[i]

}


for (var i = 20; i<=23;i++){
    direcao_equipamento += hash[i];

}


for (var i = 24; i<=31;i++){
    distancia_percorrida += hash[i]

}



for (var i = 32; i<=39;i++){
    tempo_reporte += hash[i];
}


for (var i = 40; i<=47;i++){
    valores_binarios += hash[i];

}

for (var i = 48; i<=49;i++){
    velocidade_atual += hash[i];

}

for (var i = 50; i<=57;i++){
    latitude += hash[i];

}


for (var i = 58; i<=65;i++){
    longitude += hash[i];

}


for (var i = 66; i<=69;i++){
    rodape += hash[i];
}

hash_separado.push(cabecalho)
hash_separado.push(id_do_dispositivo)
hash_separado.push(tipo_mensagem)
hash_separado.push(data_gps_adquirido)
hash_separado.push(direcao_equipamento)
hash_separado.push(distancia_percorrida)
hash_separado.push(tempo_reporte)
hash_separado.push(valores_binarios)

hash_separado.push(velocidade_atual)
hash_separado.push(longitude)
hash_separado.push(latitude)
hash_separado.push(rodape)

return hash_separado

}