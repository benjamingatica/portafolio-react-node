import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { responderPreguntaAccion } from '../../redux/cuestionarioDucks';

const Pregunta = () => {
    const data = useSelector(store => store.preguntas.pregunta);
    const dispatch = useDispatch();

    const seleccionarRespuestaAccion = (respuesta) => {
        dispatch(responderPreguntaAccion(data._id, respuesta, data.categoria));
    }

    return (
        <div className="row col-12 contenedor-pregunta">            
           <div className="col-12 pregunta lead">
            <strong>{ data.pregunta }</strong>
           </div>
           {
               data.opciones.map(element => (
                <div 
                    key = { element.id }
                    className="col-xs-12 col-md-6 opcion-pregunta"
                    onClick = { () => seleccionarRespuestaAccion(element.id) }
                >
                    { element.respuesta }
                </div>
               ))
           }
        </div>
    )
}

export default Pregunta