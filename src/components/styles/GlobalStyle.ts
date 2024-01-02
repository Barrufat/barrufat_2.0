import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: ${({ theme }) => theme.typography.contentFontFamily};
  font-size: ${({ theme }) => theme.typography.infoSize};
}

body {
  margin: 0;
  scroll-behavior: smooth;
  color:${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBackground}
}

p{
  margin:0;
  line-height: 30px;
  font-weight: 100;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  font-size: 20px;
}

button {
  padding: 0;
  background: none;
  border: none;
  cursor:pointer;
  font-size:inherit;
}

input {
  font-family: inherit;
  padding: 10px;
  border:none;
  border-radius: 5px;
}

img {
  max-width: 100%;
}

h1,
h2 {
  margin: 0;
}

textarea {
  color: #2f2f2f;
  border-radius: 10px;
  background: #ffffffb5;
  width: 100%;
  height: 40px;
  text-align: start;
  font-size: 12px;
  outline: 0px none transparent;
}

  .section {
    &__title {
      color: ${({ theme }) => theme.colors.white};
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.secondSize};

      &--detail {
        color: ${({ theme }) => theme.colors.primaryOlive};
      }

      &-wrapper {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
      }
    }

    &__info-wrapper {
      margin-bottom: 20px;
    }

    &__title-detail-wrapper {
      display: flex;
    }

    &__detail-line {
      height: 1px;
      width: 50%;
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  .frameworks{
    &__container{
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-bottom: 40px;
    }

    &__wrapper{
      background-color:#c66a0070;
      border: solid 1px ${({ theme }) => theme.colors.primaryOrange};
      border-radius: 20px;
      padding: 0 10px;
    }
  }
`;

export default GlobalStyle;
