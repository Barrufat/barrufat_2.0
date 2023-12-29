import { useState } from "react";
import { Link } from "react-scroll";
import NavigationStyled from "./NavigationStyled";
import Reveal from "../Reveal/Reveal";

const Navigation = () => {
  const [active, setActive] = useState("");

  const updateActive = (currentActive: string) => {
    setActive(currentActive);
  };

  return (
    <NavigationStyled>
      <ul>
        <li>
          <Reveal movement={"left"} hasColorWrapper={false} transitionDelay={0}>
            <Link
              smooth={true}
              offset={50}
              duration={500}
              className={`nav__link ${active === "hero" ? "active" : ""}`}
              to="hero"
              onClick={() => updateActive("hero")}
            >
              Hero
            </Link>
          </Reveal>
        </li>
        <li>
          <Reveal
            movement={"left"}
            hasColorWrapper={false}
            transitionDelay={0.1}
          >
            <Link
              smooth={true}
              offset={50}
              duration={500}
              className={`nav__link ${active === "about" ? "active" : ""}`}
              to="about"
              onClick={() => updateActive("about")}
            >
              About
            </Link>
          </Reveal>
        </li>
        <li>
          <Reveal
            movement={"left"}
            hasColorWrapper={false}
            transitionDelay={0.2}
          >
            <Link
              smooth={true}
              offset={50}
              duration={500}
              className={`nav__link ${active === "skills" ? "active" : ""}`}
              to="skills"
              onClick={() => updateActive("skills")}
            >
              Skills
            </Link>
          </Reveal>
        </li>
        <li>
          <Reveal
            movement={"left"}
            hasColorWrapper={false}
            transitionDelay={0.3}
          >
            <Link
              smooth={true}
              offset={50}
              duration={500}
              className={`nav__link ${active === "projects" ? "active" : ""}`}
              to="projects"
              onClick={() => updateActive("projects")}
            >
              Projects
            </Link>
          </Reveal>
        </li>
        <li>
          <Reveal
            movement={"left"}
            hasColorWrapper={false}
            transitionDelay={0.4}
          >
            <Link
              smooth={true}
              offset={50}
              duration={500}
              className={`nav__link ${active === "contact" ? "active" : ""}`}
              to="contact"
              onClick={() => updateActive("contact")}
            >
              Contact
            </Link>
          </Reveal>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
