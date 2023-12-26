import styled from "styled-components";

const HeroStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .hero {
    &__wrapper {
      margin-top: -40vh;
    }

    &__main-title {
      color: ${({ theme }) => theme.colors.primaryOrange};
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.mainSize};
      text-transform: uppercase;
      display: block;
    }

    &__secondary-title {
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.detailInfoSize};
      font-weight: 100;
      text-transform: uppercase;
    }

    &__detail {
      color: ${({ theme }) => theme.colors.primaryOlive};
    }
  }
`;

export default HeroStyled;
