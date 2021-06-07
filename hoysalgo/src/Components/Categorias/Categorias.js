import './Categorias.css';
import React, { Component } from "react";
import {connect} from "react-redux";

import { lasCategorias } from "../../Services/Services";
import CategoriaCard from "./CategoriaCard"

class Categorias extends  Component
{
  componentDidMount()
  {
    this.cargarCategorias();
  }

  componentWillReceiveProps(nextProps)
  {
    

    const categoria1= nextProps.todosLosNegocios.map((negocio)=>parseInt(negocio.categoria_id_1));
    const categoria2= nextProps.todosLosNegocios.map((negocio)=>parseInt(negocio.categoria_id_2));
    const categoria3= nextProps.todosLosNegocios.map((negocio)=>parseInt(negocio.categoria_id_3));

    const categorias=nextProps.todosLasCategorias.filter((categoria) => 
      categoria1.includes(categoria.id) ||
      categoria2.includes(categoria.id) ||
      categoria3.includes(categoria.id)
    )

    this.setState({categorias:categorias});
  }

  cargarCategorias= cc =>
  {
    lasCategorias().then((respuesta) =>
    {    
      this.props.dispatch({type:"CargarCategorias", payload:respuesta.message});      
    }) 
  }

  constructor()
  {
      super();
      this.state = 
      {
        preload:false,
        mensaje:'',
        categorias:[]
      };
  }
  render()
  {   
    
    return(
      <div className="lasCategorias">
        <h2>Seleccioná una categoria</h2>
        {
          this.state.categorias.map(
            (laCategoria,id) => 
              <CategoriaCard key = {id} {...laCategoria}/>
            )
          }        
      </div>
      )
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar, 
        todosLasCategorias : state.todosLasCategorias, 
        todosLosNegocios : state.todosLosNegocios,     
    };
}
export default connect(mapStateToProps)(Categorias);