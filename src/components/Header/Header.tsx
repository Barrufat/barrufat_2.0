import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SiGithub, SiLinkedin, SiFreelancer } from "react-icons/si";
import HeaderStyled from "./HeaderStyled";
import Navigation from "../Navigation/Navigation";
import Reveal from "../Reveal/Reveal";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [t, i18n] = useTranslation("global");
  const [currentLenguage, setCurrentLenguage] = useState(false);
  const [isNavigationActive, setIsNavigationActive] = useState(false);

  const switchLenguage = () => {
    setCurrentLenguage(!currentLenguage);

    currentLenguage ? i18n.changeLanguage("en") : i18n.changeLanguage("es");
  };

  const switchNavigation = () => {
    setIsNavigationActive(!isNavigationActive);
  };

  return (
    <>
      <HeaderStyled>
        <Reveal
          movement={"above"}
          hasColorWrapper={false}
          transitionDelay={0.2}
        >
          <button onClick={switchNavigation}>
            <img
              className="header__logo"
              src="./barru-logo.svg"
              alt="barru-logo"
              width="120"
            />
          </button>
        </Reveal>
        <Reveal
          movement={"above"}
          hasColorWrapper={false}
          transitionDelay={0.4}
        >
          <a
            className="header__icon"
            href="https://www.freelancer.es/u/barrufat?from=search"
            target="_blank"
            rel="noreferrer"
          >
            <SiFreelancer />
          </a>
        </Reveal>
        <Reveal
          movement={"above"}
          hasColorWrapper={false}
          transitionDelay={0.6}
        >
          <a
            className="header__icon"
            href="https://github.com/Barrufat"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
        </Reveal>
        <Reveal
          movement={"above"}
          hasColorWrapper={false}
          transitionDelay={0.8}
        >
          <a
            className="header__icon"
            href="https://www.linkedin.com/in/alex-barbero-arrufat/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
        </Reveal>
        <Reveal movement={"above"} hasColorWrapper={false} transitionDelay={1}>
          <div
            className={`lenguage-switch ${
              currentLenguage ? "lenguage-switch__active" : ""
            }`}
          >
            <button
              className="lenguage-switch__button"
              onClick={switchLenguage}
            >
              {currentLenguage ? "ES" : "EN"}
            </button>
          </div>
        </Reveal>
      </HeaderStyled>
      {isNavigationActive && <Navigation />}
    </>
  );
};

export default Header;
