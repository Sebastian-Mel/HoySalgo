import React, { Component, Fragment } from "react";
import normal from "../img/normal.png";
//import estiloNavBar from "./estiloNavBar.css"

/*const styles = {color: "#991109", 
               /* width: "22em", 
                margin: "0 auto"
marginTop: 200};*/

const img={maxWidth: 100}

class NavBarNuevo extends Component{
    constructor(props){
        super(props)
        this.state = {
          userValue: null,
          passValue: null,
        };
        console.log(props);
    }

    render() {
        return (
          <Fragment>
              <nav className=" navbar navbar-expand-lg navbar-custom navbar-dark sticky-top  d-flex">
                <a className="navbar-brand  " href={() => false}><img  src={normal} style={img}></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link btn btn-sm btn-outline-secondary" href={() => false}>Registra tu negocio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={() => false}>Mis reservas</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href={() => false} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Mis Negocios
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href={() => false}>Negocio 1</a>
                                <a className="dropdown-item" href={() => false}>Negocio 2</a>
                                <a className="dropdown-item" href={() => false}>Negocio 3</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar Negocio" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
              </nav>
              
          </Fragment>
        );
      }    
}
export default NavBarNuevo;