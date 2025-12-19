import trivia from "../assets/projects/trivia.png";
import instagram from "../assets/projects/instagram.png";
import epersgeist from "../assets/projects/epersgeist.png";

export const translations = {
  // --- ESPAÑOL (ES) ---
  Spanish: {
    //Loader
    welcome: "Bienvenido",

    // Navbar
    home: "Inicio",
    about: "Sobre",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",

    // Sección Hero (Principal)
    greeting: "Hola, soy",
    name: "Nicole",
    tagline: "Soy una desarrolladora full stack.",
    cta_button: "Ver mi trabajo",

    // Sección About
    about_title: "Acerca de Mí",
    about_text_p1:
      "Soy estudiante de la Licenciatura en Informática en la UNQ y una apasionada por transformar ideas en interfaces web funcionales y visualmente atractivas.",
    about_text_p2:
      "Actualmente, mi foco está en el desarrollo con React y Node.js, donde combino la lógica con la creación de interfaces modernas. Estoy siempre buscando el próximo desafío para aplicar mis conocimientos.",
    about_technical_skills: "Habilidades Técnicas",

    // Sección Poject
    project_title: "Proyectos",
    listProject: [
      {
        id: "trivia",
        src: trivia,
        name: "Trivia Game",
        description:
          "Juego inspirado en el Preguntados, se realiazo el front con react + vite, consumiendo apis mediante fetch y subido a un servidor",
        repoUrl:
          "https://github.com/Nicole-Soares/unq-ui-nicole-soares-trabajo-final",
      },
      {
        id: "instagram",
        src: instagram,
        name: "Instagram clone",
        description:
          "Red social inspirada en Instagram. Incluye versión web (React + Vite) y mobile (React Native + Expo), ambas consumiendo una API propia mediante Axios/Fetch. Backend desarrollado en Node.js + Express con endpoints para autenticación, usuarios, publicaciones e interacciones.",
        repoUrl: "https://github.com/Nicole-Soares/instagram-inspired-clone",
      },
      {
        id: "epersgeist",
        src: instagram,
        name: "Epersgeost",
        description:
          "Servicio que gestiona Espiritus, Mediums y Ubicaciones. Permite que espiritus y medium se comuniquen entre sí a través de eventos (Kafka). Contiene sus propias APIs para la conexión a este servicio, además de funcionalidades extras del modelo y la persistencia (PostgreSQL, Mongo, Neo).",
        repoUrl: "https://github.com/Nicole-Soares/epersgeist-distributed-persistence",
      },
    ],
    project_more: "MÁS INFORMACIÓN",

    //boton contacto
    contact_name: "Nombre",
    contact_email: "Email",
    contact_message: "Mensaje",
    contact_submit: "Enviar",
  },

  // --- ENGLISH (EN) ---
  English: {
    //Loader
    welcome: "Welcome",

    // Navbar
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",

    // Sección Hero (Principal)
    greeting: "Hello, I'm",
    name: "Nicole",
    tagline: "I'm a full stack web developer.",
    cta_button: "View my work",

    // Sección About
    about_title: "About Me",
    about_text_p1:
      "I am an Informatics student at UNQ and passionate about transforming ideas into functional and visually attractive web interfaces.",
    about_text_p2:
      "Currently, my focus is on development with React and Node.js, where I combine robust backend logic with the creation of modern user experiences (UI/UX). I am always looking for the next challenge to apply my knowledge.",
    about_technical_skills: "Technical Skills",

    // Sección Poject
    project_title: "Projects",
    listProject: [
      {
        id: "trivia",
        src: trivia,
        name: "Trivia Game",
        description:
          "Game inspired by Preguntados, with the frontend built using React + Vite, consuming APIs via fetch and deployed to a server.",
        repoUrl:
          "https://github.com/Nicole-Soares/unq-ui-nicole-soares-trabajo-final",
      },
      {
        id: "instagram",
        src: instagram,
        name: "Instagram clone",
        description:
          "Social network inspired by Instagram. Includes both a web version (React + Vite) and a mobile version (React Native + Expo), each consuming a custom API via Axios/Fetch. The backend is developed in Node.js with Express, providing endpoints for authentication, users, posts, and interactions.",
        repoUrl: "https://github.com/Nicole-Soares/instagram-inspired-clone",
      },
      {
        id: "epersgeist",
        src: epersgeist,
        name: "Epersgeist",
        description: "Service that manages Spirits, Mediums, and Locations. It allows spirits and mediums to communicate with each other through events (Kafka). It exposes its own APIs for connecting to this service, in addition to extra model and persistence functionalities (PostgreSQL, MongoDB, Neo4j).",
        repoUrl: "https://github.com/Nicole-Soares/epersgeist-distributed-persistence",
      },
    ],
    project_more: "LEARN MORE",
    
    //boton contacto
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_submit: "Send",
  },
};
