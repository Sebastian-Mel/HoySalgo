import React, { Component } from 'react';
import { connect } from 'react-redux';
import { lasCategorias } from "../../Services/Services";
import './Buscador.css';

class Buscador extends  Component
{
    componentDidMount()
    {
        this.cargarCategorias();
    }

    cargarCategorias= cc =>
    {
        lasCategorias().then((respuesta) =>
        {       
            const categoria1= this.props.todosLosNegocios.map((negocio)=>parseInt(negocio.categoria_id_1));
            const categoria2= this.props.todosLosNegocios.map((negocio)=>parseInt(negocio.categoria_id_2));
            const categoria3= this.props.todosLosNegocios.map((negocio)=>parseInt(negocio.categoria_id_3));

            const departamentos = this.props.todosLosNegocios.map((negocio)=>negocio.ciudad);

            const categorias=respuesta.message.filter((categoria) => 
            categoria1.includes(categoria.id) ||
            categoria2.includes(categoria.id) ||
            categoria3.includes(categoria.id)
        )
        this.setState({categorias:categorias,departamentos:[...new Set(departamentos)]});  
        })   
    }

    constructor()
    {
        super();
        this.nombre = React.createRef(); 
        this.ciudad = React.createRef();
        this.categoria_id = React.createRef();               

        this.state = {
            preload:false,
            categorias:[],
            departamentos:[],
            alerta:{
                mensaje:'',
                tipo:''// OK/ERROR
            }
        }
    }

    Buscar()
    { 
      //cargar componente de la informacion del negocio indicado 
      this.props.dispatch({type:"NegociosDeNombre",payload: this.nombre.current.value});
      this.props.dispatch({type:"NegociosDeCiudad",payload: this.ciudad.current.value});
      this.props.dispatch({type:"NegociosDeCategoria",payload: this.categoria_id.current.value});
    }

    render() {
        
        return (
            <div className="site-section site-section_">
                <div className="container custom">                  
                    <form className="form-search col-md-6 rowStyle">
                        <div className="row align-items-end">

                            <div className="col-md-6">
                                <label htmlFor="list-types">Nombre</label>
                                <div className="select-wrap">
                                    <input type="text" id="nombre" className="form-control" placeholder="ej: Don Pepe Bar" ref={this.nombre} onChange={() => this.Buscar()}/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="offer-types">Ciudad</label>
                                <div className="select-wrap">
                                <span className="icon icon-arrow_drop_down"></span>
                                    <select name="ciudad" id="ciudad" ref={this.ciudad} className="form-control" onChange={() => this.Buscar()}>
                                        {<option defaultValue value={this.props.ciudad}>{this.props.ciudad}</option>} 
                                       
                                        {
                                            this.state.departamentos.map(
                                                (ciudades,id) => 
                                                    <option key={id} value={ciudades}>{ciudades}</option>
                                            )
                                        } 
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="offer-types">Categoria Actual</label>
                                <div className="select-wrap">
                                    <select name="categoria" id="categoria" ref={this.categoria_id} className="form-control" onChange={() => this.Buscar()}>
                                        {
                                            this.props.todosLasCategorias.filter(
                                                (e,i)=> e.id == this.props.categoria
                                            ).map(
                                                (laCategoria,id) => 
                                                <option defaultValue key={id} value={laCategoria.id}>{laCategoria.nombre}</option>
                                            )                                            
                                        }
                                        {
                                            this.state.categorias.map(
                                                (laCategoria,id) => 
                                                    <option key={id} value={laCategoria.id}>{laCategoria.nombre}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>                  
                        </div>                        
                    </form>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar, 
        todosLasCategorias : state.todosLasCategorias,
        todosLosNegocios:state.todosLosNegocios, 
        nombre : state.nombre,   
        ciudad : state.ciudad,
        categoria : state.categoria 
    };
}
export default connect(mapStateToProps)(Buscador);