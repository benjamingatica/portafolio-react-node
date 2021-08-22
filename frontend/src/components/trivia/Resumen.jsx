import React from 'react'
import Puntaje from './Puntaje'
import Ranking from './Ranking'
import { useDispatch } from 'react-redux'
import { resetTrivia } from '../../redux/cuestionarioDucks';

const Resumen = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Puntaje />
            <hr />
            <button 
                className="btn btn-primary"
                onClick = {() => dispatch(resetTrivia())}
            >
                Vuelve a intentarlo!
            </button>
            <hr />
            <Ranking />
        </div>
    )
}

export default Resumen
