import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registrarUsuarioAccion, ingresoUsuarioAccion } from '../../redux/usuarioDucks';

const Login = (props) => {
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [error, setError] = React.useState(null);
    const [esRegistro, setEsRegistro] = React.useState(true);
    
    const activo = useSelector(store => store.usuario.activo);
    const error_usuario_ducks = useSelector(store => store.usuario.error_message);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (activo) props.history.push('/tramos');
    }, [activo, props.history])

    const procesarDatos = e => {
        e.preventDefault();
        if (!email.trim()) {        
            setError('Ingrese Email');
            return;
        }

        if (!pass.trim()) {            
            setError('Ingrese Password');
            return;
        }

        if (pass.length < 6) {
            setError('Password de 6 caracteres o más');
            return;
        }
        
        setError(null);

        if (esRegistro) {
            registrar();
        } else {
            login();
        }
    }

    const login = React.useCallback(async() => {
        try {
            dispatch(ingresoUsuarioAccion(email, pass));
        } catch (error) {
            console.log('login error : ', error);
        }
    }, [email, pass, dispatch]);

    const registrar = React.useCallback(async() => {
        try {
            dispatch(registrarUsuarioAccion(email, pass));
        }
        catch (error) {
            console.log('registrar error: ', error);
        }
    }, [email, pass, dispatch]);

    return (        
        <div className="contenedor-desafios">
            <div className="info-desafios">
                <h1>Mira mis desafíos &#128064;</h1>                
                <p>Para mostrar un poco de mis habilidades he desarrollado algunos ejercicios de programación &#128074;</p>
                <p>Puedes jugar con ellos ingresando en el siguiente formulario! Crea una cuenta utilizando cualquier e-mail y password &#128521;</p>
            </div>
            <div className="contenedor-login">
                <h3>
                    {
                        esRegistro ? 'Registro de usuarios' : 'Login de acceso'
                    }    
                </h3> 
                <hr />
                <form onSubmit={ procesarDatos }>
                    {
                        error ? (
                            <div className="alert alert-danger">
                                { error }
                            </div>
                        ) : error_usuario_ducks ? (
                            <div className="alert alert-danger">
                                { error_usuario_ducks }
                            </div>
                        ) : (null)
                    }
                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control mb-2" 
                            placeholder="Ingrese un email"
                            onChange={ e => setEmail(e.target.value) }
                            value={ email }
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control mb-2" 
                            placeholder="Ingrese un password"
                            onChange={ e => setPass(e.target.value) }
                            value={ pass }
                        />
                    </div>
                    
                    <button className="btn btn-success btn-lg btn-block" type="sumit">
                        {
                            esRegistro ? 'Registrarse' : 'Acceder'
                        }
                    </button>

                    <button 
                        className="btn btn-info btn-sm btn-block"
                        type="button"
                        onClick = {
                            () => setEsRegistro(!esRegistro)
                        }
                    >
                        {
                            esRegistro ? '¿Ya estás registrado?' : '¿No tienes cuenta?'
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login)