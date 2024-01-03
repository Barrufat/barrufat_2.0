import styled from "styled-components";

const HeroStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  .hero {
    &__wrapper {
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

  @media (min-width: 500px) {
    margin-top: -105vh;
    padding: 0px 15vw 0 15vw;

    .hero {
      &__wrapper {
        width: 80vw;
        padding-right: 35vw;
        margin-bottom: 40vh;
      }
    }
  }
`;

export default HeroStyled;
