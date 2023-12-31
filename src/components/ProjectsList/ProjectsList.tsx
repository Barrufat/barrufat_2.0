import { projectsList, projectsListSpanish } from "../../textContent/projects";
import Project from "../Project/Project";
import Reveal from "../Reveal/Reveal";
import { useTranslation } from "react-i18next";
import ProjectsListStyled from "./ProjectListStyled";

const ProjectsList = () => {
  const [t, i18n] = useTranslation("global");

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
        {i18n.language === "en" ? (
          <ul>
            {projectsList.map((project) => (
              <li key={project.title}>
                <Project project={project} />
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {projectsListSpanish.map((project) => (
              <li key={project.title}>
                <Project project={project} />
              </li>
            ))}
          </ul>
        )}
      </ProjectsListStyled>
    </>
  );
};

export default ProjectsList;
