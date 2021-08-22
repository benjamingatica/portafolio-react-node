'use strict';

let Ranking = require('../models/rankingtrivia');
let Pregunta = require('../models/pregunta');

const controller = {    

    getRankings: (req, res) => {
        Ranking.find({}).sort('-efectividad').exec((err, ranking) => {                    
            if (err) return res.status(500).send({message: 'Error al consultar ranking', error: err});

            if (!ranking) return res.status(502).send({message: 'No existen ranking'});

            res.status(200).send({
                ranking 
            });
        });
    },
    
    setRanking: async(req, res) => {    
        try {
            if (!req.body.hasOwnProperty('usuario')) {
                res.status(500).send({message: 'No se recibe usuario'});
            }
    
            if (!req.body.hasOwnProperty('cuestionario')) {
                res.status(500).send({message: 'No se recibe cuestionario'});
            }
    
            if (typeof req.body.cuestionario !== "object") {
                res.status(500).send({message: 'cuestionario no es array'});
            }

            if (!req.body.hasOwnProperty('fecha')) {
                res.status(500).send({message: 'No se recibe fecha'});
            }            

            if (!req.body.hasOwnProperty('categoria')) {
                res.status(500).send({message: 'No se recibe categoria'});
            }            
    
            let puntaje = 0;
            const fecha = req.body.fecha;
            const usuario = req.body.usuario;
            const categoria = req.body.categoria;
            const cantidadPreguntas = req.body.cuestionario.length;
    
            for (const element of req.body.cuestionario) {
                const  pregunta = await Pregunta.findById(element.pregunta).exec();
                if (pregunta.correcta == element.respuesta) {                    
                    puntaje += 1;
                }                
            }

            const efectividad = (puntaje / cantidadPreguntas) * 100;                        

            const newRanking = new Ranking({
                'usuario': usuario,
                'puntaje': puntaje,
                'cantidadPreguntas': cantidadPreguntas,
                'efectividad': efectividad,
                'fecha': fecha,
                'categoria': categoria
            });

            const rankingStored = await newRanking.save();            
    
            res.status(200).send({
                message: 'ok',
                ranking: rankingStored
            });
        } catch (error) {
            console.log(error);
        }    
    }

}

module.exports = controller;