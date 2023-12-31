import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SiGithub, SiLinkedin, SiFreelancer } from "react-icons/si";
import HeaderStyled from "./HeaderStyled";
import Navigation from "../Navigation/Navigation";
import Reveal from "../Reveal/Reveal";
import useOutsideClick from "../../hooks/useOutsideClick";

const Header = () => {
  const [__t, i18n] = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState(false);
  const [isNavigationActive, setIsNavigationActive] = useState(false);

  const switchNavigation = (isActive: boolean) => {
    setIsNavigationActive(isActive);
  };

  const handleClickOutside = () => {
    switchNavigation(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const switchLanguage = () => {
    setCurrentLanguage(!currentLanguage);

    currentLanguage ? i18n.changeLanguage("en") : i18n.changeLanguage("es");
  };

  return (
    <>
      <HeaderStyled>
        <Reveal
          movement={"above"}
          hasColorWrapper={false}
          transitionDelay={0.2}
        >
          <button ref={ref} onClick={() => switchNavigation(true)}>
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
            className={`language-switch ${
              currentLanguage ? "language-switch__active" : ""
            }`}
          >
            <button
              className="language-switch__button"
              onClick={switchLanguage}
            >
              {currentLanguage ? "ES" : "EN"}
            </button>
          </div>
        </Reveal>
      </HeaderStyled>
      {isNavigationActive && <Navigation />}
    </>
  );
};

export default Header;
