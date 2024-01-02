import { ProjectStructure } from "../components/types";

export const projectsList: ProjectStructure[] = [
  {
    demo: "https://alex-barbero-202309-bcn-front.netlify.app/home",
    description:
      "My Box is built using the SPA (Single Page Application) architecture pattern to provide a seamless and uninterrupted user experience. Additionally, users can enjoy various features that facilitate the management of their vynil records collection.\n The page offers an extensive list of items with informative details. To achieve this, Axios is used to make HTTP requests to the backend API and fetch the necessary data to display in the interface.\n It allows users to easily add, delete, and modify figures in their collection through intuitive forms, significantly improving the management of the collection.\n Error and success notifications have been implemented using Toastify to provide clear and user-friendly information when using the platform. This ensures a smooth and confusion-free user experience.",
    image: "./montajeMYBOX.png",
    tecnologies: [
      "React",
      "ExpressJs",
      "NodeJs",
      "Redux",
      "Jest",
      "Vitest",
      "Typescript",
    ],
    title: "My Box",
    githubFront:
      "https://github.com/Barrufat/202309-w12-final-project-front-alex-barbero",
    githubBack:
      "https://github.com/Barrufat/202309-w12-final-project-back-alex-barbero",
  },
  {
    demo: "https://daikinish23.com",
    description:
      "In collaboration with the PixelOn team, we developed an exclusive website for the Daiki ISH23 event. This virtual space provides detailed information about the event, including schedules, featured speakers, and activities. Stay connected with the latest updates and participate in unique interactive experiences that capture the essence of the Daiki ISH23 event. 🌐🚀",
    image: "./montajeDAIKIN.png",
    tecnologies: ["Javascript", "Html", "Css", "Wordpress"],
    title: "Daiki ISH23",
  },
  {
    demo: "https://elgratx.com",
    description:
      "E-commerce for a workshop specialized in screen printing and image creation. The user can view the products, add them to the cart and finally make the purchase. On the page you will also find all the information about the events and courses that are held and make reservations to use the space.",
    image: "./montajeGratx.png",
    tecnologies: ["Javascript", "Html", "Css", "Wordpress"],
    title: "El Gratx l'H",
  },
];

export const projectsListSpanish: ProjectStructure[] = [
  {
    demo: "https://alex-barbero-202309-bcn-front.netlify.app/home",
    description:
      "My Box está construido utilizando el patrón de arquitectura SPA (aplicación de página única) para brindar una experiencia de usuario perfecta e ininterrumpida. Además, los usuarios pueden disfrutar de diversas funciones que facilitan la gestión de su colección de discos de vinilo.\n La página ofrece una lista extensa de elementos con detalles de cada uno de los discos. Se utiliza Axios para realizar solicitudes HTTP a la API backend y obtener los datos necesarios para mostrarlos en la interfaz.\n Permite a los usuarios agregar, eliminar y modificar fácilmente figuras en su colección a través de formularios intuitivos, lo que mejora significativamente la gestión de la colección.\n Se han implementado notificaciones de error y éxito con Toastify para proporcionar información clara y fácil de usar al utilizar la plataforma. Esto garantiza una experiencia de usuario fluida y sin confusiones.",
    image: "./montajeMYBOX.png",
    tecnologies: [
      "React",
      "ExpressJs",
      "NodeJs",
      "Redux",
      "Jest",
      "Vitest",
      "Typescript",
    ],
    title: "My Box",
    githubFront:
      "https://github.com/Barrufat/202309-w12-final-project-front-alex-barbero",
    githubBack:
      "https://github.com/Barrufat/202309-w12-final-project-back-alex-barbero",
  },
  {
    demo: "https://daikinish23.com",
    description:
      "En colaboración con el equipo de PixelOn, desarrollamos un sitio web exclusivo para el evento Daiki ISH23. Este espacio virtual proporciona información detallada sobre el evento, incluidos horarios, oradores destacados y actividades. Manténgase conectado con las últimas actualizaciones y participe en experiencias interactivas únicas que capturan la esencia del evento Daiki ISH23. 🌐🚀",
    image: "./montajeDAIKIN.png",
    tecnologies: ["Javascript", "Html", "Css", "Wordpress"],
    title: "Daiki ISH23",
  },
  {
    demo: "https://elgratx.com",
    description:
      "E-commerce de el Gratx, taller especializado en serigrafía y la creación de imagen. El usuario puede visualizar los productos, añadirlos al carrito y finalmente realizar la compra. En la pagina también encontrarás toda la información de los eventos y cursos que se realizan y realizar reservas para usar el espacio. ",
    image: "./montajeGratx.png",
    tecnologies: ["Javascript", "Html", "Css", "Wordpress"],
    title: "El Gratx l'H",
  },
];
