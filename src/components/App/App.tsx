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

const App = () => {
  const isResumeActive = useAppSelector((state) => state.uiState.isCVActive);

  return (
    <>
      <Header />
      <Gadjet />
      <AppStyled>
        {isResumeActive && <PdfViewer />}
        <Hero />
        <AboutMe />
        <Skills />
        <ProjectsList />
        <ContactForm />
      </AppStyled>
    </>
  );
};

export default App;
