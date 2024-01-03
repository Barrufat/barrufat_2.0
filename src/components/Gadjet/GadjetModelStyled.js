import styled from "styled-components";

const GadjetModelStyled = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: -20vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 0;

  .gadjet {
    &__wrapper {
      margin-top: -20vh;
    }
  }

  @media (min-width: 500px) {
    height: 160vh;
    padding-left: 35vw;

    .gadjet {
      &__wrapper {
        margin-top: -30vh;
      }
    }
  }
`;

export default GadjetModelStyled;
