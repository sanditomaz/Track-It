import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: #126ba5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  h1 {
    font-family: "Playball", cursive;
    color: #ffffff;
    font-size: 39px;
    font-weight: 400;
    padding-left: 18px;
  }
  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    padding-right: 10px;
  }
`;

export default StyledHeader;
