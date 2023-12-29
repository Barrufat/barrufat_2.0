import { useTranslation } from "react-i18next";
import Reveal from "../Reveal/Reveal";
import HeroStyled from "./HeroStyled";

const Hero = () => {
  const [t] = useTranslation("global");

  return (
    <HeroStyled>
      <div className="hero__wrapper">
        <Reveal movement={"bottom"} hasColorWrapper={true}>
          <span className="hero__secondary-title">
            {t("greetingTitle1")} <span className="hero__detail">!</span>
          </span>
        </Reveal>
        <Reveal movement={"bottom"} hasColorWrapper={true}>
          <h1 className="hero__main-title">{t("greetingTitle2")}</h1>
        </Reveal>
        <Reveal movement={"bottom"} hasColorWrapper={true}>
          <span className="hero__secondary-title">
            <span className="hero__detail">FullStack</span> developer
          </span>
        </Reveal>
        <Reveal movement={"bottom"} hasColorWrapper={true}>
          <p>{t("greeting")}</p>
        </Reveal>
      </div>
    </HeroStyled>
  );
};

export default Hero;
