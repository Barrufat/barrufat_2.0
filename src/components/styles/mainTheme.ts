import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  colors: {
    primaryOrange: "#c66a00",
    primaryOlive: "#70F000",
    contentColor: "#ebecf3;",
    background: "#101b06",
  },
  typography: {
    mainFontFamily: "'Gajraj One', cursive",
    detailFontFamily: "'Permanent Marker', sans-serif;",
    contentFontFamily: "'Roboto', sans-serif;",
    mainSize: "60px",
    secondSize: "45px",
    detailInfoSize: "28px",
    infoSize: "22px",
  },
};

export const lightTheme: DefaultTheme = {
  colors: {
    primaryOrange: "#70F000",
    primaryOlive: "#c66a00",
    contentColor: "#101b06",
    background: "#efffe9",
  },
  typography: {
    mainFontFamily: "'Gajraj One', cursive",
    detailFontFamily: "'Permanent Marker', sans-serif;",
    contentFontFamily: "'Roboto', sans-serif;",
    mainSize: "60px",
    secondSize: "45px",
    detailInfoSize: "28px",
    infoSize: "22px",
  },
};
