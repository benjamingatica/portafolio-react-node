import React from 'react'
import myavatar from '../../img/myAvatar.svg'
import postgresql_image from '../../img/postgresql.png'
import python_image from '../../img/python.png'
import php_image from '../../img/php.png'
import mysql_image from '../../img/mysql.png'
import mongo_image from '../../img/mongo.png'
import react_image from '../../img/react.png'
import angular_image from '../../img/angular.png'
import node_image from '../../img/node.png'
import futbol_image from '../../img/futbol.png'
import calistenia_image from '../../img/calistenia.png'
import musica_image from '../../img/musica.png'
import cv_file from '../../cv/CV.pdf'
import GitHubIcon from '@material-ui/icons/GitHub';

const Home = () => {
    return (
        <div className="contenedor-home">
            <div className="home-intro">
                <h1><strong> { '< Hola Mundo />' } </strong></h1>
                <img src={myavatar} alt="avatar" id="image-avatar"/>
                <p className="lead">Soy un ingeniero en informática apasionado por el código y estusiasta con los nuevos desafíos &#128521;</p>
            </div>

            <div className="home-presentacion">
                <div className="container">
                    <h2>Mi nombre es Benjamín Gatica. Un placer conocerte!</h2>
                    <div className="text-left">
                        <p>26 años de edad. Nacido, criado y actualmente viviendo en Santiago de Chile. Estudié ingeniería en informática en la Universidad Tecnológica de Chile INACAP, titulándome en diciembre del año 2018. Inicié mi vida laboral en el desarrollo de software en el mes de septiembre de 2018 cuando ingresé a realizar la práctica profesional en Acepta.com, empresa dedicada a la digitalización de procesos y documentos, para una vez terminado este período continuar trabajando en la institución bajo el cargo de ingeniero de desarrollo. Desde abril de 2021 a la fecha me desempeño como ingeniero de desarrollo en i-CAR S.A., empresa dedicada a la transformación digital dentro del rubro automotriz. Actualmente me encuentro en búsqueda de nuevas oportunidades laborales.</p>
                    </div>
                </div>                
            </div>

            <div className="home-skills">                
                <h2><i>Mis principales skills</i></h2>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3 contenedor-imagen-skills">
                        <p><strong>React</strong></p>
                        <img src={react_image} alt="React" title="React"/>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3 contenedor-imagen-skills">
                        <p><strong>Node.js</strong></p>
                        <img src={node_image} alt="Node.js" title="Node.js"/>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3 contenedor-imagen-skills">
                        <p><strong>mongoDB</strong></p>
                        <img src={mongo_image} alt="mongoDB" title="mongoDB"/>
                    </div>                    

                    <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3 contenedor-imagen-skills">
                    <p><strong>Angular</strong></p>
                        <img src={angular_image} alt="Angular" title="Angular"/>
                    </div>                  

                    <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3 contenedor-imagen-skills">
                        <p><strong>PostgreSQL</strong></p>
                        <img src={postgresql_image} alt="PostgreSQL" title="PostgreSQL"/>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3 contenedor-imagen-skills">
                        <p><strong>Python</strong></p>
                        <img src={python_image} alt="Python" title="Python"/>
                    </div>                    
                    
                    <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3 contenedor-imagen-skills">
                        <p><strong>php</strong></p>
                        <img src={php_image} alt="php" title="php"/>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                        <p><strong>MySQL</strong></p>
                        <img src={mysql_image} alt="MySQL" title="MySQL"/>
                    </div>                                                                                    
                </div>
                <div className="row">
                    <a className="btn btn-success btn-lg" id ="download-cv" href={cv_file} download>Écha un vistazo a mi CV &#129488;</a>
                </div>
            </div>

            <div className="home-hobbies">
                <h2 className="text-white"><i>Mis hobbies favoritos</i></h2>
                <div className="row contenedor-hobbies">
                    <div className="col-xs-12 col-sm-6 col-md-4 contenedor-imagen-hobbies">
                        <p><strong>Futbolito</strong></p>
                        <img src={futbol_image} alt="Futbolito" title="Futbolito"/>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 contenedor-imagen-hobbies">
                        <p><strong>Calistenia</strong></p>
                        <img src={calistenia_image} alt="Calistenia" title="Calistenia"/>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 contenedor-imagen-hobbies">
                        <p><strong>Música</strong></p>
                        <img src={musica_image} alt="Musica" title="Musica"/>
                    </div>   
                </div>
            </div>

            <div className="home-github">
                <a href="https://github.com/benjamingatica/portafolio-react-node" target = "__blank">Accede al repositorio de este proyecto en GitHub <GitHubIcon /> </a>
            </div>
            
        </div>
    )
}

export default Home
