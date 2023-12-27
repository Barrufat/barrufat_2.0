import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryOlive: string;
      primaryOrange: string;
      darkBackground: string;
      lightBackground: string;
      white: string;
      black: string;
    };

    typography: {
      mainFontFamily: string;
      contentFontFamily: string;
      detailFontFamily: string;
      mainSize: string;
      secondSize: string;
      detailInfoSize: string;
      infoSize: string;
    };
  }
}
