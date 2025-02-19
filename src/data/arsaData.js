import arsaimg from '../assets/ARSA/arsa_renoval_manudev.png';
import videoone from '../assets/ARSA/UI_UX_arsa_renoval_manudev.webm';
import videotwo from '../assets/ARSA/proyectos_arsa_renoval_manudev.webm';
import thirdimg from '../assets/ARSA/correos_corporativos_gmail_arsa_renoval_manudev.png';

const arsaData = [
    {
        id: 1,
        title: "Arsa Renoval", //Titulo del proyecto
        description: "Desarollo de sitio web - 2023", // Subtitle
        img: arsaimg, //Imagen principal
        rolltext: "Desarrollador Web", //Mi papel
        tecnotext: "HTML, css, Js, WordPress, Elementor", //Tecnologia utilizada
        timetext: "30 dias", //Tiempo de duracion del proyecto
        textdescription: "Diseñé y desarrollé un sitio web adaptativo que proporciona toda la información de contacto de la empresa, implementé una sección dedicada para mostrar los proyectos de construcción de la empresa, y configuré un sistema para la creación y gestión de correos electrónicos corporativos.", //TEXTO INTRODUCTORIO
        introproyect: "Personalizacion mediante codigo", //TITULO INTRODUCTORIO
        videoone: videoone, // Video para la card uno
        tittlefc: "Desarrollo de sitio web corporativo:", //Titulo de la card uno
        textfc: "Desde el inicio, el diseño UI-UX se centró en una estética profesional que destacara los proyectos más importantes y los servicios ofrecidos por la empresa.", //Descripcion de la card uno
        videotwo: videotwo, // Video para la card dos
        tittlesc: "Portafolio de proyectos:", //Titulo de la card dos
        textsc: "Una parte crucial del sitio fue el portafolio del cliente. Para ello, desarrollé un componente específico que aprovecha las entradas del CMS de WordPress, permitiendo una fácil organización y categorización de los proyectos.", //Descripcion de la card tres
        thirdimg: thirdimg, //Video de la card tres
        tittletc: "Correos corporativos:", //Titulo de la card tres
        texttc: "Implementé un sistema de correos electrónicos corporativos que integra el servidor con el servicio de Gmail, permitiendo la creación de correos ilimitados y su gestión directa desde Gmail.", //Descripcion de la card tres
        conclusiontittle: "Conclusión", //TITULO DE CIERRE
        conclusiontext: "El proyecto se completó en 30 días, abarcando la recopilación de material audiovisual, la configuración del sistema de correos corporativos, y la entrega de la documentación necesaria para que el cliente administre su sitio web, suba nuevos proyectos al portafolio y cree nuevos correos corporativos." //CONCLUSION FINAL
    },
]

export default arsaData;
