import styled from "styled-components";

const ProjectsListStyled = styled.section`
  padding: 120px 30px 0 30px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) {
    padding: 120px 15vw 0 15vw;

    .projects-list {
      &__wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        justify-items: center;
        justify-content: space-around;
        position: relative;
      }
    }
  }
`;

export default ProjectsListStyled;
