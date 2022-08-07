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
  margin: 10px 0 10px 10px;

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
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 4px;
    /*  p {
      width: 30px;
      height: 30px;
      border: 1px solid #dbdbdb;
      background-color: ${(props) => props.clickedColor};
      border-radius: 5px;
      font-size: 20px;
      font-weight: 400;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    } */
  }
`;
export default StyledDisplayHabits;
