import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SiGithub, SiLinkedin, SiFreelancer } from "react-icons/si";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [t, i18n] = useTranslation("global");
  const [currentLenguage, setCurrentLenguage] = useState(false);

  const switchLenguage = () => {
    setCurrentLenguage(!currentLenguage);

    currentLenguage ? i18n.changeLanguage("en") : i18n.changeLanguage("es");
  };

  return (
    <>
      <HeaderStyled>
        <img
          className="header__logo"
          src="./barru-logo.svg"
          alt="barru-logo"
          width="120"
        />
        <a
          className="header__icon"
          href="https://www.freelancer.es/u/barrufat?from=search"
          target="_blank"
          rel="noreferrer"
        >
          <SiFreelancer />
        </a>
        <a
          className="header__icon"
          href="https://github.com/Barrufat"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub />
        </a>
        <a
          className="header__icon"
          href="https://www.linkedin.com/in/alex-barbero-arrufat/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin />
        </a>
        <div
          className={`lenguage-switch ${
            currentLenguage ? "lenguage-switch__active" : ""
          }`}
        >
          <button className="lenguage-switch__button" onClick={switchLenguage}>
            {currentLenguage ? "ES" : "EN"}
          </button>
        </div>
      </HeaderStyled>
    </>
  );
};

export default Header;
