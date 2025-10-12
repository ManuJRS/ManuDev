const esmeraldaRenewedData = [
    {
        titleProyect: "Esmeralda Brewing Renewed",
        descripcionProyect: "Renovación y rediseño de sitio web",
        videoProyect: "https://res.cloudinary.com/dronteu5m/video/upload/v1760294271/Esmeralda_Brewing_y_4_p%C3%A1ginas_m%C3%A1s_-_Personal__Microsoft__Edge_2025-10-12_11-40-55_online-video-cutter.com_ewznrq.mp4",
        linkUrlProyect: "https://esmeraldabrewing.netlify.app/",
        linkTextProyect: "Visitar Sitio",
        rolltextProyect: "Desarrollador",
        tecnotextProyect: "Stack: Astro · HTML · CSS · JS · WordPress headless (ACF, API) · Git · GitHub",
        timetextProyect: "30 Días",
        textdescriptionProyect: "Un sitio web corporativo para la marca Esmeralda Brewing, con el objetivo de mostrar sus productos (cervezas), su ubicación, contactos y eventos. El sitio permite presentar fichas de cerveza con sus características, presentar una cerveza de temporada, mostrar ubicación geográfica, redes sociales, formulario de contacto, entre otros.",
        introproyectProyect: "Carrusel (slider) para mostrar productos",
        videoCarousel: "https://res.cloudinary.com/dronteu5m/video/upload/v1760294259/Esmeralda_Brewing_y_4_p%C3%A1ginas_m%C3%A1s_-_Personal__Microsoft__Edge_2025-10-12_11-40-55_online-video-cutter.com_1_tlymyv.mp4",
        linkUrlCarousel: "https://codepen.io/manuel-jesus-rej-n-santana/pen/wBMqBdW",
        linkTextCarousel: "Ver Código",
        descriptionitemProyect: "Implementé un carrusel infinito que reordena los slides manipulando el DOM (append/prepend) y anima su entrada/salida con CSS variables aplicadas por nth-child (transform, blur, scale, z-index, opacity). Además, incluí un panel de detalle (especificaciones técnicas: IBU, ABV, mezcla, maridaje, etc.) a la derecha en desktop o como bottom sheet en móvil.",
        itemsProyect: [
            "Mantenible: sumar una cerveza = añadir un .item (no hay que tocar la lógica).",
            "Escalable: fácil de portar a cualquier stack (Astro, React, vanilla) por la lógica",
            "Animación por CSS: transforms + opacidades → 60fps en la mayoría de dispositivos.",
        ],
        introproyectNoticias: "Card Slider para mostrar Noticas",
        videoCarouselCard: "https://res.cloudinary.com/dronteu5m/video/upload/v1760294258/Esmeralda_Brewing_y_4_p%C3%A1ginas_m%C3%A1s_-_Personal__Microsoft__Edge_2025-10-12_11-58-41_online-video-cutter.com_icarip.mp4",
        linkUrlCard: "https://codepen.io/manuel-jesus-rej-n-santana/pen/XJXaJwO",
        linkTextCard: "Ver Código",
        descriptionitemCard: "Implementé un carrusel horizontal por scroll nativo, con scroll-snap para que cada card encaje y flechas que desplazan exactamente un ancho de tarjeta por click. Añadí soporte de arrastre con mouse y un efecto de loop infinito clonando los primeros/últimos ítems y reajustando scrollLeft sin transición para evitar saltos visuales. Es responsive (3→1 columnas según viewport), performante y de fácil mantenimiento, sin dependencias externas.",
        itemsCard: [
            "Flechas flotantes circulares con sombra para enfoque visual.",
            "Hover/drag states: .dragging cambia el cursor y desactiva el snap para un arrastre fluido.",
            "Lógica mínima en JS: solo controla scrollLeft, drag y reubicación para el loop infinito.",
            "Mantenimiento: estructura clara (HTML/ CSS/ JS separados) y responsive con pocas media queries."
        ],
        introproyectwp: "Headless CMS con WordPress + ACF (Uso de API)",
        videoCarouselwp: "https://res.cloudinary.com/dronteu5m/video/upload/v1760294926/Editar_p%C3%A1gina__Esmeralda_Brewing__Cervecer%C3%ADa_Yucateca_Esmeralda_Brewing_WordPress_-_Personal__Microsoft__Edge_2025-10-12_12-42-19_online-video-cutter.com_sngows.mp4",
        descriptionwp: "Para mantener la edición de contenido simple para el cliente y el frontend ultra-performante, implementé una arquitectura headless: WordPress actúa como CMS únicamente (sin servir vistas) y el frontend en Astro consume los datos mediante la REST API de WordPress utilizando Advanced Custom Fields (ACF).",
        itemswp: [
            "Edición en CMS: El equipo gestiona textos, imágenes y metadatos desde WordPress, con campos personalizados en ACF (hero, cerveza de temporada, catálogo, meta Open Graph, enlaces, etc.).",
            "Consumo en Astro: El sitio fetchea los datos del endpoint",
            "Deploy & cache: El sitio se despliega en Netlify. Al actualizar contenido, puede dispararse un rebuild (webhook) para regenerar el HTML con los datos más recientes."
        ]
    },
]

export default esmeraldaRenewedData