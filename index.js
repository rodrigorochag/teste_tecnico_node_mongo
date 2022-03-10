// config inicial
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

//importa o arquivo Location.JS com os models

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});




//way to read json //middlewares
app.use(
    express.urlencoded({        
        extended: true,        
    }),
)
//habilita o envio de json para o mongo
app.use(express.json())

// rotas da api
const locationRoutes= require('./routes/locationRoutes')

// endereço da api
app.use('/api/v1/location', locationRoutes)



app.use(express.json())
//rota inicial/json
app.get('/', (req,res) => {
    //mostrar req
    res.json({api: "Getting's working"})
})


//entregar uma porta
const DB_USER= process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)



mongoose
    .connect(
     `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.s5cxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
     //`mongodb+srv://rodrigo:Fm5OmuxIbLH3Kbzv@apicluster.s5cxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`   
    )
    .then(() => {
        console.log('MongoDB connected')
        app.listen(3000)
    })
    .catch((err) => console.log(err))

