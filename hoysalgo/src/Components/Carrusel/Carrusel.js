import React, { Component } from 'react';
import {connect} from "react-redux";
import { todosLosNegocios } from "../../Services/Services";
import Loading from '../PreLoader/Loading'
import Card from "./Card"
import NukaCarousel from 'nuka-carousel'

import "./estiloCarrusel.css"

class Carrusel extends  Component
{
  componentDidMount()
  {
    this.setState({preloader:true});
    todosLosNegocios().then((respuesta) =>
    {   
      this.props.dispatch({type:"CargarNegocios", payload:respuesta.message});
      this.setState({preloader:false});
    })
  }
  constructor()
  {
      super();
      this.state = 
      {
        preloader:false, 
        mensaje:''
      };
  }
  
  render()
  {
    return (
      <>
        <NukaCarousel autoplay={true} speed={1000} framePadding={"-10px 0px"} wrapAround={true} transitionMode={"scroll3d"}  autoplayInterval={7000}
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide} className="carousel-control-prev-icon btn btn-link"></button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide} className="carousel-control-next-icon btn btn-link"></button>
          )}>
          {this.props.todosLosNegocios.filter(
                                            (negocio,i)=> negocio.core >= 10
                                            ).map((elNegocio,id) => <Card key = {id} {...elNegocio}/>)}                     
        </NukaCarousel>
        <Loading show={this.state.preloader}/>
      </>
      )
    }  
  }
  function mapStateToProps(state)
  {
      return {
        todosLosNegocios:state.todosLosNegocios,       
      };
  }
  export default connect(mapStateToProps)(Carrusel);