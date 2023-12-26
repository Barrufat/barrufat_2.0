import Hero from "../Hero/Hero";
import AppStyled from "./Appstyled";

const App = () => {
  return (
    <AppStyled>
      <img src="./barru-logo.svg" alt="barru-logo" width="200" />
      <Hero />
    </AppStyled>
  );
};

export default App;
