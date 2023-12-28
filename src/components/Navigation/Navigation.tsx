import { useState } from "react";
import { Link } from "react-scroll";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
  const [active, setActive] = useState("");

  const updateActive = (currentActive: string) => {
    setActive(currentActive);
  };

  return (
    <NavigationStyled>
      <ul>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
