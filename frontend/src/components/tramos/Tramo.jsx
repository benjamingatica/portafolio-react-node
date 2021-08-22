import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actualizaTramoAccion } from '../../redux/tramosDucks';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import CloseIcon from '@material-ui/icons/Close';

const Tramo = (props) => {        
    const dispatch = useDispatch();
    const cuposDisponibles = useSelector(store => store.tramos.data[props.data.id].cuposDisponibles);
    const usuario = useSelector(store => store.usuario.user.uid);
    const loading = useSelector(store => store.tramos.loading_tramo);
    const recursoTomado = useSelector(store => store.tramos.data[props.data.id].usuariosReservas);

    const tomarRecurso = () => {        
        dispatch(actualizaTramoAccion(usuario, props.data._id));
    }

    return (
        <div>
            <li 
                className =  
                {                    
                    'mt-1 mb-1 noselect opciones-tramos ' +
                    (loading ? 'list-group-item disabled'
                    : recursoTomado.includes(usuario) ? 'list-group-item bg-success'
                    : cuposDisponibles <= 0 ? 'list-group-item bg-danger disabled'
                    : 'list-group-item')
                } 
                onClick = 
                { 
                    () =>  tomarRecurso() 
                }
            >                
                <div className="row">
                    <div className="col">
                        { props.data.horario }
                    </div>
                    <div className="col">
                        { cuposDisponibles }
                    </div>
                    <div className="col">
                        { cuposDisponibles > 0 ? <DoneOutlineIcon /> : <CloseIcon /> }
                    </div>
                </div>
            </li>
        </div>
    )
}

export default Tramo