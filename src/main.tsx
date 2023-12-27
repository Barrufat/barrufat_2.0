import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "@fontsource/gajraj-one";
import "@fontsource/permanent-marker";
import "@fontsource/roboto";
import "@fontsource/roboto/100.css";
import GlobalStyle from "./components/styles/GlobalStyle";
import mainTheme from "./components/styles/mainTheme";

import global_es from "./textContent/es/global.json";
import global_en from "./textContent/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <I18nextProvider i18n={i18next}>
        <GlobalStyle />
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
