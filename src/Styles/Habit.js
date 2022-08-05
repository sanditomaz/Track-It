import styled from "styled-components";

const Habit = styled.div`
  width: 90%;
  height: 91px;
  border-radius: 5px;
  background-color: #ffffff;
  margin: 0 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 14px;
  margin: 10px 0 10px 10px;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3 {
      font-size: 20px;
      font-weight: 400;
      color: #666666;
      padding-bottom: 7px;
    }
    p {
      font-size: 13px;
      font-weight: 400;
      color: #666666;
      padding: 1px 0;
    }
  }

  span {
    width: 69px;
    height: 69px;
    background-color: ${(props) => props.backgroundColor};
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    font-size: 50px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 13px;
  }
`;
export default Habit;
