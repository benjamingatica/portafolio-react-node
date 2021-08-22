import React from "react";
import { api_url } from "../../Global";

const Ranking = () => {
    const [ranking, setRanking] = React.useState([]);

    React.useEffect(() => {
        getRanking();
    }, []);

    const getRanking = async () => {
        try {
        const res = await fetch(api_url + "ranking");
        const ranking_resp = await res.json();        
        setRanking(ranking_resp.ranking)
        } catch (error) {
        console.log(error);
        }
    };

    const formatFecha = (fecha) => {        
        let fechaAux = new Date(fecha)        
        const day = fechaAux.getUTCDate();
        const month = fechaAux.getUTCMonth() + 1;
        const year = fechaAux.getUTCFullYear();

        return day + "-" + month + "-" + year;
    }

    return (
        <>
        <div className="container text-left mt-4 mb-2">
            <h1>Ranking &#11088;</h1>
        </div>
        <div className="container text-left contenedor-ranking">            
            <ul className="list-group">
                {
                    ranking.map((element, index) => (
                        <li className="list-group-item" key={index}>
                            <div className="row fila-ranking">
                                <div className="col-xs-12 col-md-3 text-center numero-ranking">
                                    <h1>{ index + 1 }</h1>
                                </div>    
                                <div className="col-xs-12 col-md-9">
                                    <strong>Usuario: </strong>{element.usuario}
                                    <br />
                                    <strong>Categoría: </strong>{element.categoria}
                                    <br />
                                    <strong>Preguntas: </strong>{element.cantidadPreguntas}
                                    <br />
                                    <strong>Correctas: </strong>{element.puntaje}
                                    <br />
                                    <span className="text-danger"><strong>Efectividad: </strong>{element.efectividad + '%'}</span>
                                    <br />
                                    <strong>Fecha: </strong>{formatFecha(element.fecha)}
                                </div>    
                            </div>    
                        </li>                
                    ))
                }
            </ul>
        </div>
        </>
    );
};

export default Ranking;
