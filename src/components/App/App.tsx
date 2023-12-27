import Hero from "../Hero/Hero";
import AppStyled from "./Appstyled";
import Gadjet from "../Gadjet/Gadjet";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Gadjet />
      <AppStyled>
        <Hero />
        <AboutMe />
        <Skills />
      </AppStyled>
    </>
  );
};

export default App;
