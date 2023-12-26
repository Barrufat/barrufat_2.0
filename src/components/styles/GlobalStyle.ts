import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: ${({ theme }) => theme.typography.contentFontFamily}
}

body {
  margin: 0;
  color:${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBackground}
}

p{
  margin:0;
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
}

input {
  font-family: inherit;
  text-align: center;
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
`;

export default GlobalStyle;
