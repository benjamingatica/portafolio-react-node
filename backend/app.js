'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// cargar archivos rutas
const preguntaRoutes = require('./routes/pregunta');
const tramoRoutes = require('./routes/tramo');
const usuarioRoutes = require('./routes/usuario');
const categoriaTriviaRoutes = require('./routes/categoriatrivia');
const rankingTriviaRoutes = require('./routes/rankingtrivia');

// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // convierte la peticion a JSON

// CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use('/api', preguntaRoutes);
app.use('/api', tramoRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', categoriaTriviaRoutes);
app.use('/api', rankingTriviaRoutes);

// exportar 
module.exports = app;