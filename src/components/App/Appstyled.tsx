import styled from "styled-components";

const AppStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -60vh;

  @media (min-width: 500px) {
    margin-top: -35vh;
  }
`;

export default AppStyled;
