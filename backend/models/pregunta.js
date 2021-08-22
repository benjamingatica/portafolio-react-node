'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PreguntaSquema = Schema({    
    categoria: String,
    correcta: Number,
    opciones: Array,
    pregunta: String
});

module.exports = mongoose.model('Pregunta', PreguntaSquema);