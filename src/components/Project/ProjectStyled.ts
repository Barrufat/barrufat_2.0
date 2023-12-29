import styled from "styled-components";

const ProjectStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;

  .project {
    &__title {
      width: 100%;
    }

    &__title-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      text-align: center;
    }
  }
`;

export default ProjectStyled;
