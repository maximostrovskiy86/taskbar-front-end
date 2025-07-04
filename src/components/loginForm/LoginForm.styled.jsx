import styled from "styled-components";
import { LoginInputBox } from "../registrationForm/RegistrationForm.styled";

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  button + button {
    margin-top: 20px;

    background-color: #ffffff;
    color: #fc842d;

    border: 2px solid #fc842d;
    transition: background-color 250ms ease-in-out;
  }

  p {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    color: ${(p) => p.theme.colors.secondary};
  }

  strong a {
    color: ${(p) => p.theme.colors.buttonBg};
  }

  @media screen and (min-width: 767px) {
    align-items: start;

    button {
      margin: 20px 0 0;
    }

    p {
      text-align: left;
    }
  }
`;

export const InputBox = styled(LoginInputBox)`
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;
