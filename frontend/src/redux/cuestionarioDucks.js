import { api_url } from '../Global';

// data inicial
const dataInicial = {    
    triviaStart: false,
    triviaEnd: false,
    loading: false,
    pregunta: false,
    respuestas: [],
    countPreguntas: 0,
    ranking: false
};

// types
const LOADING_DATA = 'LOADING_DATA';
const REVISAR_TEST = 'REVISAR_TEST';
const COMENZAR_TRIVIA = 'COMENZAR_TRIVIA';
const OBTENER_PREGUNTA = 'OBTENER_PREGUNTA';
const RESPONDER_PREGUNTA = 'RESPONDER_PREGUNTA';
const CALCULAR_RANKING = 'CALCULAR_RANKING';
const RESET_TRIVIA = 'RESET_TRIVIA';

// reducer
export default function cuestionarioReducer(state = dataInicial, action){
    switch(action.type){        
        case RESET_TRIVIA:
            return {triviaStart: false, triviaEnd: false, loading: false, pregunta: false, respuestas: [], countPreguntas: 0, ranking: false};
        case LOADING_DATA:
            return {...state, loading: true};
        case REVISAR_TEST:
            return {...state, revisado: true};
        case COMENZAR_TRIVIA:
            return {...state, triviaStart: true};
        case OBTENER_PREGUNTA:
            return {...state, pregunta: action.payload.pregunta, countPreguntas: action.payload.countPreguntas, loading: false};
        case RESPONDER_PREGUNTA:
            return {...state, respuestas: action.payload};
        case CALCULAR_RANKING:
            return {...state, triviaEnd: true, ranking: action.payload, loading: false};
        default:
            return {...state};
    }
}

// action
export const comenzarTriviaAccion = (categoria) => async(dispatch) => {
    try {          
        dispatch({
            type: COMENZAR_TRIVIA
        });
        
        await dispatch(getPreguntaAccion(categoria));


    } catch (error) {
        console.log(error);
    }
}

export const getPreguntaAccion = (categoria, preguntasRespondidas = []) => async(dispatch, getState) => {
    dispatch({
        type: LOADING_DATA
    });

    let countPreguntas = getState().preguntas.countPreguntas;

    if (countPreguntas >= 10) {
        await dispatch(calculaRankingAccion(categoria));
        return;
    }
        
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ids: preguntasRespondidas})
    };

    let res = await fetch(api_url + 'pregunta-random/' + categoria, settings);    
    const pregunta = await res.json();

    countPreguntas++;

    dispatch({
        type: OBTENER_PREGUNTA,
        payload: {
            pregunta: pregunta.pregunta,
            countPreguntas
        }
    });
}

export const calculaRankingAccion = (categoria) => async(dispatch, getState) => {    
    const cuestionario = getState().preguntas.respuestas;
    const usuario = getState().usuario.user.email;
    const fecha = new Date();
    
    const json_in = {
        cuestionario,
        usuario,
        fecha,
        categoria
    }

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json_in)
    };

    let res = await fetch(api_url + 'set-ranking', settings);    
    const ranking = await res.json();    

    dispatch({
        type: CALCULAR_RANKING,
        payload: ranking.ranking
    });

}

export const responderPreguntaAccion = (pregunta, respuesta, categoria) => async(dispatch, getState) => {
    dispatch({
        type: LOADING_DATA
    });

    let respuestas = getState().preguntas.respuestas;    

    respuestas.push({
        pregunta,
        respuesta
    });
    
    dispatch({
        type: RESPONDER_PREGUNTA,
        payload: respuestas
    });

    const preguntasRespondidas = respuestas.map(element => element.pregunta);    

    await dispatch(getPreguntaAccion(categoria, preguntasRespondidas));
}

export const revisarTestAccion = () => (dispatch) => {
    dispatch({
        type: REVISAR_TEST
    });
}

export const resetTrivia = () => (dispatch) => {
    dispatch({
        type: LOADING_DATA
    });

    dispatch({
        type: RESET_TRIVIA
    });
}