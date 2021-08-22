import React from 'react';
import Categoria from './Categoria';
import Loading from '../Loading';
import Pregunta from './Pregunta';
import Resumen from './Resumen';
import { useSelector } from 'react-redux';

const Trivia = () => {
    const triviaStart = useSelector(store => store.preguntas.triviaStart);
    const triviaEnd = useSelector(store => store.preguntas.triviaEnd);
    const loading = useSelector(store => store.preguntas.loading);
    
    return (
        !loading ? (
            <div className="container mb-5">
                <div className="row mt-4 trivia pl-5 pr-5 pb-4">                

                    {
                        !triviaStart && !triviaEnd && <Categoria />
                    }                

                    {
                        triviaStart && !triviaEnd && <Pregunta />
                    }

                    {
                        triviaStart && triviaEnd && <Resumen />
                    }
                </div>
            </div>
        ) : (
            <Loading />
        )
    )
}

export default Trivia