'use strict';

let Pregunta = require('../models/pregunta');
let ObjectId = require('mongodb').ObjectID;

const controller = {    

    getPreguntaRandom: (req, res) => {
        let categoria = req.params.categoria;
        let idsNot = [];
        req.body.ids.map(element => (
            idsNot.push(ObjectId(element))
        ));

        Pregunta.aggregate([{$match: {"categoria":categoria, "_id":{$nin:idsNot}}}, { $sample: { size: 1 } }]).exec((err, pregunta) => {                    
            if (err) return res.status(500).send({message: 'Error al consultar pregunta', error: err});

            if (!pregunta) return res.status(502).send({message: 'No existen pregunta'});
            
            res.status(200).send({pregunta: pregunta[0]});
        });
    }

}

module.exports = controller;