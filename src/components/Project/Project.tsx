import { ProjectStructure } from "../types";
import { SiGithub, SiNetlify } from "react-icons/si";
import ProjectStyled from "./ProjectStyled";
import Reveal from "../Reveal/Reveal";
import { useState } from "react";

interface ProjectProps {
  project: ProjectStructure;
}

const Project = ({
  project: {
    demo,
    description,
    githubFront,
    image,
    tecnologies,
    title,
    githubBack,
  },
}: ProjectProps) => {
  const [isDetailsActive, setIsDetailsActive] = useState(false);
  const currentTecnologies = tecnologies.join(" - ");

  const descriptionResume = description.split(" ").slice(0, 20).join(" ");

  const switchDetails = (isActive: boolean) => {
    setIsDetailsActive(isActive);
  };

  return (
    <ProjectStyled>
      <div className="project__image-wrapper">
        <img src={image} alt={title} width="300" height="168.9" />
      </div>
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
        <span className="project__info project__info-detail">
          {currentTecnologies}
        </span>
      </Reveal>
      <Reveal movement={"bottom"} hasColorWrapper={true}>
        <p>
          {descriptionResume}..
          <button
            className="project__info-detail"
            onClick={() => switchDetails(true)}
          >
            {" "}
            Learn more {">"}
          </button>
        </p>
      </Reveal>
      {isDetailsActive && (
        <div className="details__wrapper">
          <div className="details__image-wrapper">
            <button
              className="details__close"
              onClick={() => switchDetails(false)}
            >
              X
            </button>
            <img
              className="details-image"
              src={image}
              alt={title}
              width="300"
              height="168.9"
            />
          </div>
          <div className="details__wrapper-card">
            <div className="project__title-wrapper">
              <h2 className="project__title">{title}</h2>
              <a
                className="details__icon"
                href={githubFront}
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub />
              </a>
              {githubBack && (
                <a
                  className="details__icon"
                  href={githubBack}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGithub />
                </a>
              )}
              <a
                className="details__icon"
                href={demo}
                target="_blank"
                rel="noreferrer"
              >
                <SiNetlify />
              </a>
            </div>
            <span className="project__info project__info-detail">
              {currentTecnologies}
            </span>
            <p className="details__info">{description}</p>
          </div>
        </div>
      )}
    </ProjectStyled>
  );
};

export default Project;
