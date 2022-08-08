import styled from "styled-components";

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow: auto;

  @media (max-width: 900px) {
  }
`;

export const AccountPictureWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid ${(props) => props.theme.colors.primary.text};
  border-radius: 100px;
  margin-bottom: 40px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccountPicture = styled.img`
  width: 150px;
  height: 150px;
`;

export const AccountCard = styled.div`
  width: 600px;
  min-height: 700px;

  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;

  span {
    font: normal bold 16px ${(props) => props.theme.font};
    color: #d5423f;
    margin-left: 20px;
  }
`;

export const NameText = styled.p`
  margin-bottom: 10px;
  font: italic normal bold 24px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
`;
export const EmailText = styled.p`
  font: italic normal bold 20px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e2e2e2;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const EditText = styled.p`
  font: italic normal bold 18px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  margin-bottom: 20px;
`;

export const FormEdit = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NameInput = styled.input`
  width: 100%;
  height: 80px;
  padding-left: 30px;
  border: none;
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;
  outline: none;
  font: normal bold 17px ${(props) => props.theme.font};

  ::placeholder {
    color: #9d9d9d;
    font: italic normal bold 17px ${(props) => props.theme.font};
  }
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 80px;
  padding-left: 30px;
  border: none;
  border-bottom: 2px solid #ebebeb;
  outline: none;
  font: normal bold 17px ${(props) => props.theme.font};

  ::placeholder {
    color: #9d9d9d;
    font: italic normal bold 17px ${(props) => props.theme.font};
  }
`;

export const SubmitButton = styled.button`
  margin-top: 30px;
  margin-bottom: 30px;
  font: italic normal bold 35px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.main};
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
`;
