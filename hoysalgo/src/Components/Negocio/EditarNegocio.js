import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';
import {misNegocios,ActualizarNegocio,SinCupos } from "../../Services/Services";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import Loading from '../PreLoader/Loading'
import './Negocio.css';

class EditarNegocio extends Component
{
    componentDidMount()
    {
        
        if(Object.keys(this.props.negocio).length !== 0 ){
            
            localStorage.setItem("negocio",JSON.stringify(this.props.negocio));
            
        }
        
        let negocio= JSON.parse(localStorage.getItem("negocio"));
        this.setState({ id:negocio.id,
                        nombre:negocio.nombre,
                        descripcion:negocio.descripcion,
                        telefono:negocio.telefono,
                        ciudad:negocio.ciudad,
                        direccion:negocio.direccion,
                        categoria_id_1:negocio.categoria_id_1,
                        disponible:negocio.disponible,
                        img:'https://recursos.hoysalgo.uy/'+negocio.foto
                    })
        
        window.scrollTo(0, 0);
    }


    constructor()
    {
        super();
        this.descripcion= React.createRef();
        this.telefono= React.createRef();
        this.ciudad= React.createRef();
        this.direccion= React.createRef();
        this.categoria_id_1=React.createRef();

        this.state = {
            mensaje:'',
            preloader:false,
            img:'./images/check.png',
            buttonDisabled:false,
            setSelectedFile:null,
            baseImage:'',
            setBaseImage:'',
            id:'',
            nombre:'',
            descripcion:'',
            telefono:'',
            foto:'',
            ciudad:'',
            direccion:'',
            categoria:'',
            disponible:''            
        };
    } 

    ActualizarNegocio = (negocio_id) =>
    {
        this.setState({buttonDisabled:true,preloader:true});
        
        let access_token = localStorage.getItem('access_token'); 
        if(access_token !== null && access_token !== "")
        {
            let id_negocio = negocio_id;
            let descripcion = this.descripcion.current.value;
            let telefono = this.telefono.current.value;           
            let ciudad = this.ciudad.current.value;
            let direccion = this.direccion.current.value;
            let categoria_id_1 = this.categoria_id_1.current.value;
            if(
                id_negocio !== ''
                && descripcion !== ''
                && telefono !== ''                
                && ciudad !== ''
                && direccion !== ''
                && categoria_id_1 !== ''
            )
            {
                ActualizarNegocio({
                    token:access_token,id_negocio:id_negocio,descripcion:descripcion, 
                    telefono:telefono, ciudad:ciudad, direccion:direccion, categoria_id_1:categoria_id_1               
                }).then((respuesta) =>
                {        
                    if(respuesta.cod_error === 200)
                    {                        
                        this.setState({mensaje:respuesta.message,buttonDisabled:false,preloader:false});  
                    }
                    else
                    {
                        this.setState({mensaje:"Ocurrio un error al actualizar tu negocio!",buttonDisabled:false,preloader:false});
                    }                
                })          
            }
            else
            {
                this.setState({mensaje:'Datos vacios, verifique!!',buttonDisabled:false,preloader:false});
            }
        }
        else
        {
            this.setState({mensaje:'No es posible actualizar un negocio sin entrar!',buttonDisabled:false,preloader:false});
        }
    }

    SinConCupos = (negocio_id) =>
    {
        this.setState({buttonDisabled:true,preloader:true});

        let token = localStorage.getItem('access_token'); 
        if(token !== null && token !== "")
        {                       
            if(
                negocio_id !== ''                
            )
            {
                SinCupos({
                    token:token,negocio_id:negocio_id              
                }).then((respuesta) =>
                {        
                    if(respuesta.cod_error === 200)
                    {                        
                        this.setState({mensaje:respuesta.message,buttonDisabled:false,preloader:false});
                        this.setState({disponible:!this.state.disponible});                       
                    }
                    else
                    {
                        this.setState({mensaje:"Ocurrio un error al actualizar tu negocio!",buttonDisabled:false,preloader:false});
                    }                
                })         
            }
            else
            {
                this.setState({mensaje:'Datos vacios, verifique!!',buttonDisabled:false,preloader:false});
            }
        }
        else
        {
            this.setState({mensaje:'No es posible actualizar un negocio sin entrar!',buttonDisabled:false,preloader:false});
        }
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({
            nombre:nextProps.negocio.nombre,
            descripcion:nextProps.negocio.descripcion,
            telefono:nextProps.negocio.telefono,
            ciudad:nextProps.negocio.ciudad,
            direccion:nextProps.negocio.direccion,
            categoria:nextProps.negocio.categoria,
            disponible:nextProps.negocio.disponible,
            img:'https://recursos.hoysalgo.uy/'+nextProps.negocio.foto
        }); 
    }

    render()
    {
        let {id,nombre,descripcion,telefono,ciudad,direccion,categoria}=this.state
        return(          
            <Fragment>                                 
                <NavBar/>
                <div className="site-section">
                    <div className="container contenedor">                        
                        <div className="row">
                            <div className="col-md-12 col-lg-8 mb-5 nuevoNegocio"> 
                                <div className="col-md-12 text-center">
                                    <h2 className="tituloEditarNegocio"> Estas editando a {nombre} </h2>                                   
                                </div>                                              
                                <form className="p-5">

                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="font-weight-bold" htmlFor="nombreNegocio">El nombre de tu negocio es:</label>
                                        <input type="text" id="nombreNegocio" maxLength="50" className="form-control" defaultValue={nombre} readOnly/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="message">Comentanos una descripcion de tu negocio</label> 
                                        <textarea name="message" id="message" cols="30" rows="5" ref={this.descripcion} defaultValue={descripcion} className="form-control" placeholder="Aca podes cargar si hay promos o eventos, ej: El mejor lugar para disfrutar en familia y amigos este viernes que hay promo 2x1 de muzza"></textarea>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="telefono">Un telefono de contacto</label>
                                        <input type="tel" id="telefono" maxLength="20" className="form-control" ref={this.telefono} defaultValue={telefono} placeholder="ej: 099999999-098898989"/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="ciudad">La ciudad de tu negocio</label>
                                        <select name="ciudad" id="ciudad" ref={this.ciudad} className="form-control">
                                            {<option defaultValue value={ciudad}>{ciudad}</option>} 
                                            <option value="Artigas">Artigas</option>
                                            <option value="Canelones">Canelones</option>
                                            <option value="Cerro Largo">Cerro Largo</option>
                                            <option value="Colonia">Colonia</option>
                                            <option value="Durazno">Durazno</option>
                                            <option value="Flores">Flores</option>
                                            <option value="Florida">Florida</option>
                                            <option value="Lavalleja">Lavalleja</option>
                                            <option value="Maldonado">Maldonado</option>
                                            <option value="Montevideo">Montevideo</option>
                                            <option value="Paysandú">Paysandú</option>
                                            <option value="Río Negro">Río Negro</option>
                                            <option value="Rivera">Rivera</option>
                                            <option value="Rocha">Rocha</option>
                                            <option value="Salto">Salto</option>
                                            <option value="San José">San José</option>
                                            <option value="Soriano">Soriano</option>
                                            <option value="Tacuarembó">Tacuarembó</option>
                                            <option value="Treinta y Tres">Treinta y Tres</option>
                                        </select>
                                        </div>
                                    </div> 

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="categoria">La categoria de tu negocio</label>
                                        <select name="categoria" id="categoria" ref={this.categoria_id_1} className="form-control">
                                            <option defaultValue disabled value="--">¡Aparecerá tu negocio cuando los usuarios busquen por tu categoria!</option>
                                            {
                                                this.props.todosLasCategorias.filter(
                                                    (e,i)=> e.id == categoria
                                                ).map(
                                                    (laCategoria,id) => 
                                                    <option defaultValue key={id} value={laCategoria.id}>{laCategoria.nombre}</option>
                                                )                                            
                                            }
                                            {
                                                this.props.todosLasCategorias.map((laCategoria,id) => 
                                                        <option key={id} value={laCategoria.id}>{laCategoria.nombre}</option>
                                                    )
                                            }   
                                        </select>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="direccion">¿Cual es la Direccion de tu negocio?</label>
                                        <input type="text" id="direccion" maxLength="50" className="form-control" ref={this.direccion} defaultValue={direccion} placeholder="¡Para que los clientes lleguen a tu negocio!"/>
                                        </div>
                                    </div>                                    

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <input type="button" value="Actualizar Los datos de mi Negocio" className="btnGuardar btn btn-primary btn-lg" disabled={this.state.buttonDisabled} onClick={(event) => this.ActualizarNegocio(id)} />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <input type="button" value={(this.state.disponible==1)?'Ya no hay cupos':'Ahora hay cupos'} className="btnGuardar btn btn-primary btn-lg" disabled={this.state.buttonDisabled} onClick={(event) => this.SinConCupos(id)} />
                                        </div>
                                    </div>
                                    <div className="foot-lnk">
                                        {this.state.mensaje}
                                    </div> 
                                </form>
                            </div>

                            <div className="col-lg-4">
                                <div className="p-4 mb-3 nuevoNegocio">
                                    <img src={this.state.img} className="previewIMG"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Loading show={this.state.preloader}/>
                <Footer/>
            </Fragment> 
        );
    }
}
const mapStateToProps= (state)=>(
{
        negocio:state.negocio,
        mostrar : state.mostrar,
        todosLasCategorias:state.todosLasCategorias,
})
export default connect(mapStateToProps)(EditarNegocio);