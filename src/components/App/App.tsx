import Hero from "../Hero/Hero";
import AppStyled from "./Appstyled";
import Gadjet from "../Gadjet/Gadjet";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";

const App = () => {
  return (
    <>
      <Header />
      <Gadjet />
      <AppStyled>
        <Hero />
        <AboutMe />
      </AppStyled>
    </>
  );
};

export default App;
