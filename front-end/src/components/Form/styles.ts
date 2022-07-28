import styled from "styled-components";

export const FormMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  h1 {
    font: italic normal bold 35px "IBM Plex Sans", sans-serif;
    color: #707070;
    margin-bottom: 26px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 352px;
    min-height: auto;
    background-color: #fff;
    box-shadow: 0px 3px 25px #00000014;
    border: 1px solid #dddddd;
    border-radius: 14px;

    input {
      height: 80px;
      padding-left: 30px;
      border: none;
      border-radius: 14px 14px 0px 0px;
      border-bottom: 2px solid #ebebeb;
      outline: none;
      font: normal bold 17px "IBM Plex Sans", sans-serif;

      ::placeholder {
        color: #9d9d9d;
        font: italic normal bold 17px "IBM Plex Sans", sans-serif;
      }
    }

    span {
      font: normal bold 16px "IBM Plex Sans", sans-serif;
      color: #d5423f;
      margin-left: 20px;
    }

    .forget-pwd {
      margin-top: 27px;
      margin-right: 27px;
      text-align: right;

      a {
        font: italic normal normal 17px "IBM Plex Sans", sans-serif;
        color: #c1c1c1;
        text-decoration: none;
        transition: all 0.2s;

        :hover {
          color: rgb(0, 0, 0, 0.7);
        }
      }
    }

    .submit-btn {
      margin-top: 40px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        font: italic normal bold 35px "IBM Plex Sans", sans-serif;
        color: #b5c401;
        border: none;
        background: none;
        cursor: pointer;
        transition: all 0.2s;

        :hover {
          transform: scale(1.1);
        }

        svg {
          margin-left: 20px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
  .signup-btn {
    margin-top: 30px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font: italic normal bold 35px "IBM Plex Sans", sans-serif;
      color: #707070;
      text-decoration: none;
      transition: all 0.2s;

      :hover {
        transform: scale(1.1);
      }

      svg {
        margin-left: 20px;
      }
    }
  }

  @media (max-width: 900px) {
    margin-bottom: 10%;
  }
`;
