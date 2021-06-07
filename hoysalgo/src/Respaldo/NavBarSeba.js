import React, { Component, Fragment } from "react";
import normal from "../img/normal.png";
import estiloNavBar from "./estiloNavBar.css"

const styles = {color: "#991109", 
               /* width: "22em", 
                margin: "0 auto"*/
marginTop: 200};

const img={maxWidth: 100}

class NavBar extends Component{
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
                <a className="navbar-brand linkLogo " href="123"><img  src={normal} style={img} alt="hola"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link btn btn-sm btn-outline-secondary" href="123">Registra tu negocio <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="123">Mis reservas</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="123" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Mis Negocios
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="123">Negocio 1</a>
                                <a className="dropdown-item" href="123">Negocio 2</a>
                                <a className="dropdown-item" href="123">Negocio 3</a>
                            </div>
                        </li>
                    </ul>
                </div>
              </nav>
              
          </Fragment>
        );
      }    
}
export default NavBar;