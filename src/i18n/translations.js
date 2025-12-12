import trivia from "../assets/projects/trivia.png";
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
    project_title:"Proyectos",
    listProject:[
        {
          id: "trivia",
          src: trivia,
          name: "Trivia Game",
          description:
            "Juego inspirado en el Preguntados, se realiazo el front con react + vite, consumiendo apis mediante fetch y subido a un servidor",
          liveUrl: "https://unq-ui-nicole-soares-trabajo-final.vercel.app/",
          repoUrl: "https://github.com/Nicole-Soares/unq-ui-nicole-soares-trabajo-final",
        },
      ],
     project_live:"APP EN VIVO",
    project_more: "MÁS INFORMACIÓN"
    
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
    project_title:"Projects",
    listProject:[
      {
        id: "trivia",
        src: trivia,
        name: "Trivia Game",
        description:
        "Game inspired by Preguntados, with the frontend built using React + Vite, consuming APIs via fetch and deployed to a server.",
        liveUrl: "https://unq-ui-nicole-soares-trabajo-final.vercel.app/",
        repoUrl: "https://github.com/Nicole-Soares/unq-ui-nicole-soares-trabajo-final",
      },
    ],
    project_live:"LIVE APP",
    project_more: "LEARN MORE"
  },
};
