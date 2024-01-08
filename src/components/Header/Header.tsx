import { LegacyRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SiGithub, SiLinkedin, SiFreelancer } from "react-icons/si";
import HeaderStyled from "./HeaderStyled";
import Navigation from "../Navigation/Navigation";
import Reveal from "../Reveal/Reveal";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { switchColorThemeActionCreator } from "../../store/feature/ui/uiSlice";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [__t, i18n] = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState(false);
  const [isNavigationActive, setIsNavigationActive] = useState(false);
  const isLightThemeActive = useAppSelector(
    (state) => state.uiState.isThemeLight
  );

  const dispatch = useDispatch();

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

  const switchTheme = () => {
    dispatch(switchColorThemeActionCreator());
  };

  return (
    <>
      <HeaderStyled>
        <Reveal
          movement={"above"}
          hasColorWrapper={false}
          transitionDelay={0.2}
        >
          <button
            ref={ref as unknown as LegacyRef<HTMLButtonElement>}
            onClick={() => switchNavigation(true)}
          >
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
          <div className={`switch ${currentLanguage ? "switch__active" : ""}`}>
            <button className="switch__button" onClick={switchLanguage}>
              {currentLanguage ? "ES" : "EN"}
            </button>
          </div>
        </Reveal>
        <Reveal
          movement={"above"}
          hasColorWrapper={false}
          transitionDelay={1.2}
        >
          <div
            className={`switch ${isLightThemeActive ? "switch__active" : ""}`}
          >
            <button className="switch__button" onClick={switchTheme}>
              {isLightThemeActive ? "☀️" : "🌙"}
            </button>
          </div>
        </Reveal>
      </HeaderStyled>
      {isNavigationActive && <Navigation />}
    </>
  );
};

export default Header;
