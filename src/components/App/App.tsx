import Hero from "../Hero/Hero";
import AppStyled from "./Appstyled";
import Gadjet from "../Gadjet/Gadjet";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import ProjectsList from "../ProjectsList/ProjectsList";

const App = () => {
  return (
    <>
      <Header />
      <Gadjet />
      <AppStyled>
        <Hero />
        <AboutMe />
        <Skills />
        <ProjectsList />
      </AppStyled>
    </>
  );
};

export default App;
