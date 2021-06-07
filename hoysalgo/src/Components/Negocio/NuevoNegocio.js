import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';

import { NuevoNegocioS } from "../../Services/Services";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import Loading from '../PreLoader/Loading'

import './Negocio.css';

class NuevoNegocio extends Component
{
    constructor()
    {
        super();
        this.nombre= React.createRef();
        this.descripcion= React.createRef();
        this.telefono= React.createRef();
        this.foto= React.createRef();
        this.ciudad= React.createRef();
        this.direccion= React.createRef();
        this.categoria_id_1=React.createRef();

        this.state = {
          mensaje:'',
          img:'./images/check.png',
          buttonDisabled:false,
          setSelectedFile:null,
          baseImage:'',
          setBaseImage:'',
          preloader:false

        };
    }   
    uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await this.convertBase64(file);
        this.setState({setBaseImage:base64,img:URL.createObjectURL(e.target.files[0]),preloader:false});

    };

    convertBase64 = (file) => {
        this.setState({preloader:true});
        return new Promise((resolve, reject) =>
        {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);            
            
            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    
    GuardarNegocio = a =>
    {
        this.setState({preloader:true});

        let access_token = localStorage.getItem('access_token'); 
        if(access_token !== null && access_token !== "")
        {            
            let nombre = this.nombre.current.value;
            let descripcion = this.descripcion.current.value;
            let telefono = this.telefono.current.value;
            let foto = this.state.setBaseImage;
            let ciudad = this.ciudad.current.value;
            let direccion = this.direccion.current.value;
            let categoria_id_1 = this.categoria_id_1.current.value;
            if(
                    nombre !== '' 
                && descripcion !== ''
                && telefono !== ''
                && foto !== ''
                && ciudad !== ''
                && direccion !== ''
                && categoria_id_1 !== ''
            )
            {
                NuevoNegocioS({
                    token:access_token, nombre : nombre, descripcion : descripcion, 
                    telefono : telefono, foto : foto, ciudad : ciudad, direccion : direccion, categoria_id_1:categoria_id_1               
                }).then((respuesta) =>
                {        
                    if(respuesta.cod_error === 200)
                    {                        
                        this.setState({mensaje:respuesta.message,buttonDisabled:true});  
                    }
                    else
                    {
                        this.setState({mensaje:"Ocurrió un error al cargar tu negocio!"});
                        
                    }                     
                    this.setState({preloader:false});
                })          
            }
            else
            {
                this.setState({mensaje:'Datos vacíos, verifique!!'});
                this.setState({preloader:false});
            }
        }
        else
        {
            this.setState({mensaje:'No es posible crear un negocio sin entrar!'});
            this.setState({preloader:false});
        }
    }

    render()
    {
        return(
            <Fragment>                                   
                <NavBar/>
                <div className="site-section">
                    <div className="container contenedor">                         
                        <div className="row">
                            <div className="col-md-12 col-lg-8 mb-5 nuevoNegocio">   
                             
                                <div className="col-md-12 text-center">
                                    <h2 className="tituloEditarNegocio"> Nuevo Negocio </h2>                                   
                                </div>                                          
                                <form className="p-5">

                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="font-weight-bold" htmlFor="nombreNegocio">¡Indicanos el nombre de tu Negocio!</label>
                                        <input type="text" id="nombreNegocio" maxLength="50" className="form-control" ref={this.nombre} placeholder="¡Por este nombre te van a buscar tus clientes!"/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="message">Comentanos una descripcion de tu negocio</label> 
                                        <textarea name="message" id="message" cols="30" rows="5" ref={this.descripcion} className="form-control" placeholder="Aca podes cargar si hay promos o eventos, ej: El mejor lugar para disfrutar en familia y amigos este viernes, no te pierdas la promo 2x1 de muzza"></textarea>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="telefono">Un telefono de contacto</label>
                                        <input type="tel" id="telefono" maxLength="20" className="form-control" ref={this.telefono} placeholder="ej: 099999999-098898989"/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="ciudad">La ciudad de tu negocio</label>
                                        <select name="ciudad" id="ciudad" ref={this.ciudad} className="form-control">
                                            <option defaultValue disabled value="--">¡Aparecerá tu negocio cuando los usuarios busquen por tu ciudad!</option>
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
                                        <label className="font-weight-bold" htmlFor="categoria">La categoría de tu negocio</label>
                                        <select name="categoria" id="categoria" ref={this.categoria_id_1} className="form-control">
                                            <option defaultValue disabled value="--">¡Aparecerá tu negocio cuando los usuarios busquen por tu categoría!</option>
                                            {this.props.todosLasCategorias.map((laCategoria,id) => <option key={id} value={laCategoria.id}>{laCategoria.nombre}</option>)}   
                                        </select>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="direccion">¿Cuál es la Direccion de tu negocio?</label>
                                        <input type="text" id="direccion" maxLength="50" className="form-control" ref={this.direccion} placeholder="¡Para que los clientes lleguen a tu negocio!"/>
                                        </div>
                                    </div> 

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="foto">Agregá una foto de tu negocio</label>
                                        <input type="file" id="foto" accept="image/png, .jpeg, .jpg" className="form-control" onChange={(e) => {this.uploadImage(e);}}/>
                                        </div>
                                    </div> 

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                        <input type="button" value="Guardar" className="btnGuardar btn btn-primary btn-lg" disabled={this.state.buttonDisabled} onClick={(event) => this.GuardarNegocio(event)} />
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
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,
        todosLasCategorias:state.todosLasCategorias       
    };
}
export default connect(mapStateToProps)(NuevoNegocio);