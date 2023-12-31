import styled from "styled-components";

const ProjectStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
  margin: 30px 0 70px 0;

  .project {
    &__title {
      width: 50%;
    }

    &__title-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__image-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      overflow-y: hidden;
      height: 18vh;
      background-color: #ffffff1c;
      padding-top: 20px;
      border-radius: 10px 10px 0 0;
    }

    &__icon {
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      font-size: larger;
      margin-left: 0.5rem;

      :hover {
        color: ${({ theme }) => theme.colors.primaryOlive};
      }
    }

    &__info {
      display: flex;
      width: 100%;
      font-weight: 100;
      font-size: ${({ theme }) => theme.typography};

      &-detail {
        color: ${({ theme }) => theme.colors.primaryOlive};
      }
    }
  }

  .details {
    &__wrapper {
      position: fixed;
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: 4;
      backdrop-filter: blur(12px);
      padding: 20px 20px 20px 20px;

      &-card {
        border-radius: 0 0 20px 20px;
        padding: 20px 20px 20px 20px;
        background-color: #253716;
        gap: 1rem;
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        overflow-y: scroll;
      }
    }

    &__image-wrapper {
      padding: 20px 20px 20px 20px;
      border-radius: 20px 20px 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.lightBackground};
    }

    &__close {
      color: ${({ theme }) => theme.colors.darkBackground};
      width: 100%;
      text-align: end;
    }

    &__info {
      overflow-y: scroll;
    }

    &__icon {
      color: ${({ theme }) => theme.colors.primaryOlive};
      text-decoration: none;
      font-size: larger;
      margin-left: 0.5rem;

      :hover {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export default ProjectStyled;
