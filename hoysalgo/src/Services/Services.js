const base = "https://api.hoysalgo.uy/api/";

const LoginS = (userData)=>
{
    const {email} = userData;
    const {password}= userData; 

    let APIURL = base + "usuario/login?login";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest"
        },  
        body:JSON.stringify({ email: email, password: password })

    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    }); 
}
export{LoginS}

const RegistroS = (userData)=>
{
    const {nombre} = userData;
    const {email} = userData;
    const {password}= userData; 

    let APIURL = base + "usuario/registro?registro";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest"
        },  
        body:JSON.stringify({nombre:nombre, email: email, password: password })

    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
            else{reject ("Ya hay un usuario registrado con ese nombre");}
        })
    })
}
export{RegistroS}

const AgregarQuitarFavoritoS = (data)=>
{
    const {token} = data;
    const {negocio_id} = data;

    let APIURL = base + "usuario/agregarQuitarFavorito?agregarQuitarFavorito";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
            'Authorization' : `Bearer ${token}`
        },  
        body:JSON.stringify({negocio_id:negocio_id})

    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{AgregarQuitarFavoritoS}

const lasCategorias = aa =>
{
    let APIURL = base + "categorias?categorias";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest"
        }
    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{lasCategorias}

const todosLosNegocios = aa =>
{
    let APIURL = base + "todosLosNegocios?todosLosNegocios";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest"
        }
    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{todosLosNegocios}

const NuevoNegocioS = (userData)=>
{
   const {token} = userData;
   const {nombre} = userData;
   const {descripcion} = userData;
   const {telefono} = userData;
   const {foto} = userData;
   const {ciudad} = userData;
   const {direccion} = userData;
   const {categoria_id_1} = userData;
   
    let APIURL = base + "usuario/altaNegocio?altaNegocio";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
            'Authorization' : `Bearer ${token}`
        },  
        body:JSON.stringify({nombre : nombre, descripcion : descripcion, telefono : telefono, foto : foto, ciudad : ciudad, direccion : direccion, categoria_id_1:categoria_id_1})

    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    }); 
}
export{NuevoNegocioS}

const misFavoritos = (token)=>
{
    let APIURL = base + "usuario/misFavoritos?misFavoritos";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
            'Authorization' : `Bearer ${token}`
        }
    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    }); 
}
export{misFavoritos}

const ActualizarNegocio = (userData)=>
{
   const {token} = userData;
   const {id_negocio} = userData;
   const {descripcion} = userData;
   const {telefono} = userData;
   const {ciudad} = userData;
   const {direccion} = userData;
   const {categoria_id_1} = userData;
   
    let APIURL = base + "usuario/actualizarNegocio?actualizarNegocio";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
            'Authorization' : `Bearer ${token}`
        },  
        body:JSON.stringify({id_negocio:id_negocio,descripcion:descripcion, telefono:telefono, ciudad:ciudad, direccion:direccion, categoria_id_1:categoria_id_1})

    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    }); 
}
export{ActualizarNegocio}

const SinCupos = (negocioData)=>
{
    const {token} = negocioData;
    const {negocio_id} = negocioData;

    let APIURL = base + "usuario/negocioDisponible?negocioDisponible";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
            'Authorization' : `Bearer ${token}`
        },  
        body:JSON.stringify({negocio_id:negocio_id})

    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    }); 
}
export{SinCupos}

const misNegocios = token =>
{
    let APIURL = base + "usuario/misNegocios";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
            'Authorization' : `Bearer ${token}`
        }
    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}


export{misNegocios}
const misDatos = token =>
{
    let APIURL = base + "usuario/misdatos";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
            'Authorization' : `Bearer ${token}`
        }
    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{misDatos}

const enviarDatos = (data) =>
{
    let APIURL = base + "usuario/actualizarMisDatos";  
    let {nombre,telefono,ciudad,direccion}=data;

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
            'Authorization' : `Bearer ${data.token}`
        },
        body:JSON.stringify({nombre : nombre, telefono : telefono, ciudad : ciudad, direccion : direccion})
    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{enviarDatos}

const EnviarMailS = (dataContacto) =>
{
    const {nombre} = dataContacto;
    const {email} = dataContacto;
    const {asunto} = dataContacto;
    const {mensaje} = dataContacto;

    let APIURL = base + "mailDeContacto";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest"            
        },  
        body:JSON.stringify({nombre : nombre, email : email, asunto : asunto, mensaje : mensaje})

    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{EnviarMailS}

const confirmarCuenta = (idUsuario) =>
{    
    let APIURL = base + "cambiarEstado";  
    
    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest"            
        },  
        body:JSON.stringify({user_id : idUsuario})

    }).then(response =>{ 
        return new Promise((resolve)=>
        {           
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{confirmarCuenta}

const mailCambioContrasenia=(email)=>
{
    let APIURL = base + "mailDeContrasena?mailDeContrasena"; 
    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
        },
        body:JSON.stringify({email : email})
    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{mailCambioContrasenia}

const cambiarContrasenia=(data)=>{
    let APIURL = base + "usuario/cambiarContrasena";  

    const {token}= data;
    const {email}= data;
    const {password}= data;

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest"
        },
        body:JSON.stringify({token:token , email:email,password:password})
        
    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{cambiarContrasenia}


const misReservas = token =>
{
    let APIURL = base + "usuario/misReservas";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
            'Authorization' : `Bearer ${token}`
        }
    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{misReservas}

const reservasEnMisNegocios = token =>
{
    let APIURL = base + "usuario/reservasEnMisNegocios";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
            'Authorization' : `Bearer ${token}`
        }
    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{reservasEnMisNegocios}

const nuevaReserva = reservaData =>
{
    const {token} = reservaData;
    const {negocio_id} = reservaData;
    const {comentario} = reservaData;
    const {fecha_hora} = reservaData;
    const {cant_personas} = reservaData;

    let APIURL = base + "negocio/nuevaReserva";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
            'Authorization' : `Bearer ${token}`
        },  
        body:JSON.stringify({negocio_id:negocio_id,comentario:comentario,fecha_hora:fecha_hora,cant_personas:cant_personas})

    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{nuevaReserva}

const cambiarEstadoReserva = reservaData =>
{
    const {token} = reservaData;
    const {id_reserva} = reservaData;
    const {estado_nuevo} = reservaData;

    let APIURL = base + "reserva/cambiarEstado";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest",
            'Authorization' : `Bearer ${token}`
        },  
        body:JSON.stringify({id_reserva:id_reserva,estado_nuevo:estado_nuevo})

    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{cambiarEstadoReserva}


const menuDeNegocio = negocio_id =>
{
    let APIURL = base + "menuDeNegocio";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest"
        },  
        body:JSON.stringify({negocio_id:negocio_id})

    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{menuDeNegocio}

const eventoDeNegocio = negocio_id =>
{
    let APIURL = base + "eventosDeNegocio";  

    return fetch(APIURL, 
    {
        method:"POST",
        headers:{
            'Cache-control':'no-cache',
            "Content-Type":"application/json",
            "X-Requested-With":"XMLHttpRequest"
        },  
        body:JSON.stringify({negocio_id:negocio_id})

    }).then(response =>{
        return new Promise((resolve,reject)=>
        {
            if(response.status===200)
            {
                resolve (response.json());
            }
        })
    })
}
export{eventoDeNegocio}
