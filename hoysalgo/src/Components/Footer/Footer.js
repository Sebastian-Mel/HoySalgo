import './Footer.css';
import React, { Component } from "react";
import {connect} from "react-redux";
import img from "../../normal.png";
import { Fragment } from 'react';


class Footer extends  Component
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
      <div className="container-fluid pb-0 mb-0 justify-content-center text-light miFooter">
        <footer>
            <div className="row my-5 justify-content-center py-5">
                <div className="col-11">
                    <div className="row ">
                        <div className="col-xl-10">
                          <a className="navbar-brand linkLogo " href  onClick={() => this.IrA("Inicio")}>
                            <img src={img} alt="HoySalgoLogo" className="EstiloLogoFooter"/>
                          </a>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                            <h6 className="mb-3 mb-lg-4 bold-text "><b>MENÚ</b></h6>
                            <ul className="list-unstyled">
                                <li ><a href onClick={() => this.IrA("Inicio")}>Inicio</a></li>
                                <li ><a href onClick={() => this.IrA("Contacto")}>Contáctanos</a></li>
                            </ul>
                        </div>                        
                    </div>
                    <div className="row ">
                        <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                            <p className="social text-muted mb-0 pb-0 bold-text">
                              <span className="mx-2">
                                <a href="https://www.facebook.com/Hoy-Salgo-101694221759610">
                                  <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                              </span>
                              <span className="mx-2">
                                <a href="https://www.linkedin.com/company/hoy-salgo/">
                                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                </span>
                              <span className="mx-2">
                                <a href="https://www.instagram.com/hoysalgouy/">
                                  <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                              </span>
                              </p><small className="rights"><span>&#174;</span> HoySalgo All Rights Reserved.</small>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                            <h6 className="mt-55 mt-2 text-muted bold-text">
                              <b>Contacto WPP</b>
                            </h6>
                            <small>
                              <span>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </span> <a href="https://api.whatsapp.com/send?phone=+59896220609&text=Hola!%20Quiero%20llegar%20a%20mas%20clientes!">+598 96220609</a>
                            </small>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                            <h6 className="text-muted bold-text">
                              <b>Nuestro mail</b>
                            </h6>
                            <small>
                              <span>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </span>
                              <a href="mailto:info@hoysalgo.uy"> info@hoysalgo.uy</a> 
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
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
export default connect(mapStateToProps)(Footer);