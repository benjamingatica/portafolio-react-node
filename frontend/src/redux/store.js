import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import usuarioReducer, {leerUsuarioActivoAccion} from './usuarioDucks';
import tramosReducer from './tramosDucks';
import cuestionarioReducer from './cuestionarioDucks';

const rootReducer = combineReducers({
    usuario: usuarioReducer,
    tramos: tramosReducer,
    preguntas: cuestionarioReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ));
    leerUsuarioActivoAccion()(store.dispatch);
    return store;
}