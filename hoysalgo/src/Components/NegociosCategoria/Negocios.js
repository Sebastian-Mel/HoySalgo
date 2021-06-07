
import React, { Component ,Fragment } from "react";
import {connect} from "react-redux";
import { todosLosNegocios,misFavoritos } from "../../Services/Services";
import Negocio from "./Negocio"
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import Buscador from "../Buscador/Buscador";


class Negocios extends  Component
{
  componentDidMount()
  {
    window.scrollTo(0, 0);

    todosLosNegocios().then((respuesta) =>
    {              
      this.props.dispatch({type:"CargarNegocios", payload:respuesta.message});
    }) 

    this.refresh();
  }

  constructor()
  {
      super();
      this.state = 
        {
        preload:false,
        mensaje:'',
        misFavoritos:[]
        };
  }

  refresh=aa=>
  {
    let token = localStorage.getItem('access_token'); 
    if(token !== null && token !== "")
    { 
      misFavoritos(token).then((respuesta) =>
      {           
          this.setState({misFavoritos:respuesta.message}) 
      })
    }
  }

  validarFavorito=id=>
  {
    let elFavorito = this.state.misFavoritos.filter((e,i)=>e.negocio_id == id);
    return elFavorito.length>0;
  }

  render()
  {    
    return(
      <Fragment>
        <NavBar/>        
        <Buscador/>
        <div className="losNegocios">          
          <div className="site-section site-section-sm site-section_">            
            <div className="container">
              <div className="row mb-5">
                  {
                    this.props.todosLosNegocios.filter(
                      (e,i)=> 
                          e.nombre.toUpperCase().includes(this.props.nombre.toUpperCase()) &&
                          e.ciudad.toUpperCase().includes(this.props.ciudad.toUpperCase()) &&
                          (e.categoria_id_1 == this.props.categoria || e.categoria_id_2 == this.props.categoria || e.categoria_id_3 == this.props.categoria )
                      ).map(
                        (elNegocio,id) => 
                        <Negocio key = {id} {...elNegocio} refresh={this.refresh}  esFavorito={this.validarFavorito(elNegocio.id)}/>
                      )
                  }       
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </Fragment>
      )
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar, 
        todosLosNegocios : state.todosLosNegocios, 
        nombre : state.nombre,   
        ciudad : state.ciudad,
        categoria : state.categoria
    };
}
export default connect(mapStateToProps)(Negocios);