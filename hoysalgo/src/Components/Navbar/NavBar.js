import React, { Component, Fragment } from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"

import Menu from "./Menu";
import "./NavBar.css"
import img from "../../normal.png";

class NavBar extends  Component
{
  constructor()
  {
      super();
      this.state = 
                  {
                    preload:false,
                    mensaje:''
                  };
  }

  IrA= c =>
  {
    this.props.dispatch({type:c});    
  }
  
  render()
  {
    return( 
      <Fragment>
        <nav className=" navbar navbar-expand-lg navbar-custom navbar-dark sticky-top d-flex">
          <Link to="/" className="navbar-brand linkLogo " href  onClick={() => this.IrA("Inicio")}>
            <img src={img} alt="HoySalgoLogo" className="EstiloLogo"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Menu cargarNegocio={this.props.cargarNegocio}/>
          </div>
        </nav>      
      </Fragment>
    )
  }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,       
    };
}
export default connect(mapStateToProps)(NavBar);