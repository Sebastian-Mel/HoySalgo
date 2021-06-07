import './App.css';
import React, { Component, Fragment } from "react";
import {Provider} from "react-redux";
import store from "./store";
import Confirmacion from "./Components/Confirmacion/Confirmacion";
import CambioContrasenia from './Components/Login/CambioContrasenia';
import Login from "./Components/Login/Login"
import Inicio from "./Components/Inicio/Inicio"
import ModanMenu from "./Components/Negocio/ModalMenu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PreLoader from "./Components/PreLoader/PreLoader"
import Aplicacion from "./Components/Aplicacion"
import ModalMenu from './Components/Negocio/ModalMenu';
import Contacto from './Components/Contacto/Contacto';
import Reservas from './Components/Reservas/Reservas';
import MisDatos from './Components/MisDatos/MisDatos';
import NuevoNegocio from "./Components/Negocio/NuevoNegocio"
import Negocios from './Components/NegociosCategoria/Negocios';
import DetalleNegocio from './Components/Negocio/DetalleNegocio';
import EditarNegocio from './Components/Negocio/EditarNegocio';


class App extends  Component
{  
  render()
  {
    return(
  <Fragment>      
    <Provider store = {store}>
      <Router>
        <Route>
        <Switch>
            <Route path="/Confirmacion/:id" render={(props) => (
              <Confirmacion {...props}/>
            )}>
            </Route>
            <Route path="/CambioContrasenia/:token" render={(props) => (
              <CambioContrasenia {...props}/>
            )}>
            </Route>
              <Route path="/Login" render={(props) => (
                <Login history={"/"} {...props}/>
              )}>
            </Route>
            <Route path="/Menu/:id" render={(props) => (
                <ModalMenu show={true} history={"/"} {...props}/>
              )}>
            </Route>
            <Route path="/app/:id" render={(props) => (
                <Inicio show={true} history={"/"} {...props}/>
              )}>
            </Route>
            <Route path="/DetalleNegocio">
              <DetalleNegocio/>
            </Route>
            <Route path="/EditarNegocio">
              <EditarNegocio/>
            </Route>
            <Route path="/Negocios">
              <Negocios/>
            </Route>
            <Route path="/Contacto">
              <Contacto/>
            </Route>
            <Route path="/MisDatos">
              <MisDatos/>
            </Route>
            <Route path="/Reservas">
              <Reservas/>
            </Route>
            <Route path="/NuevoNegocio">
              <NuevoNegocio/>
            </Route>
            <Route path="/">
              <Aplicacion/>
            </Route>
          </Switch>
        </Route>
      </Router>
    </Provider>  
</Fragment>
    )
  }
}
export default App; 