const movieManagerData = [
    {
        titleProyect: "Movie Manager · Gestor de Películas",
        descripcionProyect: "Aplicación web tipo para gestionar una colección personal de películas.",
        videoProyect: "https://res.cloudinary.com/dronteu5m/video/upload/v1763338116/Dise%C3%B1o-sin-t%C3%ADtulo_n4xprf.webm",
        linkUrlProyect: "https://movie-collection-manu.netlify.app/",
        linkTextProyect: "Visitar Sitio",
        rolltextProyect: "Desarrollador Frontend",
        tecnotextProyect:
            "Stack: Vue 3 · Vite · Vuetify 3 · Pinia · JavaScript · Netlify · Git · GitHub",
        timetextProyect: "Proyecto 2025",
        textdescriptionProyect:
            "Movie Manager es una aplicación SPA desarrollada con Vue 3, Vuetify y Pinia que permite gestionar una colección de películas. Desde una interfaz tipo dashboard, el usuario puede agregar nuevas películas con título, año y portada, verlas en un grid de cards responsive, eliminarlas cuando ya no las necesita y mantener la colección persistente incluso después de recargar la página, gracias al uso de localStorage.",

        introproyectProyect: "Gestor de películas con UI responsive",
        videoCarousel: "https://res.cloudinary.com/dronteu5m/video/upload/v1763338115/Dise%C3%B1o-sin-t%C3%ADtulo-_1__klvmjy.webm",
        linkUrlCarousel: "https://github.com/ManuJRS/movie-explorer-vuetify",
        linkTextCarousel: "",
        descriptionitemProyect:
            "La pantalla principal combina un formulario validado (Vuetify + rules) y un grid de cards para mostrar cada película. El flujo está pensado como una mini app productiva: se valida la información antes de agregarla, se mantiene un estado global con Pinia, y la UI se adapta a mobile, tablet y desktop usando el sistema de grid de Vuetify y media queries personalizados.",
        itemsProyect: [
            "Formulario con validaciones en tiempo real (campos requeridos y año en rango 1800–2100).",
            "Botón de añadir deshabilitado hasta que el formulario es válido, mejorando la UX.",
            "Cards responsive: 1→2→3→4 columnas según viewport, con altura y layout controlados por CSS + media queries.",
            "Botón de eliminar en cada card para manejar el ciclo de vida completo de la película (Create, Read, Delete)."
        ],

        // Bloque 2: Estado global + persistencia
        introproyectNoticias: "Manejo de estado global con Pinia + persistencia en localStorage",
        videoCarouselCard: "https://res.cloudinary.com/dronteu5m/video/upload/v1763338113/Dise%C3%B1o-sin-t%C3%ADtulo-_2__rlmbxk.webm",
        linkUrlCard: "https://movie-collection-manu.netlify.app/",
        linkTextCard: "",
        descriptionitemCard:
            "La aplicación utiliza un store de Pinia para centralizar el estado de las películas. Al iniciar, el store revisa si existen datos en localStorage; si los hay, los usa como fuente principal, y si no, carga datos iniciales desde un JSON que simula una API estática. Cada operación (agregar o eliminar) actualiza tanto el estado en memoria como el localStorage, lo que garantiza persistencia entre recargas sin necesidad de un backend real.",
        itemsCard: [
            "Función loadMovies que prioriza datos en localStorage y, en su ausencia, consume un JSON estático vía fetch.",
            "Acciones addMovie y deleteMovie que actualizan el array reactivo y sincronizan localStorage en cada cambio.",
            "Arquitectura pensada para poder sustituir fácilmente el JSON por una API real en el futuro (misma interfaz de datos).",
            "Separación clara entre lógica de UI (componentes Vue) y lógica de negocio/estado (store de Pinia)."
        ],

        // Bloque 3: Flujo profesional GitFlow + Netlify
        introproyectwp: "Flujo profesional con GitFlow + Netlify (Producción, Staging y Deploy Previews)",
        videoCarouselwp: "", // opcional: captura mostrando Netlify / PRs
        descriptionwp:
            "Además del código, el proyecto está montado sobre un flujo de trabajo profesional: GitFlow para la gestión de ramas y Netlify como plataforma de despliegue. La rama master actúa como producción, develop como staging, y cada feature se trabaja en ramas independientes con Pull Requests que generan Deploy Previews automáticos en Netlify. Esto permite revisar cambios específicos, probar la integración en staging y, finalmente, publicar una versión estable en producción.",
        itemswp: [
            "GitFlow: ramas feature/* para nuevas funcionalidades, develop como entorno de integración y master como rama de producción.",
            "Netlify: master despliega a producción, develop a un entorno de staging y cada Pull Request genera un Deploy Preview con URL propia.",
            "Build automatizado con Vite (npm run build) y publicación de la carpeta dist.",
            "Documentación pensada para portafolio: explicación del flujo de trabajo, tecnologías y decisiones de arquitectura."
        ]
    }
]

export default movieManagerData
