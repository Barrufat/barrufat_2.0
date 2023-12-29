import { ProjectStructure } from "../components/types";

export const projectsList: ProjectStructure[] = [
  {
    demo: "https://alex-barbero-202309-bcn-front.netlify.app/home",
    description: "CRUD project for Vynil records",
    image: "./montajeDAIKIN.png",
    tecnologies: [
      "React",
      "ExpressJs",
      "NodeJs",
      "Redux",
      "Jest",
      "Typescript",
    ],
    title: "My Box",
    githubFront:
      "https://github.com/Barrufat/202309-w12-final-project-front-alex-barbero",
    githubBack:
      "https://github.com/Barrufat/202309-w12-final-project-back-alex-barbero",
  },
  {
    company: "DAIKIN",
    demo: "",
    description: "",
    image: "./montajeDAIKIN.png",
    tecnologies: [],
    title: "",
    githubFront: "",
    githubBack: "",
  },
  {
    company: "El Gratx",
    demo: "https://elgratx.com",
    description: "E-commerce",
    image: "./montajeGratx.png",
    tecnologies: ["wordpress", "javascript", "html", "css"],
    title: "El Gratx l'H",
  },
];
