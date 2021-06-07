import './Categorias.css';
import React, { Component } from "react";
import {connect} from "react-redux";

class Categorias extends  Component
{
  componentDidMount()
  {
      //tiene que ir a buscar las categorias 
  }

  constructor()
  {
      super();
      this.state = 
                  {
                    preload:false,
                    mensaje:''
                  };
  }

  render()
  {
    const img={backgroundImage: 'url("https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")'};
    return(
        <div className="hero-section">
          <div className="card-grid">

            <a className="cardCategoria" href onClick={() => this.IrA("BOLICHE")}>
              <div className="card__background" style={img}></div>
              <div class="card__content">
                <h3 class="card__heading">BOLICHE</h3>
              </div>
            </a>

            <a className="cardCategoria" href onClick={() => this.IrA("RESTO")}>
              <div className="card__background" style={img}></div>
              <div className="card__content">
                <h4 className="card__heading">RESTO</h4>
              </div>
            </a>

            <a className="cardCategoria" href onClick={() => this.IrA("PELUQUERIA")}>
              <div className="card__background" style={img}></div>
              <div className="card__content">
                <h4 className="card__heading">PELUQUERIA</h4>
              </div>
            </a>

            <a className="cardCategoria" href onClick={() => this.IrA("ALGO TRANQUI")}>
              <div className="card__background" style={img}></div>
              <div className="card__content">
                <h4 className="card__heading">ALGO TRANQUI</h4>
              </div>
            </a>      

             <a className="cardCategoria" href onClick={() => this.IrA("BOLICHES")}>
              <div className="card__background" style={img}></div>
              <div className="card__content">
                <h4 className="card__heading">BOLICHES</h4>
              </div>
            </a>

            <a className="cardCategoria" href onClick={() => this.IrA("RESTO")}>
              <div className="card__background" style={img}></div>
              <div className="card__content">
                <h4 className="card__heading">RESTO</h4>
              </div>
            </a>

            <a className="cardCategoria" href onClick={() => this.IrA("PELUQUERIA")}>
              <div className="card__background" style={img}></div>
              <div className="card__content">
                <h4 className="card__heading">PELUQUERIA</h4>
              </div>
            </a>

            <a className="cardCategoria" href onClick={() => this.IrA("ALGO TRANQUI")}>
              <div className="card__background" style={img}></div>
              <div className="card__content">
                <h4 className="card__heading">ALGO TRANQUI</h4>
              </div>
            </a>      

          </div>
        </div>
      )
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar, 
        todosLasCategorias : state.todosLasCategorias,      
    };
}
export default connect(mapStateToProps)(Categorias);