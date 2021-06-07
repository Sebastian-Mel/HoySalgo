import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal,Container } from "react-bootstrap";
import "./Login.css"
import {mailCambioContrasenia} from "../../Services/Services"
import Loading from '../PreLoader/Loading'

class ModalMenu extends Component
{
  constructor()
  {  
      super();       
      this.state = {  
          mensaje:'',        
          preloader:false,
          email:"",
          buttonDisabled:false
      }

  }
  handleEnviarMailContrasenia=(e)=>{
    
    let {email} = this.state;
    this.setState({preloader:true,buttonDisabled:true}); 
    
    mailCambioContrasenia(email).then((respuesta) =>
    {              
        if(respuesta.codigo === '200')
        {
            this.setState({mensaje:"Te hemos enviado un mail, por favor sigue las instrucciones.",preloader:false})
        }
        else
        {
            this.setState({mensaje:"Ocurrio un error, contacta un administrador!",preloader:false,buttonDisabled:true})
        }
    })
}

handleEmailChange = e =>
{
    e.preventDefault(); 
    this.setState({
        email: e.target.value,
    });
};

  render() {
        return (            
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter contenedorModalTerminos" dialogClassName="modalTerminos">                
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                        Terminos y condiciones
                  </Modal.Title>
                </Modal.Header>              
                <Modal.Body className="show-grid">               
                  <Container> 
                    <div className="terminos">
                        <h1>Política de Privacidad de Hoy Salgo</h1>
                        <h2><u>Recolección y uso de la información</u></h2>        
                        <h3 className="indentado">1.Información Personal</h3>
                        <p>
                            Hoy Salgo recolecta la información directamente a través del Usuario; cuando el Usuario efectúa una reserva la página web de Hoy Salgo o en la página web de algún afiliado o de un sitio adherido, cuando llama o escribe un email a Hoy Salgo. Esto suele incluir el nombre del Usuario, todos sus detalles de contacto y cualquier otra información. Hoy Salgo puede usar cookies y otras tecnologías para tener seguimiento de sus interacciones con la página web de Hoy Salgo y sus Servicios para ofrecerle una experiencia personalizada.
                        </p>    
                        <h3 className="indentado">2.Uso de la información</h3>
                        <p>
                            Hoy Salgo usa la información del Usuario para poder responder y cumplir los requerimientos en sus productos y servicios. Esto incluye enviarle al Usuario mensajes automáticos relacionados con sus futuras o recientes reservas en servicios asociados con Hoy Salgo, como confirmaciones, recordatorios, invitaciones para completar comentarios o puntuaciones. Usted no podrá desuscribirse de todo el servicio de mensajes, eventualmente podemos enviarle solamente noticias y/o ofertas. Hoy Salgo utiliza información sobre el Usuario para identificar otros servicios que pueden ser beneficiosos para usted, y para informarle de los mismos u otros temas de interés a discreción de Hoy Salgo. Hoy Salgo utiliza la información sobre usted para asistirse con su administración interna y para protegerlo a usted y a Hoy Salgo de fraudes. Hoy Salgo no comparte ninguna información sobre usted con nadie, más que la declarada en este Acuerdo, los Términos y Condiciones, la requerida por la ley, o la necesaria para gestionar la relación entre el Usuario y Hoy Salgo. Internet no es un ambiente seguro. Es responsabilidad del Usuario toda la información que este proporciona a Hoy Salgo.
                        </p>
                        <h2><u>Otra información que recolecta Hoy Salgo</u></h2>
                        <h3 className="indentado">3.Información Estadística</h3>
                        <p>
                            Cuando usted visita el sitio web u otras plataformas de Hoy Salgo, Hoy Salgo recopila información general sobre su visita con fines estadísticos.
                        </p>
                        <h3 className="indentado">4.Cookies</h3>
                        <p>
                            Hoy Salgo podrá usar "cookies" para almacenar las preferencias del Usuario, así como recolectar información sobre cómo el Usuario visita y accede a las páginas web y plataformas de Hoy Salgo. Hoy Salgo recolecta información de las páginas web visitadas por los Usuarios para continuar mejorando en los Servicios que proporciona. Las cookies son porciones de información que la página web de Hoy Salgo transfiere al disco rígido de el dispositivo del Usuario con propósitos de seguimiento. Las cookies pueden hacer la página más útil gracias a que almacenan información sobre las preferencias del Usuario en un sitio particular. El uso de cookies es estándar en la industria y muchos sitios web las utilizan para proveer herramientas útiles para el Usuario. Usted puede borrar las cookies de su dispositivo en cualquier momento; sin embargo, esto borrará todas las cookies y no únicamente las asociadas con Hoy Salgo. Usted puede borrar individualmente una cookie cliqueando la opción de borrar cuando la propiedad aparezca en su lista. 
                        </p>
                        <h3><u>Compartir información</u></h3>
                        <p>
                        Para ofrecerle algunos de nuestros Servicios, es posible que necesitemos 
                        compartir información con algunos terceros, en las siguientes circunstancias: 
                        </p>
                        <ul>
                            <li>
                                <u>Negocios</u>. Compartimos su información con nuestros negocios 
                                asociados para permitirles hacer y administrar su reservación en 
                                un negocio y para ocuparse de las quejas o las disputas 
                                relacionadas. Al hacer una reservación, usted podrá elegir recibir
                                comunicaciones de marketing del negocio interesado. Si usted 
                                otorga su consentimiento para recibir comunicaciones de marketing 
                                del negocio, entonces el negocio es responsable de todo el
                                procesamiento de la información que le proporcionemos.
                            </li>
                            <li>
                                Compartimos información con ciertos proveedores que usamos para facilitar 
                                nuestros Servicios, como por ejemplo para ayudar con las transacciones, 
                                como en caso de que usted haga una reservación
                            </li>            
                            <li>
                                <u>Socios comerciales.</u> Es posible que compartamos información sobre usted,
                                sus dispositivos y su uso de nuestros Servicios con nuestros confiables 
                                socios comerciales. Por ejemplo, es posible que compartamos información 
                                para poder ofrecerle contenido relevante o para facilitar el pago de su 
                                comida en un restaurante, en caso que corresponda. Esta información compartida 
                                generalmente cumple con acuerdos escritos que incluyen confidencialidad, privacidad 
                                y obligaciones de seguridad; sin embargo, tenga en cuenta que Hoy Salgo no controla 
                                las prácticas de privacidad de estos socios comerciales externos.
                            </li>
                            <li>
                                <u>Sitios de medios sociales.</u> Cuando usted usa nuestros Servicios
                                y elige compartir información con sitios de medios sociales de 
                                terceros, la información que comparta se regirá por las políticas 
                                de privacidad de esos sitios de medios sociales y la configuración
                                de privacidad que haya establecido con los sitios web de esos medios
                                sociales. 
                            </li>
                            <li>
                                <u>Redes publicitarias.</u> Podremos recolectar y compartir información 
                                sobre sus intereses con redes publicitarias.
                            </li>
                            <li>
                                <u>Otros terceros, como los sitios web de referencia.</u> Los terceros 
                                también pueden ayudarnos en la recolección de datos; por ejemplo, 
                                operando funciones de nuestro sitio web o facilitando el envío de 
                                publicidades en línea adaptadas a sus intereses. Es posible que 
                                compartamos segmentos de públicos y otra información con terceros 
                                que usen esa información para enviarle publicidad personalizada. 
                                Los terceros solo pueden recolectar o acceder a información según 
                                sea necesario para cumplir con sus funciones permitidas.
                            </li>
                            <li>
                                <u>Obligaciones Legales y colaboración con las entidades estatales.</u>
                                Hoy Salgo puede ser requerida por ley a proporcionar información
                                que usted nos proveyó. También podemos compartir información de 
                                alguien que cause una amenaza a los intereses de Hoy Salgo (como un 
                                fraude a un cliente) o que su actividad pueda causar daños a terceros 
                                u Hoy Salgo. Adicionalmente, a su sola discreción Hoy Salgo podrá 
                                proporcionar todo tipo de información sobre los Usuarios y los Servicios
                                proporcionados a los Usuarios a cualquier entidad estatal, para que esta
                                pueda llevar un seguimiento de los Servicios gozados por los Usuarios.
                            </li>
                        </ul>
                        <p>
                            Las versiones de los sistemas operativos de ciertos dispositivos le permiten 
                            optar por dejar de compartir cierto tipo de información, incluidas ciertas 
                            redes publicitarias. Revise la configuración de su dispositivo si desea 
                            limitar tal seguimiento.
                        </p>
                        <h3><u>General</u></h3>
                        <p>
                            Si en algún momento usted desea consultar acerca de la información personal 
                            que almacena Hoy Salgo por favor póngase en contacto con nuestro servicio de 
                            atención al cliente por email a info@hoysalgo.uy
                        </p>
                        <h3><u>Cómo protegemos su Información</u></h3>
                        <p>
                            Para asegurar la confidencialidad de su información personal, Hoy Salgo aplica tecnologías líderes en seguridad y procesos que son regularmente revisados y actualizados. Le damos al Usuario la posibilidad de ejercitar los derechos de acceso, rectificación, oposición y cancelación de los datos personales recogidos por Hoy Salgo. Dichos derechos podrán ser ejercitados por el Usuario, y en su caso quien lo represente, mediante solicitud escrita y firmada dirigida a Hoy Salgo conteniendo los siguientes datos: nombre y apellido del Usuario, domicilio a efectos de notificaciones, fotocopia de la Cédula de Ciudadanía o Pasaporte, y petición en que se concreta la solicitud. En el caso de representación, deberá probarse la misma mediante documento fehaciente y legalmente vinculante.
                        </p>
                <hr/>
                <hr/>
                        <h1>Términos de Uso de Hoy Salgo</h1>
                        <p>
                            Los presentes Términos de uso de Hoy Salgo (este <b>“Acuerdo”</b>) se aplican al acceso 
                            o uso que usted haga de los sitios web, sitios móviles y aplicaciones de Hoy Salgo 
                            (denominados en conjunto, los <b>“Sitios de Hoy Salgo”)</b>, así como a los contenidos, 
                            funciones y servicios (los <b>“Servicios”</b>) que Hoy Salgo pone a su disposición.
                        </p>

                        <p>
                            En este Acuerdo, <b>“Hoy Salgo”</b> y <b>“nosotros”</b> se refieren a la empresa de Hoy Salgo
                            que le brinda los Servicios y con quien usted celebra este Acuerdo. Los términos
                            <b>“Usuario”</b> y <b>“usted”</b> se refieren a cualquier usuario de los Servicios. 
                            Este Acuerdo incorpora las políticas, procedimientos así como los términos y 
                            condiciones generales de Hoy Salgo para el uso de los Servicios que son nombrados 
                            o a los que se hace referencia por medio de enlaces en este Acuerdo (denominados
                            en conjunto, las <b>“Políticas de Hoy Salgo”</b>).
                        </p>
                        <p>
                            Al usar o acceder a los Servicios, o al hacer clic en <b>“acepto”</b> o <b>“apruebo”</b> 
                            este Acuerdo, (1) usted admite que ha leído, comprende y acepta obligarse
                            por lo dispuesto en este Acuerdo y (2) usted declara y garantiza 
                            que es mayor de edad y que la ley no le prohíbe usar o acceder a los 
                            Servicios.
                        </p>
                        <p>
                            Hoy Salgo podrá actualizar o modificar este Acuerdo (incluyendo cualquier 
                            Política de Hoy Salgo) en cualquier momento. Usted acepta revisar este 
                            Acuerdo con regularidad. Usted tiene la libertad de decidir si acepta o 
                            no una versión modificada de este Acuerdo, pero es necesario aceptarlo con 
                            sus modificaciones para que usted pueda seguir utilizando los Servicios. 
                            Tiene que hacer clic en “acepto” o “apruebo” para indicar su aceptación de 
                            las versiones modificadas de este Acuerdo. En caso de no aceptar los términos 
                            de este Acuerdo o de sus versiones modificadas, usted deberá concluir el uso 
                            que hace de los Servicios, en cuyo caso ya no tendrá acceso a su Cuenta (según 
                            dicho término se define más adelante). Salvo lo expresamente dispuesto en 
                            contrario por Hoy Salgo, cualquier uso de los Servicios (por ejemplo, el uso 
                            de los Servicios de Reservaciones (según dicho término se define más adelante),
                            los Servicios de Listas de Espera (según dicho término se define más adelante),
                            o cualquier otro servicio proporcionado por Hoy Salgo, está sujeto a la versión 
                            vigente de este Acuerdo al momento del uso.
                        </p>
                        <h2>Parte I: Servicios de reservas</h2>
                        <p>
                            <b>1.Reservas en servicios asociados con Hoy Salgo.</b> Hoy Salgo pone a disposición del Usuario servicios de reservaciones en servicios asociados (los “Servicios de Reservación”) y servicios de listas de espera (los “Servicios de Listas de Espera”) mediante los Sitios de Hoy Salgo, con el objetivo de asistir al Usuario a asegurar reservaciones, o incluirlo en una lista de espera en servicios participantes de terceros. En respuesta a la solicitud por internet de un Usuario para obtener una reservación en un servicio asociado o incluirse en una lista de espera por medio de los Sitios de Hoy Salgo, Hoy Salgo se contacta con el servicio asociado para gestionar la reservación o lista de espera, según corresponda. La disponibilidad de las reservaciones, el tiempo de espera estimado o el lugar en la fila en una lista de espera se determinan al momento de la solicitud del Usuario y según la información que el servicio asociado le brinda a Hoy Salgo. Una vez que el Usuario efectúa la reservación o la solicitud de lista de espera por medio de los Sitios de Hoy Salgo, Hoy Salgo proporcionará al Usuario la confirmación de la reservación o la situación de la lista de espera, vía correo electrónico u otros mensajes electrónicos, según lo haya acordado el usuario. Al usar los Servicios de Reservación o los Servicios de Lista de Espera, el Usuario acepta recibir las confirmaciones de reservación o lista de espera, actualizaciones, modificaciones y/o cancelaciones por correo electrónico u otros mensajes electrónicos.
                        </p>
                        <p>
                            <b>2. Política de No Presentación.</b> Hoy Salgo se ha propuesto brindar servicios de calidad superior a los Usuarios y Servicios asociados. Para ayudarnos a mantener un servicio de alto nivel a los Servicios asociados y sus clientes, los Usuarios deberán cancelar las reservaciones que no puedan cumplir, por lo menos 30 minutos antes de las mismas. Usted puede cancelar su reservación por medio de los Sitios de Hoy Salgo o llamando directamente al Servicio asociado. Hoy Salgo no se hará responsable por cualquier cargo efectuados a la cuenta de su tarjeta de débito o crédito por no cancelar su reservación de conformidad con la política de cancelación del servicio asociado.
                        </p>
                        <p>
                            En el evento de que usted no pueda cumplir con su reservación y no la cancele al menos con 30 minutos de antelación, Hoy Salgo le enviará un correo electrónico informándole que nuestros registros indican que usted no se ha presentado. Sin perjuicio de ello, el Restaurante u otro servicio asociado con Hoy Salgo podrá, a su exclusiva discreción, otorgar un período de tolerancia pasado el horario de la reservación. Al llegar al Restaurante u otro servicio asociado con Hoy Salgo, el Usuario tiene la responsabilidad de notificar al recepcionista que tiene una reservación. Al usar los Servicios de Reservación, el Usuario acepta recibir notificaciones por correo electrónico relacionadas con su falta de presentación, después de que se informe que no ha cumplido con su reservación, aunque eso no haya ocurrido. Su Cuenta será suspendida si no se presenta a cuatro reservaciones dentro de un período de 12 meses.  En caso de recibir por error un correo electrónico notificando que no se ha presentado, deberá comunicar la situación a Hoy Salgo para que la misma sea revisada y evitar se compute para la suspensión de su cuenta. El Usuario acepta que Hoy Salgo tomará todas las decisiones definitivas de no presentación a su exclusiva discreción.
                        </p>
                        <p>
                            En caso de que Usted desee retirarse de una lista de espera en la que se ha incluido mediante los Servicios de Lista de Espera, puede hacerlo por internet mediante los Sitios de Hoy Salgo o llamando directamente al Restaurante u otro servicio asociado con Hoy Salgo. En caso de no presentarse en el Restaurante u otro servicio asociado con Hoy Salgo en el horario convenido, el servicio asociado podrá pasar su lugar en la lista de espera a otros clientes o removerlo por completo de la lista de espera.
                        </p>
                        <p>
                            <b>3. Lineamientos de Uso.</b> El Usuario acepta utilizar los Servicios de Reservaciones o los Servicios de Lista de Espera únicamente para hacer reservaciones o incluirse en listas de espera en servicios asociados con Hoy Salgo y luego cumplir con dichas reservaciones o solicitudes de listas de espera, llegando a los servicios asociados a tiempo, así como ordenando y pagando lo consumido. Asimismo, el Usuario acepta no hacer más de una reservación ni incluirse en más de una lista de espera para su uso personal durante una comida (por ejemplo, almuerzo, cena, etc.). Está prohibida la reventa o el intento de reventa de reservaciones o de lugares en listas de espera y dichas conductas darán lugar, entre otras cosas, a la cancelación de sus reservaciones, retiro   de la lista de espera o la terminación de su acceso a los Servicios.
                        </p>        
                        <h2>Parte II: Términos para Todos los Servicios</h2>
                        <p>
                            <b>4. Política de privacidad.</b> Hoy Salgo está comprometido a ayudarlo a salvaguardar su privacidad en internet. Sírvase revisar la política de privacidad de Hoy Salgo para conocer los detalles de cómo reunimos, usamos y divulgamos la información relacionada a los Servicios.
                        </p>
                        <p>
                            <b>5. Su Cuenta.</b> Usted puede (pero no está obligado) crear una cuenta con Hoy Salgo mediante los Sitios de Hoy Salgo (la “Cuenta”), para usar los Servicios de Reservaciones, Listas de Espera o cualquier otro servicio proporcionado por Hoy Salgo. Cuando se registre para obtener una Cuenta debe proporcionar datos verdaderos, exactos, actuales y completos sobre usted en el formulario de registro de Hoy Salgo (“Mis datos”). También acepta actualizar de inmediato los Datos de Registro para mantenerlos verdaderos, exactos, actuales y completos. Usted es el único responsable del mantenimiento de la confidencialidad de su Cuenta y de la información que esta contiene, y salvo que la ley pertinente disponga lo contrario, usted es el único responsable del uso de su Cuenta, esté o no autorizada por usted. Usted acepta notificar de inmediato a Hoy Salgo sobre cualquier uso no autorizado de su Cuenta o cualquier otra violación de seguridad relacionada con el uso que usted hace de los Servicios.
                        </p>
                        <p>
                            <b>6. Comunicaciones de Hoy Salgo.</b>  Si usted utiliza nuestros Sitios y Servicios, Hoy Salgo podrá comunicarse con usted mediante mensajes electrónicos, incluyendo correos electrónicos, mensajes de texto/SMS o notificaciones de envío automático por dispositivo móvil, de conformidad con nuestra política de privacidad.
                        </p>
                        <p>
                            <b>7. Requisitos técnicos.</b> Para usar los Servicios necesita contar con acceso a internet mediante su computadora o dispositivo móvil. Usted es responsable de todos los cargos por la ocupación de datos por su móvil o por mensajes de texto que resulten del uso que usted haga de los Servicios, incluyendo las notificaciones que los Servicios proporcionan. Para usar los servicios por mensajes de texto, usted debe mantener una cuenta activa con un transportador de comunicaciones electrónicas por medio de dispositivos móviles y no podrá usar un teléfono celular de prepago para acceder a dichos servicios por mensajes de texto. Hoy Salgo no garantiza que los Servicios sean compatibles con todos los dispositivos ni que puedan ser ejecutados por todos los dispositivos móviles. Usted podría necesitar tener habilitado JavaScript (o tecnologías similares) para usar el Sitio de Hoy Salgo y algunas funciones y partes del Sitio de Hoy Salgo (incluyendo, sin limitarse, a hacer, modificar o cancelar reservaciones) podrían no estar accesibles si JavaScript no está habilitado.
                        </p>
                        <p>
                            <b>8. Modificaciones a los Servicios.</b> Hoy Salgo se reserva el derecho, a su exclusiva discreción, de modificar los Servicios en cualquier momento y sin previo aviso, incluyendo, sin limitarse, a eliminar, agregar o modificar partes de los Sitios de Hoy Salgo, Restaurantes u otros servicios asociados con Hoy Salgo y/o Proveedores. Hoy Salgo no será responsable ante usted por ninguna de las acciones anteriormente descritas. En caso de que usted objete alguno de dichos cambios, su único recurso será dejar de usar los Servicios. El uso ininterrumpido de los Servicios después de esos cambios indicará su reconocimiento de los mismos y su satisfacción con todos los Servicios.
                        </p>
                        <p>
                            <b>9. Derechos de propiedad intelectual y otorgamiento de derechos al Usuario.</b> Las funciones, información y materiales proporcionados y descriptos mediante los Servicios están protegidos por las leyes de derechos de autor, marcas registradas, patentes y otras relacionadas con la propiedad intelectual. Todos los textos, contenidos gráficos, videos, datos y demás contenidos que estén disponibles mediante los Servicios (denominados en conjunto, los “Contenidos de Hoy Salgo”) son proporcionados al Usuario por Hoy Salgo, sus socios o licenciantes, únicamente como soporte del uso permitido de los Servicios por parte del Usuario. Hoy Salgo podrá modificar los Contenidos de Hoy Salgo en cualquier momento a su exclusiva discreción. Salvo por lo dispuesto en contrario expresamente en el presente, no se otorga licencia alguna al Usuario para cualquier otro fin y cualquier otro uso de los Servicios o de los Contenidos de Hoy Salgo por el Usuario constituirá una violación sustancial de este Acuerdo. Hoy Salgo y sus socios o licenciantes conservan todos los derechos respecto de los Servicios y los Contenidos de Hoy Salgo, así como todas las patentes, marcas registradas, derechos de autor, derechos sobre los esquemas de trazado de circuitos integrados, secretos comerciales y otros derechos de propiedad intelectual relacionados. No se otorga licencia, derecho o participación alguna en cualquier marca registrada de Hoy Salgo o de cualquier tercero en virtud de este Acuerdo.
                        </p>
                        <p>
                            <b>10. Licencia de aplicaciones.</b> Sujeto a los términos y condiciones de este Acuerdo, Hoy Salgo le otorga al Usuario una licencia no exclusiva, intransferible y revocable para usar las aplicaciones de Hoy Salgo en dispositivos móviles, únicamente bajo la forma de código, en los dispositivos móviles compatibles del Usuario y sólo como soporte del uso permitido de los Servicios del Usuario.
                        </p>
                        <p>
                        <b>11. Restricciones del uso.</b> Los Servicios y Contenidos de Hoy Salgo se ofrecen únicamente para uso personal del Usuario y para los fines descritos en este Acuerdo. Está prohibido cualquiera y todos los otros usos. Hoy Salgo expresamente se reserva todos los derechos y recursos conforme a las leyes aplicables. Hoy Salgo se reserva el derecho, a su exclusiva discreción, de rehusarse a brindar servicios, terminar Cuentas, eliminar o editar contenidos, cancelar reservaciones o negar acceso a los Servicios. Usted acepta no hacer lo siguiente (y no permitir que los terceros lo hagan): (1) usar enlace profundo, robot, spider, scraper u otro dispositivo, proceso o medio automático o manual para acceder, copiar, buscar o controlar alguna parte de los Servicios o de los Contenidos de Hoy Salgo, salvo que Hoy Salgo lo autorice expresamente; (2) tomar medidas que impongan o puedan imponer (según la exclusiva consideración de Hoy Salgo) una carga desproporcionada o excesivamente grande en los Servicios o en la infraestructura de Hoy Salgo; (3) utilizar dispositivos, software o rutas que interfieran o intenten interferir con la funcionalidad de los Servicios; (4) alquilar, rentar, copiar, facilitar acceso o sublicenciar una parte de los Servicios o de los Contenidos de Hoy Salgo a terceros; (5) usar alguna parte de los Servicios o de los Contenidos de Hoy Salgo para proporcionar o incorporar alguna parte de los Servicios o de los Contenidos de Hoy Salgo en algún producto o servicio prestado a un tercero; (6) hacer ingeniería inversa, descompilar, desarmar o, en su defecto, procurar obtener el código fuente o interfaces de programas de aplicaciones (API, por sus siglas en inglés) no públicos para los Servicios, salvo que la ley aplicable lo permita expresamente (y, en ese caso, sólo mediante previo aviso a Hoy Salgo); (7) modificar los Servicios o los Contenidos de Hoy Salgo o crear un producto derivado de cualquiera de los anteriormente descritos; (8) eliminar o cubrir los avisos sobre propiedad exclusiva o de otro tipo incluidos en los Servicios o en los Contenidos de Hoy Salgo; (9) usar los Servicios o los Contenidos de Hoy Salgo con fines ilegales; o (10) difundir públicamente información sobre el funcionamiento de los Servicios o de los Contenidos de Hoy Salgo, o acceder o usar los Servicios o los Contenidos de Hoy Salgo para realizar análisis competitivos o evaluaciones comparativas.
                        </p>
                        <p>
                            <b>12. Control de exportación.</b> Usted no puede usar, exportar ni reexportar los Sitios de Hoy Salgo ni ningún otro aspecto de los Servicios (ni ninguna copia o adaptación de lo precedente) en violación de la ley aplicable.
                        </p>
                        <p>
                            <b>13. Terminación.</b> Hoy Salgo podrá suspender su capacidad de usar cualquiera o todos los elementos de los Servicios, o podrá terminar este Acuerdo con validez inmediata, sin previo aviso ni explicación. Sin perjuicio de lo anterior, Hoy Salgo podrá suspender su acceso a los Servicios si considera que usted ha violado alguna parte de este Acuerdo (incluidas las Políticas de Hoy Salgo). Después de una suspensión o terminación, se le podrá otorgar o no permiso para usar los Servicios o restablecer una cuenta. Usted acepta que Hoy Salgo no será responsable ante usted por la terminación de este Acuerdo ni por los efectos de ninguna terminación de este Acuerdo. Usted siempre tendrá la opción de discontinuar su uso de los Servicios en cualquier momento. Usted entiende que la terminación de su Cuenta podrá incluir la eliminación del contenido almacenado en ella, por lo que Hoy Salgo no tendrá ningún tipo de responsabilidad en absoluto.
                        </p>
                        <p>
                        <b>14. Reseñas, Comentarios, Comunicaciones y Otros Contenidos.</b> Los Servicios pueden permitirle enviar, transmitir, publicar o de otra manera proporcionar contenido, de manera enunciativa, mas no limitativa, comentarios, calificaciones, fotos, imágenes, videos, sonidos, texto, datos, enlaces e información sobre su ubicación; enviar correos electrónicos y otras comunicaciones; así como enviar sugerencias, ideas, comentarios, preguntas u otra información ("Contenido del usuario"). El Contenido de Usuario no debe ser ilegal, amenazante, obsceno, racista, difamatorio, calumnioso, pornográfico, infringir derechos de propiedad intelectual, promover actividades ilegales o perjudicar a grupos y/o individuos, invasor de los derechos de imagen o de privacidad de terceros, intencionalmente falsa o perjudicial respecto de terceros, objetable; y no debe consistir en o contener software, virus informáticos, propuestas comerciales, información sobre campañas políticas, cartas en cadena, envíos masivos, cualquier forma de "spam" o referencias a actividades ilegales, una práctica de mala fe, una sobrecarga intencional, publicidad falsa, engañosa o violaciones a la legislación en materia de salud (por ejemplo, objetos extraños en los alimentos, contaminación en los alimentos, etc.). Su Contenido de Usuario debe ser imparcial y objetivo. Usted no puede enviar comentarios, comentarios o calificaciones por las cuales este siendo recompensado de ninguna manera, o para su propio servicio asociado con Hoy Salgo; o cualquier servicio asociado de su empleador, amigo, familiar o competidor. Usted no puede usar una dirección de correo electrónico falsa, hacerse pasar por otra persona o entidad, o engañar de cualquier manera respecto al origen del Contenido del Usuario. El nombre o identificador que usted elija proporcionar a Hoy Salgo se puede mostrar públicamente en relación con el Contenido de Usuario. Hoy Salgo se reserva el derecho (pero no tiene obligación) de monitorear, eliminar o editar el Contenido del Usuario a su entera discreción, incluyendo si el contenido del usuario viola este Acuerdo (incluyendo cualquier otra política de Hoy Salgo), pero usted reconoce y acepta que Hoy Salgo no revisara periódicamente el Contenido de Usuario que reciba. Si usted envía Contenido de Usuario y, salvo pacto en contrario, usted otorga a Hoy Salgo una licencia no exclusiva, perpetua, libre del pago de regalías, irrevocable y completamente sublicenciable (a través de múltiples niveles, incluyendo a restaurantes, servicios asociados, socios y otros sitios web y feeds de terceros) para utilizar, modificar, reproducir, adaptar, traducir, publicar, crear trabajos derivados, distribuir, exhibir y explotar de cualquier otra manera dicho Contenido de Usuario en todo el mundo y por cualquier medio, en su caso, usted renuncia a los derechos de privacidad, de imagen, o cualquier otro derecho semejante respecto la imagen de un individuo, además de cualquier derecho moral o cualquier otro derecho que pueda tener sobre el Contenido del Usuario que usted envía a Hoy Salgo. Usted declara poseer, o contar, con la autorización necesaria para utilizar y autorizar el uso del Contenido de Usuario, tal como se describe en este documento. Hoy Salgo no asume ninguna responsabilidad, ni obligación, por ningún Contenido de Usuario que haya sido enviado por usted cualquier otro Usuario o algún tercero, ni tampoco garantiza ningún tipo de confidencialidad con respecto al Contenido del Usuario.
                        </p>
                        <p>
                            <b>15. Sus declaraciones e indemnidad.</b> Usted declara y garantiza que es propietario o, en su defecto, controla todos los derechos del Contenido del Usuario presentado por usted; que el Contenido del Usuario presentado por usted es exacto; y que la explotación de ese Contenido del Usuario por Hoy Salgo y sus otros Usuarios, socios y licenciatarios no violará este Acuerdo o causará  perjuicio alguno a personas o entidades ni infringirá los derechos de terceros (incluidos, entre otros, los derechos de propiedad intelectual y de privacidad o publicidad). Usted mantendrá indemne, sacará en paz y a salvo, y (a pedido de Hoy Salgo) defenderá a Hoy Salgo de y contra todas las reclamaciones provenientes de (1) el Contenido del Usuario que usted presente, (2) el uso que usted haga de los Servicios, o (3) la violación o supuesta violación de este Acuerdo por su parte.
                        </p>

                        <p>
                            <b>16. Limitaciones de responsabilidad.</b> SALVO POR LO DISPUESTO EXPRESAMENTE EN EL PRESENTE, EN NINGÚN CASO LAS PARTES DE HOY SALGO SERÁN RESPONSABLES DE LAS LESIONES, PÉRDIDAS, RECLAMACIONES O DAÑOS Y PERJUICIOS DIRECTOS NI POR LOS DAÑOS ESPECIALES, EJEMPLARES, PUNITIVOS, INCIDENTALES O CONSECUENCIALES DEL TIPO QUE SEAN, YA SEA DE FUENTE CONTRACTUAL O EXTRACONTRACTUAL O DE CUALQUIER OTRA , AUN SI SE LES HUBIERA INFORMADO SOBRE LA POSIBILIDAD DE ESOS DAÑOS Y PERJUICIOS, QUE SURJAN O DE ALGUNA MANERA SE RELACIONEN CON (1) ESTE ACUERDO (INCLUIDOS SUS RESPECTIVAS MODIFICACIONES), (2) EL USO DE LOS SITIOS Y SERVICIOS DE HOY SALGO, LOS CONTENIDOS DE HOY SALGO O EL CONTENIDO DEL USUARIO, (3) LA FALLA O DEMORA (INCLUIDO, SIN LIMITARSE, A EL USO O IMPOSIBILIDAD DE USO DE ALGÚN COMPONENTE DE LOS SERVICIOS), O (4) SU VISITA A UN RESTAURANTE U OTRO SERVICIO ASOCIADO CON HOY SALGO, O LA REALIZACIÓN, NO REALIZACIÓN, CONDUCTA O POLÍTICAS DE UN SERVICIO ASOCIADO O PROVEEDOR EN RELACIÓN CON LOS SERVICIOS. ASIMISMO, USTED ESPECÍFICAMENTE COMPRENDE Y ACEPTA QUE LOS TERCEROS QUE LO DIRIJAN AL SITIO DE HOY SALGO POR REFERENCIA, ENLACE O CUALQUIER OTRO MEDIO, NO SON RESPONSABLES ANTE EL USUARIO POR NINGUNA RAZÓN EN ABSOLUTO, INCLUYENDO, SIN LIMITARSE, A LOS DAÑOS Y PERJUICIOS O PÉRDIDA RELACIONADA CON EL USO DE LOS SERVICIOS O CON LOS CONTENIDOS DE HOY SALGO. HOY SALGO NO ES AGENTE NI TAMPOCO ESTÁ ASOCIADO CON NINGÚN SERVICIO ASOCIADO DONDE UN USUARIO HAYA HECHO UNA RESERVACIÓN, RECLAMADO UNA OFERTA O PROMOCIÓN, O PAGADO UNA CUENTA POR MEDIO DE LOS SERVICIOS DE PAGO O DE UN PROVEEDOR QUE EMITE UNA TARJETA DE REGALO DE PROVEEDORES. 
                        </p>
                        <p>
                            <b>17. Exención de garantías.</b> USTED ENTIENDE QUE EL USO DE LOS SERVICIOS CORRE POR SU CUENTA Y RIESGO, Y QUE HOY SALGO NO PUEDE GARANTIZAR QUE LOS SERVICIOS NO SE INTERRUMPAN NI ESTÉN LIBRES DE ERRORES. LOS SERVICIOS, TODOS LOS CONTENIDOS DE HOY SALGO Y CUALQUIER OTRA INFORMACIÓN, PRODUCTOS Y MATERIALES INCLUIDOS EN LOS SERVICIOS O A LOS QUE PUEDE ACCEDERSE MEDIANTE LOS SERVICIOS, SE BRINDAN AL USUARIO “TAL COMO ESTÁN” Y SIN GARANTÍAS DE NINGÚN TIPO. HOY SALGO EXPRESAMENTE RECHAZA TODAS LAS DECLARACIONES, GARANTÍAS, CONDICIONES O INDEMNIZACIONES, EXPRESAS O IMPLÍCITAS, INCLUYENDO, SIN LIMITARSE, A CUALQUIER GARANTÍA DE COMERCIABILIDAD, APTITUD PARA UN FIN DETERMINADO, TÍTULO, AUSENCIA DE VIOLACIÓN DE DERECHOS DE TERCEROS, O TODA GARANTÍA QUE SURJA DE UN TRATO COMERCIAL, CUMPLIMIENTO O USO COMERCIAL. HOY SALGO NO GARANTIZA QUE EL USO QUE USTED HACE DE LOS SERVICIOS NO SE INTERRUMPA NI ESTÉ LIBRE DE ERRORES, QUE HOY SALGO REVISARÁ LA INFORMACIÓN O LOS MATERIALES DISPONIBLES MEDIANTE LOS SERVICIOS PARA SU EXACTITUD NI QUE CONSERVARÁ O MANTENDRÁ ESA INFORMACIÓN O MATERIALES SIN PÉRDIDA ALGUNA. HOY SALGO NO SERÁ RESPONSABLE DE LAS DEMORAS, INTERRUPCIONES, FALLAS EN EL SERVICIO U OTROS PROBLEMAS INHERENTES AL USO DE INTERNET Y DE LAS COMUNICACIONES ELECTRÓNICAS U OTROS SISTEMAS FUERA DEL CONTROL RAZONABLE DE HOY SALGO.
                        </p>
                        <p>
                            ASIMISMO, HOY SALGO NO ASUME RESPONSABILIDAD EN EL CUMPLIMIENTO DEL SERVICIO POR PARTE DEL SERVICIO ASOCIADO, ASÍ COMO TAMPOCO ASEGURA EL NIVEL DE SATISFACCIÓN ESPERADO POR EL USUARIO, DESLIGÁNDOSE DE CUALQUIER ACCIONAR QUE PUEDA PROVOCARLE ALGUNA SUERTE DE DAÑO O PERJUICIO CONTRA SU PERSONA. HOY SALGO ÚNICAMENTE SE PRESTA A EFECTUAR RESERVAS A NOMBRE DEL CLIENTE ACTUANDO COMO UN MERO ASISTENTE EN LA CONCRECIÓN DE LA RELACIÓN COMERCIAL ENTRE EL USUARIO Y ELSERVICIO ASOCIADO.
                        </p>
                        <p>
                            <b>18. Sitios web, aplicaciones y servicios de terceros.</b> Los Servicios podrán contener enlaces de hipertextos con sitios web y aplicaciones operados por terceros aparte de Hoy Salgo. Esos enlaces de hipertexto son proporcionados únicamente como referencia para el Usuario y Hoy Salgo no controla esos sitios web ni es responsable de su contenido. La inclusión de esos enlaces de hipertexto por parte de Hoy Salgo en esos sitios web o aplicaciones, no implica la ratificación de ese material en esos sitios web o aplicaciones ni ninguna asociación con sus operadores. Hoy Salgo no asume responsabilidad alguna en absoluto por los sitios web, aplicaciones, contenidos, funciones, productos o servicios de esos terceros, disponibles en los sitios web o aplicaciones de dichos terceros.
                        </p>
                        <p>
                            <b>19. Exención de responsabilidad.</b> Los Servicios asociados y comerciantes son los únicos responsables de la relación que mantienen con usted y de cualquiera y todas las reclamaciones, lesiones, enfermedades, daños y perjuicios, responsabilidades y costos (las “Reclamaciones”) que sufra usted, como resultado de su relación con un servicio asociado o Proveedor, o de su visita a un servicio asociado, o proveniente de una promoción, oferta, producto o servicio de un servicio asociado o Proveedor.  Los Usuarios deberán resolver todos sus conflictos directamente con los servicios asociados. Con el máximo alcance permitido por la ley aplicable, por medio del presente usted libera a las Partes de Hoy Salgo de cualquiera y todas esas Reclamaciones.
                        </p>
                        <p>
                            <b>20. Notifíquenos Sobre los Infractores.</b> Si considera que alguno de los Servicios viola su derecho de autor, notifique a Hoy Salgo por escrito. Encontrará la información de contacto al pie de esta sección.
                        </p>
                        <p>
                            Para que podamos tomar medidas, debe hacer lo siguiente en su aviso:
                        </p>

                        <ol type="a">
                            <li>
                                Proporcionar su firma física o electrónica;
                            </li>
                            <li>
                                Identificar el trabajo protegido por el derecho de autor que considera ha sido violado;
                            </li>
                            <li>
                                Identificar el objeto que considera viola su obra e incluir la suficiente información sobre la ubicación 
                                del material para que podamos buscarlo;
                            </li>
                            <li>
                                Informarnos cómo podemos contactarlo, por ejemplo, su domicilio, número telefónico o correo electrónico;
                            </li>
                            <li>
                                Entregar una declaración donde establezca que considera de buena fe que el objeto que ha identificado en 
                                infracción no está autorizado por el titular del derecho de autor, su agente o la ley que se aplicará 
                                en relación con los Servicios;
                            </li>
                            <li>
                                Entregar una declaración donde indique que la información que proporciona en su aviso es exacta y que (bajo 
                                pena de perjurio) está autorizado para actuar en nombre del titular del derecho de autor cuya obra ha sido violada.
                            </li>
                        </ol>

                        <p>
                            La información de contacto de su agente de derechos de autor es la siguiente:
                        </p>
                        <p>
                            <b>Hoy Salgo </b>
                        </p>
                        <p>
                            <b>info@hoysalgo.uy</b>
                        </p>
                        <p>
                            <b>Nuevamente, no podremos tomar medidas a menos que nos proporcione toda la información solicitada.</b>
                        </p>
                        <p>
                            20.<b> Permanencia del Acuerdo.</b> Si alguna de las disposiciones —o las partes pertinentes— de este Acuerdo fuera considerada sin validez conforme a la ley aplicable, en ese caso, no obstante, esa disposición —o la parte pertinente—, este Acuerdo permanecerá en plena vigencia y vigor, y esa disposición o su parte pertinente será considerada omitida.
                        </p>
                        <p>
                            21.<b> Cesión.</b> El Usuario no podrá transferir, ceder ni delegar este Acuerdo ni los derechos otorgados y obligaciones asumidas conforme al presente de ninguna manera, sin embargo, Hoy Salgo podrá transferirlos, cederlos o delegarlos libremente.
                        </p>
                        <p>
                            22. <b>Renuncia.</b> Toda renuncia a una disposición de este Acuerdo o la demora de una parte en la aplicación de un derecho conforme al presente, no será considerada una renuncia subsistente ni creará una expectativa de inaplicabilidad de esa u otra disposición o derecho.
                        </p>
                        <p>
                            23. Resolución de disputas
                            Las partes convienen en someter a la jurisdicción de los jueces de la ciudad de Montevideo de la República Oriental del Uruguay todos los reclamos, controversias o diferencias que pudiesen existir entre ellas producto o en relación del presente Acuerdo, incluyendo, sin carácter limitativo, cualquier asunto relacionado con su existencia, interpretación, vigencia o resolución, renunciando al fuero de sus domicilios.            
                        </p>
                        <p>
                            28. <b>Ley aplicable.</b> Este Acuerdo se celebra, regirá e interpretará de conformidad con las leyes de la República Oriental del Uruguay.
                        </p>
                        <p>
                            <b>FECHA DE MODIFICACIÓN: 15 de diciembre de 2020</b>
                        </p>
                    </div>
                    <Loading show={this.state.preloader}/>                    
                </Container>
                </Modal.Body>
            </Modal>
        );
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,
        todosLosNegocios : state.todosLosNegocios,
        negocioSeleccionado : state.negocioSeleccionado   
    };
}
export default connect(mapStateToProps)(ModalMenu);