import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 3;
  backdrop-filter: blur(12px);
  align-items: center;
  background: #2f372840;

  .switch {
    width: 50px;
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    border-radius: 30px;
    border: solid 1.5px black;
    background-color: ${({ theme }) => theme.colors.primaryOrange};
    transition: all 0.4s ease-out;

    &__active {
      justify-content: flex-end;
      transition: all 0.4s ease-out;
    }

    &__button {
      justify-content: flex-end;
      cursor: pointer;
      border-radius: 30px;
      background-color: #fff;
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      padding: 3px 5px;
      border: solid 1.5px ${({ theme }) => theme.colors.primaryOrange};
      color: #000;
      font-size: small;
    }
  }

  .header {
    &__icon {
      color: ${({ theme }) => theme.colors.contentColor};
      text-decoration: none;
      font-size: larger;

      :hover {
        color: rgb(228, 136, 31);
      }
    }
  }
`;

export default HeaderStyled;
