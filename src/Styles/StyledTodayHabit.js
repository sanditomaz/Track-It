import styled from "styled-components";

const StyledTodayHabits = styled.main`
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
    flex-wrap: wrap;
    section {
      width: 93%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 22px 18px 28px 17px;
      gap: 5px;
      h1 {
        font-size: 23px;
        font-weight: 400;
        color: #126ba5;
      }
      h2 {
        font-size: 18px;
        font-weight: 400;
        color: #bababa;
      }
      h3 {
        font-size: 18px;
        font-weight: 400;
        color: #8fc549;
      }
    }
  }
`;

export default StyledTodayHabits;
