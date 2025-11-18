const pokedexData = [
    {
        titleProyect: "Pokelab · Vue 3 + Vuetify",
        descripcionProyect:
            "Aplicación web tipo Pokedex para consultar información detallada de Pokémon: estadísticas, tipos, habilidades y evoluciones.",
        videoProyect:
            "https://res.cloudinary.com/dronteu5m/video/upload/v1763436188/Dise%C3%B1o-sin-t%C3%ADtulo-_3__nzhptt.webm",
        linkUrlProyect: "https://pokemon-lab-manu.netlify.app/pokedex",
        linkTextProyect: "Visitar Sitio",
        rolltextProyect: "Desarrollador Frontend",
        tecnotextProyect:
            "Stack: Vue 3 · Vite · Vuetify 3 · JavaScript · Chart.js · Fetch API · Netlify · Git · GitHub",
        timetextProyect: "Proyecto 2025",

        textdescriptionProyect:
            "Pokelab es una aplicación SPA desarrollada con Vue 3, Vuetify y consumo de la PokeAPI. Permite buscar Pokémon por nombre o ID, visualizar estadísticas, tipos, habilidades, debilidades, así como su cadena completa de evoluciones incluyendo imágenes, etapas y métodos de evolución. Incluye un análisis defensivo del equipo según los tipos, tablas de habilidades, y gráficas generadas con Chart.js.",

        introproyectProyect: "Pokelab con UI moderna y análisis avanzado",
        videoCarousel:
            "https://res.cloudinary.com/dronteu5m/video/upload/v1763436189/Dise%C3%B1o-sin-t%C3%ADtulo-_4__uf5ox7.webm",
        linkUrlCarousel: "https://pokemon-lab-manu.netlify.app/compare",
        linkTextCarousel: "",

        descriptionitemProyect:
            "La pantalla principal permite buscar Pokémon, navegar entre páginas mediante Vue Router y visualizar sus datos completos. Se implementaron gráficos con Chart.js para mostrar estadísticas base, tablas de habilidades con descripciones y un sistema de evoluciones que muestra imágenes, etapas y métodos para evolucionar. La UI está diseñada con Vuetify, usando su sistema de grid responsivo para mostrar contenido adaptado a mobile, tablet y desktop.",

        itemsProyect: [
            "Búsqueda por nombre o ID con renderizado dinámico de información.",
            "Sistema de evolución completo con etapas, imágenes y métodos como nivel, piedras o condiciones especiales.",
            "Gráficas comparativas usando Chart.js para visualizar estadísticas base.",
            "Tabla interactiva con habilidades y descripciones consumidas desde la API."
        ],

        // Bloque 2: Estado + consumo de API
        introproyectNoticias:
            "Arquitectura modular con servicios + consumo de la PokeAPI",
        videoCarouselCard:
            "https://res.cloudinary.com/dronteu5m/video/upload/v1763436188/Dise%C3%B1o-sin-t%C3%ADtulo-_5__xnrzkq.webm",
        linkUrlCard: "https://pokemon-lab-manu.netlify.app/build-team",
        linkTextCard: "",

        descriptionitemCard:
            "La aplicación está organizada siguiendo una arquitectura basada en servicios. Cada módulo se encarga de obtener datos específicos: información general del Pokémon, tipos, habilidades, estadísticas y cadena de evolución. Se optimizó el formateo de datos complejos (como las cadenas de evolución) para transformar las respuestas de la API en estructuras fáciles de renderizar. Esto permite escalabilidad y facilita futuras mejoras, como agregar un comparador o IA para generar análisis automáticos.",

        itemsCard: [
            "Servicios independientes para cada parte de la API: detalles, tipos, habilidades, evoluciones, etc.",
            "Transformación de la cadena de evolución en etapas listas para mostrar con imágenes y nombres.",
            "Separación clara entre lógica de negocio (servicios) y lógica de UI (componentes Vue).",
            "Arquitectura preparada para integrar nuevas características como análisis con IA."
        ],

        // Bloque 3: Flujo profesional GitFlow + Netlify
        introproyectwp:
            "Flujo profesional con GitFlow + Netlify (Producción, Staging y Deploy Previews)",
        videoCarouselwp: "",

        descriptionwp:
            "Además del desarrollo técnico, la aplicación utiliza un flujo de trabajo profesional: GitFlow para la organización de ramas y Netlify para los despliegues. La rama master funciona como producción, develop como staging y cada Pull Request genera automáticamente un Deploy Preview en Netlify. Esto permite revisar cambios específicos, comprobar que no rompan la app y después integrarlos en develop y master de forma segura.",

        itemswp: [
            "GitFlow: ramas feature/* para nuevas funcionalidades, develop como entorno de integración y master como rama final de producción.",
            "Netlify: master despliega a producción, develop a staging y cada PR genera su propio Deploy Preview.",
            "Build automatizado con Vite (npm run build) y despliegue optimizado.",
            "Documentación orientada a portafolio mostrando tecnologías, arquitectura y decisiones de desarrollo."
        ]
    }
]

export default pokedexData
