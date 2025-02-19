import agrounoimg from '../assets/AGROUNO/Agrouno_imagen_intro_proyecto_v1.png';
import tiendamuebles from '../assets/TIENDADEMUEBLES/Diseño sin título - 2023-10-21T110455.768.png';
import esmeralda from '../assets/ESMERALDA/esmeralda_brewind_manudev.png';
import arsareno from  '../assets/ARSA/arsa_renoval_manudev.png'


const cardsData = [
    {
        id: 1,
        tittle: "AGROUNO",
        intro: "Desarrollo Front-End 2022",
        text: "html, css, js, wordpress",
        externalLink: agrounoimg, //Nombre de la IMG que le dimos en el import
        link: "/Agrouno"
    },
    {
        id: 2,
        tittle: "TIENDA DE MUEBLES",
        intro: "Desarrollo Front-End 2023",
        text: "html, css, js, wodpress, creación de widgets personalizados",
        externalLink: tiendamuebles, //Nombre de la IMG que le dimos en el import
        link: "/Tienda-de-muebles"
    },
    {
        id: 3,
        tittle: "ESMERALDA BREWING",
        intro: "Desarrollo Front-End 2022",
        text: "html, css, js",
        externalLink: esmeralda, //Nombre de la IMG que le dimos en el import
        link: "/Esmeralda-brewing"
    },
    {
        id: 4,
        tittle: "ARSA RENOVAL",
        intro: "Desarrollo Front-End 2023",
        text: "html, css, js, wodpress",
        externalLink: arsareno, //Nombre de la IMG que le dimos en el import
        link: "/Arsa-Renoval"
    },
]

export default cardsData;
