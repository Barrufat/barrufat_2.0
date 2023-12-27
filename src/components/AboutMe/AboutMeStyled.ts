import styled from "styled-components";

const AboutMeStyled = styled.section`
  padding: 0 30px;
  .about {
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
      width: 100%;
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export default AboutMeStyled;
