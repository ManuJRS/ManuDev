const cardProjectData = [
    {
        title: "Proyecto Card HTML Y CSS",
        description: "Ejercicio de buenas prácticas",
        img: "https://res.cloudinary.com/dronteu5m/image/upload/v1760044810/Portada_aoygpj.png",
        introUnitario: "Este ejercicio frontend, aunque básico, me permitió demostrar la aplicación de buenas prácticas en HTML y CSS, contrastando mi enfoque con el de otro desarrollador.",
        imgCardOne: "https://res.cloudinary.com/dronteu5m/image/upload/v1760049000/Design_System_1_kfbyyn.png",
        descimg: "Ambas versiones logran el mismo resultado visual, pero difieren en accesibilidad, mantenibilidad, escalabilidad y uso de CSS moderno. ",
        imgCompare: "https://res.cloudinary.com/dronteu5m/image/upload/v1760048721/T%C3%ADtulo_1_ji6mbf.png",
        introDivLay: "Card desarrollada por mí",
        imgLay: "https://res.cloudinary.com/dronteu5m/image/upload/v1760152930/my-code-html-css_u3glrh.png",
        descriptionitemLay: "Mi versión está construida con CSS moderno y semántico, lo que la hace más flexible, accesible y fácil de mantener. ",
        itemsLay: [
            "Si el contenido del copy aumenta, la card se adapta sin romper la estructura.",
            "Al modificar el tamaño (por ejemplo, de 320 px a 290 px), el diseño mantiene su integridad visual."
        ],
        descriptionEstructura: "Estructura, organización y escalabilidad",
        itemsEstructura: [
            "Uso de :root con variables globales de spacing, color, border-radius y sombras para garantizar consistencia y escalabilidad.",
            "Implementación de la etiqueta <article> para una estructura semántica más clara, mejorando la accesibilidad y el SEO."
        ],
        descriptionCentrado: "Layout, centrado y tipografía",
        itemsCentrado: [
            "Utilicé Flexbox junto con min-height: 100dvh para un mejor soporte en dispositivos móviles.",
            "Combiné Grid + Flex para un layout limpio y modular.",
            "La tipografía se define desde el body, evitando herencias rotas y asegurando coherencia tipográfica."
        ],
        descriptionSeman: "Semántica y mantenibilidad",
        itemsSeman: [
            "Selecciono solo el hijo directo con article > img para evitar estilos no deseados en imágenes anidadas.",
            "Uso de aspect-ratio: 1 / 1 para mantener proporciones automáticas y diseño adaptable."
        ],
        introDivOther: "Card desarrollada por otro",
        imgLayOther: "https://res.cloudinary.com/dronteu5m/image/upload/v1760154526/T%C3%ADtulo_2_mrxvvs.png",
        descriptionOtherLay: "Aunque visualmente similar, esta versión utiliza técnicas menos escalables y rígidas, lo que limita su adaptabilidad:",
        itemsOtherLay: [
            "Al aumentar el texto del título o la descripción, la card se rompe.",
            "Si el ancho cambia (de 320 px a 300 px, por ejemplo), la estructura pierde estabilidad."
        ],
        descriptionEstructuraOther: "Problemas detectados",
        itemsEstructuraOther: [
            "Uso de valores fijos en px y colores hexadecimales sin variables, dificultando la consistencia.",
            "Clases genéricas como .card img y .card .content, que no aportan semántica ni ayudan al mantenimiento.",
            "Layout basado en position: relative y height: 100vh, con márgenes individuales para el centrado, lo que reduce la responsividad y aumenta el riesgo de errores de alineación.",
            "Ancho y alto fijos en las imágenes, lo que limita la flexibilidad y puede romper la estructura ante cambios de contenido o tamaño.",
        ],
    }
]

export default cardProjectData