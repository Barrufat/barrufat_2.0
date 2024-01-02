import styled from "styled-components";

const PdfViewerStyled = styled.section`
  margin-top: 70px;
  padding-bottom: 20vh;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default PdfViewerStyled;
