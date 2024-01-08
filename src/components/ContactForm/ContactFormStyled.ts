import styled from "styled-components";

const ContactFormStyled = styled.section`
  padding: 120px 30px 40px 30px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  .contact-form {
    &__wrapper {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    &__text {
      margin-bottom: 30px;
    }

    &__label {
      color: ${({ theme }) => theme.colors.primaryOlive};
    }

    &__input {
      width: 100%;
      padding: 20px 10px;
      font-size: ${({ theme }) => theme.typography.infoSize};
    }

    &__textarea {
      padding: 20px 10px;
      background-color: white;
      height: 50vh;
      font-size: ${({ theme }) => theme.typography.infoSize};
    }

    &__action {
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      border-radius: 40px;
      color: ${({ theme }) => theme.colors.contentColor};
      background-color: ${({ theme }) => theme.colors.primaryOrange};
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.secondSize};
    }

    &__link {
      color: ${({ theme }) => theme.colors.primaryOlive};
      font-size: ${({ theme }) => theme.typography.infoSize};
    }
  }

  @media (min-width: 500px) {
    padding: 120px 30vw 50px 30vw;

    .contact-form {
      &__action {
        width: 40%;
        font-family: ${({ theme }) => theme.typography.mainFontFamily};
        font-size: ${({ theme }) => theme.typography.detailInfoSize};
      }
    }
  }
`;

export default ContactFormStyled;
