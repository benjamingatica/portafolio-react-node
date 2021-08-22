'use strict';

let CategoriaTrivia = require('../models/categoriatrivia');
let fs = require('fs');
let path = require('path');

const controller = {    
    
    getCategorias: (req, res) => {        
        CategoriaTrivia.find().exec((err, categorias) => {                    
            if (err) return res.status(500).send({message: 'Error al consultar categorias', error: err});

            if (!categorias) return res.status(502).send({message: 'No existen categorias'});

            res.status(200).send({
                categorias 
            });
        });
    },

    getImageFile: (req, res)=>{
        let file = req.params.image;
        let path_file = './uploads/' + file;        

        fs.exists(path_file, (exists)=>{
            if (exists){
                return res.sendFile(path.resolve(path_file));
            }
            else{
                return res.status(200).send({
                    message: 'No existe la imagen...'
                });
            }
        });
    }

}

module.exports = controller;