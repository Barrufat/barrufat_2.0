import { projectsList } from "../../textContent/projects";
import Project from "../Project/Project";
import Reveal from "../Reveal/Reveal";
import { useTranslation } from "react-i18next";
import ProjectsListStyled from "./ProjectListStyled";

const ProjectsList = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <img src="./hexagon2.svg" alt="bg-hexagon" width="100%" height="auto" />
      <ProjectsListStyled id="projects">
        <div className="section__title-wrapper">
          <div className="section__title-detail-wrapper">
            <Reveal movement="bottom" hasColorWrapper={true}>
              <span className="section__title section__title--detail">
                {t("projectsTitle1")}
              </span>
            </Reveal>
            <Reveal movement={"bottom"} hasColorWrapper={true}>
              <span className="section__title">{t("projectsTitle2")}</span>
            </Reveal>
          </div>
          <div className="section__detail-line" />
        </div>
        <ul>
          {projectsList.map((project) => (
            <Project project={project} />
          ))}
        </ul>
      </ProjectsListStyled>
    </>
  );
};

export default ProjectsList;
