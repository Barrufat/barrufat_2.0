import { useTranslation } from "react-i18next";
import Reveal from "../Reveal/Reveal";
import AboutMeStyled from "./AboutMeStyled";

const AboutMe = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <img src="./hexagon2.svg" alt="bg-hexagon" width="100%" height="auto" />
      <AboutMeStyled>
        <div className="about__title-wrapper">
          <div className="about__title-detail-wrapper">
            <Reveal>
              <span className="about__title about__title--detail">About</span>
            </Reveal>
            <Reveal>
              <span className="about__title">me</span>
            </Reveal>
          </div>
          <div className="about__detail-line" />
        </div>
        <Reveal>
          <p className="about__info-wrapper">{t("aboutMe1")}</p>
        </Reveal>
        <Reveal>
          <p className="about__info-wrapper">{t("aboutMe2")}</p>
        </Reveal>
        <Reveal>
          <p className="about__info-wrapper">{t("aboutMe3")}</p>
        </Reveal>
        <Reveal>
          <p className="about__info-wrapper">{t("aboutMe4")}</p>
        </Reveal>
      </AboutMeStyled>
    </>
  );
};

export default AboutMe;
