import React, { Component } from 'react';
import {connect} from "react-redux";
import "./NavBar.css"
import {Link} from "react-router-dom"

class DropdownitemNegocio extends Component
{  
    
    handleClick=()=>{
        this.props.cargarElNegocio(this.props.id);

        this.props.todosMisNegocios.filter((e,i)=> e.id === this.props.id).map((elNegocio,id)=>
        this.props.dispatch({type:"EditarNegocio",payload:elNegocio}))
    }
    render()
    {
        let {nombre} = this.props; 
        //console.log(this.props);
        return(
            <>
                <Link to="/EditarNegocio" className="dropdown-item custom" href onClick={ this.handleClick}>
                    {nombre}
                </Link>
            </>
        );
    }
}

function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar, 
        todosMisNegocios:state.todosMisNegocios,
        cargarNegocio:state.action   
    };
}
const mapDispatchToProps=(dispatch)=>{

    return {
        cargarElNegocio: (id) => {dispatch ({type:'cargarElNegocio', id:id})},
        dispatch
    }


}
export default connect(mapStateToProps,mapDispatchToProps)(DropdownitemNegocio);