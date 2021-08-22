import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerTramosAccion } from '../../redux/tramosDucks';
import Tramo from './Tramo';
import Loading from '../Loading';

const ListadoTramos = (props) => {    
    const dispatch = useDispatch();
    const tramos = useSelector(store => store.tramos.data);
    const loading = useSelector(store => store.tramos.loading);

    React.useEffect(()=>{        
        dispatch(obtenerTramosAccion());
    }, [dispatch]);

    return (
        <div className="container mb-5">
            <div className="container-fluid mt-3">
                <div className="reglas-trivia container text-left">
                    <p>Reglas del desafío:</p>
                    <ul>
                        <li>La empresa tiene disponibilidad de 4 motociclistas cada 30 minutos.</li>
                        <li>Cuando un usuario da click en el tramo ocupa un motociclista.</li>
                        <li>Cuando el mismo usuario da click en la misma caja libera el motociclista.</li>
                        <li>Cuando otros usuarios ya han tomado a todos los motociclistas el tramo no se puede seleccionar.</li>
                    </ul>
                </div>            
                
                {
                    tramos && !loading ? (
                        <ul className="list-group listado-tramos">
                            <li 
                                className = 'list-group-item mb-1 noselect'                                               
                            >
                                <div className="row">
                                    <div className="col">
                                        Horario <AccessTimeIcon />
                                    </div>
                                    <div className="col">
                                        Motociclistas <MotorcycleIcon />
                                    </div>
                                    <div className="col">
                                        Disponible
                                    </div>
                                </div>
                            </li>

                            {
                                tramos.map((element, index) => (
                                    <Tramo key = {index} data = { element } />
                                ))
                            }
                        </ul>
                    ) : (
                        <Loading />
                    )
                }            

            </div>
        </div>
    )
}

export default ListadoTramos