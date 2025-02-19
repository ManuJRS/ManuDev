import esmeraldaimg from '../assets/ESMERALDA/esmeralda_brewind_manudev.png';
import videoone from '../assets/ESMERALDA/carrusel_esmeralda_brewing_manudev.webm';
import videotwo from '../assets/ESMERALDA/ui_ux_esmeralda_brewing_manudev.webm';
import videothree from '../assets/ESMERALDA/mensaje_personalizado_whatsapp_esmeralda_brewing_manudev.webm';

const esmeraldaData = [
    {
        id: 1,
        title: "Esmeralda Brewing", //Titulo del proyecto
        description: "Desarollo de sitio web - 2023", // Subtitle
        img: esmeraldaimg, //Imagen principal
        rolltext: "Desarrollador Web", //Mi papel
        tecnotext: "HTML, css, js", //Tecnologia utilizada
        timetext: "40 dias", //Tiempo de duracion del proyecto
        textdescription: " Desarrollé una página de aterrizaje (LP) para que la empresa pudiera mostrar su historia y exponer sus productos para la venta. La LP también permite enviar mensajes con los pedidos de los clientes vía WhatsApp al vendedor de la empresa.", //TEXTO INTRODUCTORIO
        introproyect: "Personalizacion mediante codigo", //TITULO INTRODUCTORIO
        videoone: videoone, // Video para la card uno
        tittlefc: "Componentes personalizados:", //Titulo de la card uno
        textfc: "Todos los componentes que forman parte del cuerpo de la LP se desarrollaron desde cero, según las especificaciones del cliente.", //Descripcion de la card uno
        videotwo: videotwo, // Video para la card dos
        tittlesc: "Diseño amigable:", //Titulo de la card dos
        textsc: "Dado que los dos objetivos principales de la LP eran mostrar la historia y los productos disponibles para la venta, el diseño de la interfaz se realizó considerando la interacción y comodidad del usuario.", //Descripcion de la card tres
        videothree: videothree, //Video de la card tres
        tittletc: "Mensajes de WA personalizados:", //Titulo de la card tres
        texttc: "Mediante JavaScript, desarrollé un sistema para registrar los pedidos y enviar mensajes personalizados vía WhatsApp al vendedor de la empresa", //Descripcion de la card tres
        conclusiontittle: "Conclusión", //TITULO DE CIERRE
        conclusiontext: "El proyecto tuvo una duración de 40 días, abarcando desde la entrega del diseño UI-UX, la maquetación con HTML y CSS, hasta el desarrollo del código JavaScript responsable de generar y enviar los pedidos personalizados a los vendedores." //CONCLUSION FINAL
    },
]

export default esmeraldaData;
