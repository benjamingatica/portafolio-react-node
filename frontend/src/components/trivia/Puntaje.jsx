import React from 'react'
import { useSelector } from 'react-redux';

const Puntaje = () => {
    const data = useSelector(store => store.preguntas.ranking);

    return (
        <div className="text-left mt-4">
            <h1>Felicidades!!</h1>            
            <h2>Has acertado en <strong>{ data.puntaje }</strong> preguntas logrando una efectividad del  <strong>{ data.efectividad + '%' }</strong>.</h2>
        </div>
    )
}

export default Puntaje
