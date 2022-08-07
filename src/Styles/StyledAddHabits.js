import styled from "styled-components";

const StyledAddHabits = styled.div`
  width: 90%;
  height: 180px;
  background-color: #ffffff;
  margin: 0 20px 0 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  padding: 20px 10px 0 20px;
  margin-bottom: 29px;

  input {
    width: 90%;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    outline: none;
    padding-left: 11px;
    padding-right: 11px;
    ::placeholder {
      font-size: 20px;
      font-weight: 400;
      color: #dbdbdb;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 4px;
  }
  div {
    width: 90%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    aside {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 23px;
      flex-wrap: wrap;

      h3 {
        font-size: 16px;
        font-weight: 400;
        color: #52b6ff;
        cursor: pointer;
      }
      h4 {
        width: 84px;
        height: 35px;
        background-color: #52b6ff;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
`;

export default StyledAddHabits;
