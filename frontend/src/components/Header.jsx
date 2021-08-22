import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { cerrarSesionAccion } from '../redux/usuarioDucks';
import { resetTrivia } from '../redux/cuestionarioDucks';
import HomeIcon from '@material-ui/icons/Home';

const Header = (props) => {
    const dispatch = useDispatch();
    const activo = useSelector(store => store.usuario.activo);    

    const cerrarSesion = () => {
        dispatch(resetTrivia());
        dispatch(cerrarSesionAccion());
        props.history.push('/login');
    }

    return (
        <header className="masthead bg-success">
            <div className="inner">
            <h4 className="masthead-brand">
                <NavLink className="nav-link" to="/" exact>
                    <HomeIcon />
                </NavLink>
            </h4>
            <nav className="nav nav-masthead justify-content-center">                
                {
                        activo ? (
                            <>                                
                                <NavLink className="nav-link" to="/tramos" exact>
                                    Tramos horarios
                                </NavLink>

                                <NavLink className="nav-link" to="/trivia" exact>
                                    Trivia
                                </NavLink>

                                <button
                                    className="nav-link boton-cerrar-sesion"
                                    onClick={ () => cerrarSesion() }
                                >
                                    Cerrar Sesión
                                </button>
                            </>
                        ):(
                            <>                            
                                <NavLink className="nav-link" to="/" exact>
                                    Presentación
                                </NavLink>
                                <NavLink className="nav-link" to="/login" exact>
                                    Desafíos
                                </NavLink>
                            </>
                        )
                    }

            </nav>
            </div>
        </header>
    )
}

export default withRouter(Header)