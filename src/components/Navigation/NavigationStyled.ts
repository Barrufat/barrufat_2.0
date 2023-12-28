import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  position: fixed;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  background: #70f0003b;
  border-radius: 0 0 30px 0;
  backdrop-filter: blur(12px);
  padding-bottom: 30px;
  width: 50px;

  .nav {
    &__link {
      margin-top: 30px;
      padding: 10px;
      width: 100%;
      writing-mode: vertical-lr;
      transition: all 0.1s;
    }
  }

  .active {
    background: ${({ theme }) => theme.colors.darkBackground};
  }
`;

export default NavigationStyled;
