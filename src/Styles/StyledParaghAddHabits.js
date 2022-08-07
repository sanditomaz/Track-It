import styled from "styled-components";

const StyledParagraph = styled.p`
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  background-color: ${(props) => props.backGroundColor};
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: ${({ pointer }) => (pointer ? "none" : "auto")};
`;

export default StyledParagraph;
