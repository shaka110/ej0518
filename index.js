//Modules
const express = require('express');
const api = require('./api');
const config = require('./config');

const app = express();

//Inicializer
app.use(express.json());
app.use('/api',api);

//Server
app.listen(config.port, ()=> {
    console.log('Servidor Iniciado');
});