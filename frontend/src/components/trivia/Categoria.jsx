import React from 'react'
import { api_url } from '../../Global';
import { useDispatch } from 'react-redux';
import { comenzarTriviaAccion } from '../../redux/cuestionarioDucks';

const Categoria = () => {
    const [categorias, setCategorias] = React.useState([]);
    const dispatch = useDispatch();

    React.useEffect(() => {
        getCategorias();
    }, [])

    const seleccionarCategoria = (categoriaSeleccionada) => {        
        dispatch(comenzarTriviaAccion(categoriaSeleccionada));
    };

    const getCategorias = async () => {
        try {
            const res = await fetch(api_url + 'categorias-trivia');
            const categorias = await res.json();        
            setCategorias(categorias.categorias)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="row">
        <h3 className="text-left m-3 col-xs-12">Pon a prueba tus conocimientos en alguna de las siguientes categorías</h3>
        {
            categorias.map(element => (                                                        
                <div className="card col-xs-12 col-md-4" key = { element._id }>
                    <img src= {api_url + 'get-image-categorias-trivia/' + element.imagen}  className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{ element.descripcion }</h5>
                        <p className="card-text">{ element.info }</p>
                        <button 
                            className="btn btn-primary"
                            onClick = { () => seleccionarCategoria(element.categoria) }
                        >
                            { element.infoboton }
                        </button>
                    </div>
                </div>
                ))
        }
        </div>
    )
}

export default Categoria
