import styled from "styled-components";

const StyledHistory = styled.main`
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
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 22px 18px 28px 17px;
      gap: 17px;
      h1 {
        font-size: 23px;
        font-weight: 400;
        color: #126ba5;
      }
      p {
        font-size: 18px;
        font-weight: 400;
        color: #666666;
      }
    }
  }
`;

export default StyledHistory;
