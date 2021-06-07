import React, { Component} from "react";
import {connect} from "react-redux";
import "./Categorias.css"
import {Link} from "react-router-dom"

class CategoriaCard extends Component{

    constructor()
    {
        super();
        this.idNegocio = React.createRef();        

        this.state = {
            preload:false,
            alerta:{
                mensaje:'',
                tipo:''// OK/ERROR
            }
        }
    }
    EntrarCategoria(idCategoria)
    { 
      //cargar componente de la informacion del negocio indicado 
      this.props.dispatch({type:"NegociosDeCategoria",payload:idCategoria});
    }
    render()
    {
      let {id,nombre,foto} = this.props;
      
      const background=
      {
        backgroundImage: 'url("../images/imgCategorias/'+foto+'")',
        backgroundColor:"#282323"
      };

      return(        
        <div className="categoria" style={background}> 
          <Link to="/Negocios" href onClick={() => this.EntrarCategoria(id)}>     
            <div className="overlay" >
              <div className="items"></div>
              <div className="items head">
                <p>{nombre}</p>
              </div>
            </div>
            </Link>  
        </div>   
      )
    }  
}
function mapStateToProps(state)
{
    return {
      mostrar:state.mostrar,
      idCategoria:state.idCategoria  
    };
}
export default connect(mapStateToProps)(CategoriaCard);