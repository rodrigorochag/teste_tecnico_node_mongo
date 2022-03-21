const router = require('express').Router()
const {string_hash} = require('../js/trata_hash')

const { header,
    device_id,
    type_message,
    date_gps,
    direction_equipament,
    distance_equipament,
    time_reporting,
    bin_location,
    current_speed,
    f_latitude,
    f_longitude,
    footer,
    
    } = require("../js/traduz")


const { restart } = require('nodemon')
const Location = require('../models/Location')


//--ROTA POST-- // Criação de dados
//rotas da api
router.post('/', async (req,res) => {

    // dados do carro conforme a tabela    
    
    
       const {hash} = req.body //req.body = conteudo da requisicao      
        var string_hash_from_post = req.body["hash"]

        console.log("HASH:",string_hash_from_post)
        var hash_limpa = string_hash(string_hash_from_post) // lista com o hex do hash
        exports.var; converted_cabecalho = header(hash_limpa[0])
        exports.var; converted_id_dispositivo = device_id(hash_limpa[1])
        exports.var; converted_tipo_mensagem = type_message(hash_limpa[2])
        exports.var; converted_data_gps = date_gps(hash_limpa[3])
        exports.var; converted_direcao_equipamento = direction_equipament(hash_limpa[4])
        exports.var; converted_distancia_equipamento = distance_equipament(hash_limpa[5])
        exports.var; converted_reporte = time_reporting(hash_limpa[6])
        exports.var; converted_localizacao = bin_location(hash_limpa[7])
        exports.var; converted_velocidade = current_speed(hash_limpa[8])
        exports.var; converted_latitude = f_latitude(hash_limpa[9])
        exports.var; converted_longitude = f_longitude(hash_limpa[10])
        exports.var; converted_footer = footer(hash_limpa[11])
        console.log("length: ",converted_data_gps)
        


        // concatena o resultado da tradução do hash
        // importante para verificar se houve alguma falha
        var hash_concatenado = []
        hash_concatenado.push(converted_cabecalho+converted_id_dispositivo+converted_tipo_mensagem+converted_data_gps+
            converted_direcao_equipamento+converted_distancia_equipamento+converted_reporte+converted_localizacao+converted_velocidade+
            converted_latitude+converted_longitude+converted_footer)
        console.log(typeof(hash_concatenado))

        

        // verificador
        //função para obrigatoriedade        
        if(!hash){ //if se nao veio nome no objeto
            res.status(422).json({error: 'Campo obrigatorio'})    
        }  
   
        const location = {            
            Tcabecalho:converted_cabecalho,
            id_do_dispositivo:converted_id_dispositivo,
            tipo_mensagem:converted_tipo_mensagem,
            data_gps_adquirido:converted_data_gps,
            direcao_equipamento: converted_direcao_equipamento,
            distancia_percorrida:converted_distancia_equipamento,
            tempo_reporte: converted_reporte,
            valores_binarios: converted_localizacao,        
            velocidade_atual: converted_velocidade,
            latitude: converted_latitude,
            longitude: converted_longitude,
            rodape: converted_footer}              

       console.log(location)
       try {
            if (string_hash_from_post.length == 70){           
            //verifica se o dado é compativel         
                if (hash_concatenado[0].includes("null") == false){
                    res.status(201).json({message:"Inserido com sucesso"})
                    await Location.create(location) // salva o conteudo conforme o models e o objeto acima
                
                }
            }   
        else{
            res.status(500).json({error: error}) //falha no softawre, nao é inteerssante enviar para api
        }



       }catch (error){
           //melhor criar um arquivo de log
           res.status(500).json({error: error}) //falha no softawre, nao é inteerssante enviar para api
       } 
       
       //validação para saber se o ... foi enviado

             
   })

   

//Get/Read - leitura de dados
router.get('/', async (req,res) => {

    try {
        const device = await Location.find() // 
        res.status(200).json(device) //tds dados cadastrados
    }catch(error){
        res.status(500).json({error: error})   
    }


})

//rotas dinamicas
router.get('/:device_id', async (req,res) => {
//extrair dados da requisição
    const device_id = req.params.device_id

    try {
        // função findOne é otimizada para buscar registros unicos (id)
        // função find() realiza a busca de todos objetos com aquele ID no endpoint
        const location = await Location.find({id_do_dispositivo:device_id}) //busca o json atraves do id_do_dispostivo

        if(!location){ // se estiver vazio
            res.status(422).json({message:"device_id não encontrado"})
            return //encerra a requisição
        }


        res.status(200).json(location)

    }catch(error){
        res.status(500).json({error: error})
    }



})



//Update - Atualização de dados (PUT, PATCH)
// PUT -> altera o objeto completo
//PATCH -> altera alguns campos/parcialmente
router.patch('/:device_id', async (req,res) => {
    const device_id = req.params.device_id

    const {id_do_dispositivo, 
        hash} = req.body

    const location = {
        id_do_dispositivo, 
        hash}

    try {
        const updatedLocation = await Location.updateOne({id_do_dispositivo:device_id}, location) //metodo singular
        res.status(200).json(location)
        if(updatedLocation.matchedCount == 0) {
            res.status(422).json({message: "Device_ID não encontrado"})
            return
        }
    }catch(error){       
        res.status(500).json({error: error })
    }
})

//Delete
router.delete('/:device_id', async (req,res) =>{

    const device_id = req.params.device_id

    const location = await Location.findOne({id_do_dispositivo:device_id})
    
    if(!location){ // se estiver vazio
        res.status(422).json({message:"device_id não encontrado"})
        return //encerra a requisição
    }try{
        await Location.deleteOne({id_do_dispositivo:device_id})
        res.status(200).json({message: "Removido com sucesso"})


    }catch(error){
        res.status(500).json({error:error})
    }

})



module.exports = router

