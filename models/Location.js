const mongoose = require('mongoose')
//Arquivo JSON
const Location = mongoose.model('Location',{   
        id_do_dispositivo:String, 
        hash:String,
        
})

module.exports = Location