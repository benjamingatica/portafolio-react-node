'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsuarioSquema = Schema({    
    email: String,
    uid: String
});

module.exports = mongoose.model('Usuario', UsuarioSquema);