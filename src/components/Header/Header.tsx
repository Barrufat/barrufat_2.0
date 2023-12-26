import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SiGithub, SiLinkedin, SiFreelancer } from "react-icons/si";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [currentLenguage, setCurrentLenguage] = useState(false);

  const switchLenguage = () => {
    setCurrentLenguage(!currentLenguage);

    currentLenguage ? i18n.changeLanguage("en") : i18n.changeLanguage("es");
  };

  return (
    <>
      <HeaderStyled>
        <a
          className="icono"
          href="https://www.freelancer.es/u/barrufat?from=search"
          target="_blank"
          rel="noreferrer"
        >
          <SiFreelancer />
        </a>
        <a
          className="icono"
          href="https://github.com/Barrufat"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub />
        </a>
        <a
          className="icono"
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
