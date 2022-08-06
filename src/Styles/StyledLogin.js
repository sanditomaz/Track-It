import styled from "styled-components";

const StyledLogin = styled.main`
  min-width: 375px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding-bottom: 40px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 68px;
    div {
      padding-bottom: 32px;
      img {
        width: 180px;
        height: 178px;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;
      div {
        padding-bottom: 25px;
        button {
          width: 314px;
          height: 45px;
          border: none;
          outline: none;
          border-radius: 5px;
          background-color: #52b6ff;
          font-size: 20px;
          font-weight: 400;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      input {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        background-color: #ffffff;
        outline: none;
        border: 1px solid #d4d4d4;
        font-size: 20px;
        font-weight: 400;
        color: #424242;
        padding-left: 11px;
        ::placeholder {
          color: #dbdbdb;
        }
      }
      h1 {
        width: 232px;
        height: 17px;
        font-size: 14px;
        font-weight: 400;
        color: #52b6ff;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export default StyledLogin;
