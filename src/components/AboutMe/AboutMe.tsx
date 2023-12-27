import { useTranslation } from "react-i18next";
import Reveal from "../Reveal/Reveal";
import AboutMeStyled from "./AboutMeStyled";

const AboutMe = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <img src="./hexagon2.svg" alt="bg-hexagon" width="100%" height="auto" />
      <AboutMeStyled>
        <div className="section__title-wrapper">
          <div className="section__title-detail-wrapper">
            <Reveal>
              <span className="section__title section__title--detail">
                {t("aboutMeTitle1")}
              </span>
            </Reveal>
            <Reveal>
              <span className="section__title">{t("aboutMeTitle2")}</span>
            </Reveal>
          </div>
          <div className="section__detail-line" />
        </div>
        <Reveal>
          <p className="section__info-wrapper">{t("aboutMe1")}</p>
        </Reveal>
        <Reveal>
          <p className="section__info-wrapper">{t("aboutMe2")}</p>
        </Reveal>
        <Reveal>
          <p className="section__info-wrapper">{t("aboutMe3")}</p>
        </Reveal>
      </AboutMeStyled>
    </>
  );
};

export default AboutMe;
