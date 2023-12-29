import { ProjectStructure } from "../types";
import { SiGithub, SiNetlify } from "react-icons/si";
import ProjectStyled from "./ProjectStyled";
import Reveal from "../Reveal/Reveal";

interface ProjectProps {
  project: ProjectStructure;
}

const Project = ({
  project: {
    company,
    demo,
    description,
    githubFront,
    image,
    tecnologies,
    title,
    githubBack,
  },
}: ProjectProps) => {
  const currentTecnologies = tecnologies.join(" - ");

  return (
    <ProjectStyled>
      <img src={image} alt={title} width="300" />
      <div className="project__title-wrapper">
        <h2 className="project__title">{title}</h2>

        <div className="section__detail-line" />
        <a
          className="project__icon"
          href={githubFront}
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub />
        </a>
        {githubBack && (
          <a
            className="project__icon"
            href={githubBack}
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
        )}
        <a
          className="project__icon"
          href={demo}
          target="_blank"
          rel="noreferrer"
        >
          <SiNetlify />
        </a>
      </div>
      <Reveal movement={"bottom"} hasColorWrapper={true}>
        <>
          <span className="project__info">{company}</span>
          <span className="project__info">{currentTecnologies}</span>
        </>
      </Reveal>
      <Reveal movement={"bottom"} hasColorWrapper={true}>
        <p>{description}</p>
      </Reveal>
    </ProjectStyled>
  );
};

export default Project;
