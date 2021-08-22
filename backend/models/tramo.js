'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TramoSquema = Schema({    
    id: Number,
    horario: String,
    usuariosReservas: Array,
    cuposDisponibles: Number
});

module.exports = mongoose.model('Tramo', TramoSquema);