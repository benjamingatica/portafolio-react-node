'use strict';

let Usuario = require('../models/usuario');

const controller = {    
    
    getUsuarios: (req, res) => {
        
        Usuario.find().exec((err, usuarios) => {                    
            if (err) return res.status(500).send({message: 'Error al consultar usuarios', error: err});

            if (!usuarios) return res.status(502).send({message: 'No existen usuarios'});

            res.status(200).send({
                usuarios 
            });
        });
    },

    getUsuario: (req, res) => {
        let usuarioId = req.params.id;

        Usuario.findById(usuarioId, (err, usuarioStored) => {
            if (err) return res.status(500).send({message: 'Error al consultar usuario', error: err});

            if (!usuarioStored) return res.status(502).send({message: 'El usuario no existe'});

            res.status(200).send({
               usuarioStored 
            });
        });
    },

    addUsuario: (req, res) => {                
        let params = req.body;
        let usuario = new Usuario();

        usuario.email = params.email;        
        usuario.uid = params.uid;        

        usuario.save((err, usuarioStored) => {
            if (err) return res.status(500).send({message: 'Error de conexion al guardar usuario', error: err});

            if (!usuarioStored) return res.status(502).send({message: 'Error al registrar usuario'});

            res.status(200).send({                
                usuario: usuarioStored
             });
        });
        
    }

}

module.exports = controller;