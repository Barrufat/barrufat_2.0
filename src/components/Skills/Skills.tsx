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
      <SkillsStyled>
        <div className="section__title-wrapper">
          <div className="section__detail-line" />
          <div className="section__title-detail-wrapper">
            <Reveal>
              <span className="section__title section__title--detail">
                {t("skillsTitle1")}
              </span>
            </Reveal>
            <Reveal>
              <span className="section__title">{t("skillsTitle2")}</span>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <>
            <p className="section__info-wrapper">{t("skills1")}</p>
            <div className="frameworks__container">
              {fullStackTecnologies.map(
                (tecnology: string): React.ReactElement => (
                  <span className="frameworks__wrapper">{tecnology}</span>
                )
              )}
            </div>
          </>
        </Reveal>
        <Reveal>
          <>
            <p className="section__info-wrapper">{t("skills2")}</p>
            <div className="frameworks__container">
              {testingTecnologies.map(
                (tecnology: string): React.ReactElement => (
                  <span className="frameworks__wrapper">{tecnology}</span>
                )
              )}
            </div>
          </>
        </Reveal>
        <Reveal>
          <>
            <p className="section__info-wrapper">{t("skills3")}</p>
            <div className="frameworks__container">
              {agileMetodologies.map(
                (tecnology: string): React.ReactElement => (
                  <span className="frameworks__wrapper">{tecnology}</span>
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
