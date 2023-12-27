import styled from "styled-components";

const AboutMeStyled = styled.section`
  .about {
    &__title {
      color: ${({ theme }) => theme.colors.white};
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.mainSize};

      &--detail {
        color: ${({ theme }) => theme.colors.primaryOlive};
      }

      &-wrapper {
        display: flex;
      }
    }

    &__info-wrapper {
      margin-bottom: 20px;
    }
  }
`;

export default AboutMeStyled;
