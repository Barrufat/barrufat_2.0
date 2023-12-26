import { useTranslation } from "react-i18next";
import Reveal from "../Reveal/Reveal";
import HeroStyled from "./HeroStyled";

const Hero = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <HeroStyled>
      <div className="hero__wrapper">
        <Reveal>
          <span className="hero__secondary-title">
            Hi there <span className="hero__detail">!</span>
          </span>
        </Reveal>
        <Reveal>
          <h1 className="hero__main-title">I'm Alex</h1>
        </Reveal>
        <Reveal>
          <span className="hero__secondary-title">
            <span className="hero__detail">FullStack</span> developer
          </span>
        </Reveal>
        <Reveal>
          <p className="hero__greeting-text">{t("presentacion1")}</p>
        </Reveal>
      </div>
    </HeroStyled>
  );
};

export default Hero;
