import { useTranslation } from "react-i18next";
import Reveal from "../Reveal/Reveal";
import AboutMeStyled from "./AboutMeStyled";
import { useDispatch } from "react-redux";
import { switchCVPdfActionCreator } from "../../store/feature/ui/uiSlice";

const AboutMe = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation("global");

  const openResumePdf = () => {
    dispatch(switchCVPdfActionCreator());
  };

  return (
    <>
      <img src="./hexagon2.svg" alt="bg-hexagon" width="100%" height="auto" />
      <AboutMeStyled id="about">
        <div className="section__title-wrapper">
          <div className="section__title-detail-wrapper">
            <Reveal movement={"bottom"} hasColorWrapper={true}>
              <span className="section__title section__title--detail">
                {t("aboutMeTitle1")}
              </span>
            </Reveal>
            <Reveal movement={"bottom"} hasColorWrapper={true}>
              <span className="section__title">{t("aboutMeTitle2")}</span>
            </Reveal>
          </div>
          <div className="section__detail-line" />
        </div>
        <Reveal movement={"bottom"} hasColorWrapper={true}>
          <p className="section__info-wrapper">{t("aboutMe1")}</p>
        </Reveal>
        <Reveal movement={"bottom"} hasColorWrapper={true}>
          <p className="section__info-wrapper">{t("aboutMe2")}</p>
        </Reveal>
        <Reveal movement={"bottom"} hasColorWrapper={true}>
          <p className="section__info-wrapper">{t("aboutMe3")}</p>
        </Reveal>
        <Reveal movement={"bottom"} hasColorWrapper={false}>
          <button className="section__action" onClick={openResumePdf}>
            {t("aboutMe4")}
          </button>
        </Reveal>
      </AboutMeStyled>
    </>
  );
};

export default AboutMe;
