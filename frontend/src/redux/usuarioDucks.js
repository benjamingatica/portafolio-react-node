import { auth } from '../firebase';
import { api_url } from '../Global';

// data inicial
const dataInicial = {
    loading: false,
    activo: false,
    error_message: false
};

// types
const LOADING = 'LOADING';
const USUARIO_EXITO = 'USUARIO_EXITO';
const CERRAR_SESION = 'CERRAR_SESION';
const ERROR_REGISTRAR = 'ERROR_REGISTRAR';
const ERROR_INICIAR = 'ERROR_INICIAR';

// reducer
export default function usuarioReducer(state = dataInicial, action){
    switch(action.type){
        case LOADING:
            return {...state, loading: true, error_message: false};
        case ERROR_REGISTRAR:
            return {...dataInicial, ...action.payload};
        case ERROR_INICIAR:
            return {...dataInicial, ...action.payload};
        case USUARIO_EXITO:
            return {...state, loading: false, user: action.payload, activo: true, error_message: false};
        case CERRAR_SESION:
            return {...dataInicial};
        default:
            return {...state};
    }
}

// action
export const registrarUsuarioAccion = (email, pass) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {        
        const response = await auth.createUserWithEmailAndPassword(email, pass);
        
        const data = {
            uid: response.user.uid,
            email: response.user.email,
        };

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        await fetch(api_url + 'usuario/', settings);        

        dispatch({
            type: USUARIO_EXITO,
            payload: data
        });

        localStorage.setItem('usuario', JSON.stringify(
            data
        ));

    } catch (error) {        
        let error_message = '';
        if (error.code === 'auth/invalid-email') {
            error_message = 'Email no válido';
        }
        else if (error.code === 'auth/email-already-in-use') {
            error_message = 'Email ya se encuenta en uso';
        }
        dispatch({
            type: ERROR_REGISTRAR,
            payload: {
                error_message: error_message
            }
        });
    }
}

export const ingresoUsuarioAccion = (email, pass) => async(dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const res = await auth.signInWithEmailAndPassword(email, pass);

        const usuario = {
            uid: res.user.uid,
            email: res.user.email,
        };

        dispatch({
            type: USUARIO_EXITO,
            payload: usuario
        });

        localStorage.setItem('usuario', JSON.stringify(
            usuario
        ));

    } catch (error) {        
        let error_message = '';
        if (error.code === 'auth/invalid-email') {
            error_message = 'Email no válido';
        }
        else if (error.code === 'auth/user-not-found') {                
            error_message = 'Email no registrado';
        }
        else if (error.code === 'auth/wrong-password') {                
            error_message = 'Contraseña incorrecta';
        }
        dispatch({
            type: ERROR_INICIAR,
            payload: {
                error_message: error_message
            }
        });
    }
}

export const leerUsuarioActivoAccion = () => (dispatch) => {
    if (localStorage.getItem('usuario')) {
        dispatch({
            type: USUARIO_EXITO,
            payload: JSON.parse(localStorage.getItem('usuario'))
        })
    }
}

export const cerrarSesionAccion = () => (dispatch) => {
    auth.signOut();
    localStorage.removeItem('usuario');
    dispatch({
        type: CERRAR_SESION
    });
}