import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { Provider } from "react-redux";
import "@fontsource/gajraj-one";
import "@fontsource/permanent-marker";
import "@fontsource/roboto";
import "@fontsource/roboto/100.css";
import global_es from "./textContent/es/global.json";
import global_en from "./textContent/en/global.json";
import { store } from "./store";
import App from "./components/App/App";

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
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
