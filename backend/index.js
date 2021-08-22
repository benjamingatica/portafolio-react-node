'use strict';

// Conexión a la base de datos
let mongoose = require('mongoose');
let app = require('./app');
let port = process.env.PORT || 5000;
let host = "localhost";
let port_db = 27017;
let db_name = "portafolio-react";

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + host + ':' + port_db + '/' + db_name)
    .then(()=>{
        console.log('Conexión a la base de datos establecida con éxito');

        // Creación del servidor 
        app.listen(port, ()=>{
            console.log("servidor corriendo correctamente en la url: " + host + ":" + port);
        });
    })
    .catch((error)=>{
        console.log("error: ", error);
    });