'use strict';

let Tramo = require('../models/tramo');

const controller = {    
    
    getTramos: (req, res) => {        
        Tramo.find().exec((err, tramos) => {                    
            if (err) return res.status(500).send({message: 'Error al consultar tramos', error: err});

            if (!tramos) return res.status(502).send({message: 'No existen tramos'});

            res.status(200).send({
                tramos 
            });
        });
    },

    updateTramo: async(req, res)=>{
        try {
            const tramoId = req.params.id;
            const user_id = req.body.user_id;            
                
            let tramo = await Tramo.findById(tramoId).exec();            
                        
            if (tramo.usuariosReservas.includes(user_id)) {
                tramo.usuariosReservas.splice(tramo.usuariosReservas.indexOf(user_id),1);
                tramo.cuposDisponibles += 1;
            } else {
                tramo.usuariosReservas.push(user_id);
                tramo.cuposDisponibles -= 1;
            }            

            const tramoUpdated = await Tramo.findByIdAndUpdate(tramoId, {usuariosReservas: tramo.usuariosReservas, cuposDisponibles: tramo.cuposDisponibles}, {new:true});            

            if (!tramoUpdated) return res.status(502).send({message: 'No se actualiza el tramo'});

            const tramos = await Tramo.find().exec();

            if (!tramos) return res.status(502).send({message: 'No existen tramos'});
                    
            res.status(200).send({
                tramos 
            });
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = controller;