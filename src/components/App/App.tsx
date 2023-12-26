import Hero from "../Hero/Hero";
import AppStyled from "./Appstyled";
import Gadjet from "../Gadjet/Gadjet";
import Header from "../Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Gadjet />
      <AppStyled>
        <Hero />
      </AppStyled>
    </>
  );
};

export default App;
