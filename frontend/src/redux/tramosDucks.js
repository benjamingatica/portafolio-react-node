import { api_url } from '../Global';

// data inicial
const dataInicial = {
    data: null,
    cupos: 4,
    loading: false,
    loading_tramo: false
};

// types
const TRAMOS_OK = 'TRAMOS_OK';
const LOADING_TRAMOS = 'LOADING_TRAMOS';
const LOADING_TRAMO = 'LOADING_TRAMO';

// reducer
export default function tramosReducer(state = dataInicial, action) {
    switch(action.type){
        case TRAMOS_OK:
            return {...state, data: action.payload, loading: false, loading_tramo: false};
        case LOADING_TRAMOS:
            return {...state, loading: true};
        case LOADING_TRAMO:
            return {...state, loading_tramo: true};
        default:
            return {...state};
    }
};

// action
export const obtenerTramosAccion = () => async(dispatch) => {

    dispatch({
        type: LOADING_TRAMOS
    });

    try {   
        const res = await fetch(api_url + 'tramos');
        const tramos = await res.json();

        dispatch({
            type: TRAMOS_OK,
            payload: tramos.tramos
        });

    } catch (error) {
        console.log(error);
    }
}

export const actualizaTramoAccion = (usuario, idTramo) => async(dispatch) => {

    dispatch({
        type: LOADING_TRAMO
    });

    try {                   
        const settings = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user_id: usuario})
        };

        let res = await fetch(api_url + 'tramo/' + idTramo, settings);
        const tramos = await res.json();

        dispatch({
            type: TRAMOS_OK,
            payload: tramos.tramos
        });

    } catch (error) {
        console.log(error);
    }
}