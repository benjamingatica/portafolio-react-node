'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let categoriatriviaSquema = Schema({    
    categoria: String,
    info: String,
    descripcion: String,
    infoboton: String,
    imagen: String
});

module.exports = mongoose.model('categoriatrivia', categoriatriviaSquema);