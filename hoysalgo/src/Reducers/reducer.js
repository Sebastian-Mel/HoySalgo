import estadoInicial from "../estadoInicial";

function reducer(state = estadoInicial,action)
{   
    
    switch(action.type)
    {
        
        case "Login":
            return {...state,mostrar:'Login'};       
        case "Inicio":
            return {...state,mostrar:'Inicio'};
        case "Contacto":
            return {...state,mostrar:'Contacto'};
        case "NuevoNegocio":
            return {...state,mostrar:'NuevoNegocio'};
        case "EditarNegocio":
            return {...state,mostrar:'EditarNegocio',negocio:action.payload};
        case "Reservas":
            return {...state,mostrar:'Reservas'};
        case "DetalleNegocio":
            return {...state,mostrar:'DetalleNegocio',negocioSeleccionado:action.payload};
        case "CambioContrasenia":
            return {...state,mostrar:'CambioContrasenia'};
        case "MisDatos":
            return {...state,mostrar:'MisDatos'};  
        case "NegociosDeNombre":
            return {...state,mostrar:'NegociosDeCategoria',nombre:action.payload};
        case "NegociosDeCiudad":
            return {...state,mostrar:'NegociosDeCategoria',ciudad:action.payload};
        case "NegociosDeCategoria":
            return {...state,mostrar:'NegociosDeCategoria',categoria:action.payload};
        case "CargarCategorias":
            return {...state,todosLasCategorias:action.payload}
        case "CargarNegocios":
            return {...state,todosLosNegocios:action.payload}
        case "cargarElNegocio":
            let negocio=state.todosMisNegocios.find(negocio=>negocio.id===action.id);
            return{...state,negocio:negocio}
        case "CargarMisNegocios":
            return {...state,todosMisNegocios:action.payload}
        case "CargarMisReservas":
            return {...state,todasMisReservas:action.payload}  
        case "CargarReservasEnMisNegocios":
            return {...state,reservasDelNegocio:action.payload}
            
            
        default:
            return state;
    }
}

export default reducer; 