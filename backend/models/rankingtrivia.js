'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RankingtriviaSquema = Schema({    
    usuario: String,
    puntaje: Number,
    cantidadPreguntas: Number,
    efectividad: Number,
    fecha: Date,
    categoria: String
});

module.exports = mongoose.model('Rankingtrivia', RankingtriviaSquema);