import { useTranslation } from "react-i18next";
import Reveal from "../Reveal/Reveal";
import SkillsStyled from "./SkillsStyled";
import {
  fullStackTecnologies,
  testingTecnologies,
  agileMetodologies,
} from "../../textContent/frameWorks";

const Skills = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <img src="./hexagon2.svg" alt="bg-hexagon" width="100%" height="auto" />
      <SkillsStyled id="skills">
        <div className="section__title-wrapper section__title-wrapper-right">
          <div className="section__detail-line section__detail-line-right" />
          <div className="section__title-detail-wrapper">
            <Reveal movement={"bottom"} hasColorWrapper={true}>
              <span className="section__title section__title--detail">
                {t("skillsTitle1")}
              </span>
            </Reveal>
            <Reveal movement={"bottom"} hasColorWrapper={true}>
              <span className="section__title">{t("skillsTitle2")}</span>
            </Reveal>
          </div>
        </div>
        <Reveal movement={"bottom"} hasColorWrapper={true}>
          <>
            <p className="section__info-wrapper">{t("skills1")}</p>
            <div className="frameworks__container">
              {fullStackTecnologies.map(
                (tecnology: string, id): React.ReactElement => (
                  <span key={id} className="frameworks__wrapper">
                    {tecnology}
                  </span>
                )
              )}
            </div>
          </>
        </Reveal>
        <Reveal movement={"bottom"} hasColorWrapper={true}>
          <>
            <p className="section__info-wrapper">{t("skills2")}</p>
            <div className="frameworks__container">
              {testingTecnologies.map(
                (tecnology: string, id): React.ReactElement => (
                  <span key={id} className="frameworks__wrapper">
                    {tecnology}
                  </span>
                )
              )}
            </div>
          </>
        </Reveal>
        <Reveal movement={"bottom"} hasColorWrapper={true}>
          <>
            <p className="section__info-wrapper">{t("skills3")}</p>
            <div className="frameworks__container">
              {agileMetodologies.map(
                (tecnology: string, id): React.ReactElement => (
                  <span key={id} className="frameworks__wrapper">
                    {tecnology}
                  </span>
                )
              )}
            </div>
          </>
        </Reveal>
      </SkillsStyled>
    </>
  );
};

export default Skills;
