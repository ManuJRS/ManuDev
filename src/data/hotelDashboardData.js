const hotelDashboardData = [
    {
        titleProyect: "Hotel Dashboard · Vue 3 + Vuetify + TypeScript",
        descripcionProyect:
            "Panel administrativo profesional para gestionar reservas, huéspedes y habitaciones, con métricas, gráficas y persistencia local.",
        videoProyect:
            "https://res.cloudinary.com/dronteu5m/video/upload/v1763438778/Dise%C3%B1o-sin-t%C3%ADtulo-_3__mi5jci.webm", // Cambia este link si tienes un video del dashboard
        linkUrlProyect: "https://hotel-dashboard-manu.netlify.app",
        linkTextProyect: "Visitar Sitio",
        rolltextProyect: "Desarrollador Frontend",
        tecnotextProyect:
            "Stack: Vue 3 · Vite · Vuetify 3 · TypeScript · Pinia · Chart.js · LocalStorage · Router · Netlify · Git · GitHub",
        timetextProyect: "Proyecto 2025",

        textdescriptionProyect:
            "Hotel Dashboard es un panel administrativo desarrollado con Vue 3, Vuetify y TypeScript. Permite gestionar reservas, habitaciones y huéspedes mediante formularios dedicados, tablas interactivas y gráficas dinámicas. La aplicación funciona como una SPA con persistencia local mediante LocalStorage y carga inicial desde un archivo JSON, simulando un backend real. Incluye KPIs del hotel, gráficos con Chart.js, CRUD completo de reservas, edición de huéspedes y vista detallada de cada elemento.",

        introproyectProyect: "Dashboard administrativo con UI moderna y funcionalidad completa",
        videoCarousel:
            "https://res.cloudinary.com/dronteu5m/video/upload/v1763438926/Dise%C3%B1o-sin-t%C3%ADtulo-_5__thrybe.webm",
        linkUrlCarousel: "https://hotel-dashboard-manu.netlify.app/reservations",
        linkTextCarousel: "",

        descriptionitemProyect:
            "La interfaz presenta un diseño profesional con un sidebar responsivo, navegación por secciones y métricas destacadas. Las vistas incluyen búsquedas, tablas con datos dinámicos, detalles completos de reservas y formularios optimizados para crear y editar información. El dashboard ofrece gráficos sobre la ocupación del hotel y el estado de las reservas, integrando Chart.js para visualización moderna. Todo el contenido está construido con Vuetify y su sistema de grid responsivo.",

        itemsProyect: [
            "Dashboard general con gráficas sobre el estado del hotel.",
            "CRUD completo para reservas con formularios separados para crear y editar.",
            "Gestión de huéspedes con edición directa desde su propia sección.",
            "Tablas interactivas con Vuetify DataTable y detalles mediante modales."
        ],

        // Bloque 2: Arquitectura y estado
        introproyectNoticias:
            "Arquitectura modular con Pinia + servicios y persistencia local",
        videoCarouselCard:
            "https://res.cloudinary.com/dronteu5m/video/upload/v1763438774/Dise%C3%B1o-sin-t%C3%ADtulo-_4__pimikn.webm",
        linkUrlCard: "https://hotel-dashboard-manu.netlify.app/guests",
        linkTextCard: "",

        descriptionitemCard:
            "La aplicación utiliza una arquitectura basada en servicios y un store centralizado con Pinia. Los datos iniciales se cargan desde un archivo db.json, y el estado completo del hotel se replica en LocalStorage, simulando un backend persistente. La lógica de negocio se mantiene separada de la UI, haciendo el proyecto escalable y fácil de mantener. El store contiene todas las operaciones CRUD para reservas, huéspedes y habitaciones, con validación básica y flujos independientes para creación y edición.",

        itemsCard: [
            "Pinia como fuente de verdad global con persistencia en LocalStorage.",
            "Servicios para cargar datos iniciales simulando un backend con JSON.",
            "Separación clara entre lógica de datos, vistas y componentes.",
            "Preparado para agregar un backend real (Strapi, Firebase o Node.js)."
        ],

        // Bloque 3: Flujo profesional + Deploy
        introproyectwp:
            "Flujo profesional con GitFlow + Netlify (Producción, Staging y Deploy Previews)",
        videoCarouselwp: "",

        descriptionwp:
            "El desarrollo siguió un flujo profesional usando GitFlow: ramas feature/* para nuevas funciones, develop como integración continua y master como rama de producción. El proyecto está desplegado en Netlify, con build automático desde Vite. Se configuró correctamente un archivo _redirects para habilitar las rutas del SPA y evitar errores 404 al refrescar. Esto asegura despliegues limpios y una experiencia estable tanto en desktop como en mobile.",

        itemswp: [
            "GitFlow: develop como ambiente de pruebas y master como entorno de producción.",
            "Netlify: deploy automatizado con build optimizada de Vite.",
            "Archivo _redirects configurado para soportar Vue Router en producción.",
            "Documentación clara orientada a portafolio y buenas prácticas de desarrollo."
        ]
    }
]

export default hotelDashboardData
