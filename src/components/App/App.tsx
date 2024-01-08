import Hero from "../Hero/Hero";
import AppStyled from "./Appstyled";
import Gadjet from "../Gadjet/Gadjet";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import ProjectsList from "../ProjectsList/ProjectsList";
import ContactForm from "../ContactForm/ContactForm";
import PdfViewer from "../PdfViewer/PdfViewer";
import { useAppSelector } from "../../store/hooks";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme, lightTheme } from "../styles/mainTheme";

const App = () => {
  const isResumeActive = useAppSelector((state) => state.uiState.isCVActive);
  const isLightThemeActive = useAppSelector(
    (state) => state.uiState.isThemeLight
  );

  const currentTheme = isLightThemeActive ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header />
      <Gadjet />
      <AppStyled>
        <Hero />
        <AboutMe />
        {isResumeActive && <PdfViewer />}
        <Skills />
        <ProjectsList />
        <ContactForm />
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
