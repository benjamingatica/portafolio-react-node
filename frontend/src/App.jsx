import React from "react";
import Login from "./components/login/Login";
import Header from "./components/Header";
import ListadoTramos from "./components/tramos/ListadoTramos";
import Trivia from "./components/trivia/Trivia";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Home from "./components/home/Home";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { auth } from "./firebase";

function App() {    
    const [firebaseUser, setFirebaseUser] = React.useState(false);

    React.useEffect(() => {        
        const fetchUser = () => {
            auth.onAuthStateChanged(user => {                
                if (user) {
                    setFirebaseUser(user);
                } else {
                    setFirebaseUser(null);
                }
            })
        }
        fetchUser()
    }, [])

    const RutaPrivada = ({render, path, ...rest}) => {
        if (!firebaseUser) {
            return <Redirect to = "/login" {...rest} />;
        }

        if (!localStorage.getItem('usuario')) {
            return <Redirect to = "/login" {...rest} />;
        }

        const usuarioStorage = JSON.parse(localStorage.getItem('usuario'));

        if (usuarioStorage.uid !== firebaseUser.uid) {
            return <Redirect to = "/login" {...rest} />;            
        }
        
        return <Route render = {render} path = {path} {...rest} />;
    }

    return firebaseUser !== false ? (
        <Router>        
            <Header firebaseUser = { firebaseUser }/>                
            
            <Switch>                                            
                <Route component={Home} path="/" exact />
                <Route component={Home} path="/home" exact />                
                <Route component={Login} path="/login" exact />
                <RutaPrivada render = {() => ( <ListadoTramos />)} path = "/tramos" exact />
                <RutaPrivada render = {() => ( <Trivia />)} path = "/trivia" exact />                
            </Switch>                                                            
            
            <Footer />
        </Router>
    ) : ( <Loading />)
}

export default App
