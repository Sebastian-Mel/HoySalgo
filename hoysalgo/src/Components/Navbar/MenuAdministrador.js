import React, { Component } from 'react';
import {connect} from "react-redux";

class MenuAdministrador extends Component {
    IrA= c =>
    {
        this.props.dispatch({type:c});    
    }
    render() {
        return (
            <div>
                asdasd
            </div>
        );
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,       
    };
}
export default connect(mapStateToProps)(MenuAdministrador);