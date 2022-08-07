import styled from "styled-components";

const StyledHabits = styled.main`
  width: 100%;
  height: auto;
  background-color: #f2f2f2;
  margin-top: 70px;
  margin-bottom: 70px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  nav {
    padding-bottom: 100px;
    section {
      width: 93%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 22px 18px 28px 17px;
      h1 {
        font-size: 23px;
        font-weight: 400;
        color: #126ba5;
      }
      div {
        width: 40px;
        height: 35px;
        background-color: #52b6ff;
        font-size: 27px;
        font-weight: 400;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    h2 {
      max-width: 338px;
      height: 74px;
      font-size: 18px;
      font-weight: 400;
      color: #666666;
      padding-left: 17px;
    }
  }
`;

export default StyledHabits;
