const router = require('express').Router()

const { restart } = require('nodemon')
const Location = require('../models/Location')


//--ROTA POST-- // Criação de dados
//rotas da api
router.post('/', async (req,res) => {
    // dados do carro conforme a tabela    
    //req.body
    //nosso json
       const {id_do_dispositivo, 
        hash} = req.body       
           
        //função para obrigatoriedade
        /*
           if(!id_do_dispositivo){ //if se nao veio nome no objeto
               res.status(422).json({error: 'Campo obrigatorio'})    
           }   */
   
   
   
           const location = {
            id_do_dispositivo, 
            hash}         
               
       try {
           //criando dados
           await Location.create(location) //importa models com a const do objeto
           res.status(201).json({message:"Inserido com sucesso"})
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

