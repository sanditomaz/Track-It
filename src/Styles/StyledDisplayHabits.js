import styled from "styled-components";

const StyledDisplayHabits = styled.main`
  width: 90%;
  height: 91px;
  border-radius: 5px;
  background-color: #ffffff;
  margin: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 14px;
  margin: 10px 0 10px 20px;

  div {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 20px;
      font-weight: 400;
      color: #666666;
    }
    img {
      width: 13px;
      height: 15px;
      padding-right: 14px;
      cursor: pointer;
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 4px;
  }
`;
export default StyledDisplayHabits;
