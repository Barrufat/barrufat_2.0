import styled from "styled-components";

const RevealStyled = styled.div`
  position: relative;
  overflow: hidden;

  .orange-marker {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 0;
    right: 0;
    background: orange;
    z-index: 2;
    border-radius: 50px 0 0 50px;
  }
`;

export default RevealStyled;
