import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: auto;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
