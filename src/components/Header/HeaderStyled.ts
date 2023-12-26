import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 1;
  backdrop-filter: blur(12px);
  align-items: center;
  background: #2f372800;

  .lenguage-switch {
    width: 60px;
    margin-top: -10px;
    display: flex;
    justify-content: flex-start;
    border-radius: 30px;
    border: solid 3px rgb(228, 136, 31);
    background-color: rgb(228, 136, 31);
    transition: ease-in-out;

    &__active {
      justify-content: flex-end;
    }

    &__button {
      justify-content: flex-end;
      cursor: pointer;
      border-radius: 30px;
      background-color: white;
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      padding: 3px 5px;
      color: rgb(228, 136, 31);
      border: none;
      font-size: large;
    }
  }

  a.icono {
    color: white;
    text-decoration: none;
    font-size: xx-large;
  }

  .icono:hover {
    color: rgb(228, 136, 31);
  }
`;

export default HeaderStyled;
