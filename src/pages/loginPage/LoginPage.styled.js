import styled from "styled-components";
import { LandingContainer } from "../registerPage/RegisterPage.styled";

export const LoginPageContainer = styled(LandingContainer)`
  p {
    font-size: 18px;
  }

  button {
    width: 52px;
    height: 52px;
    margin-top: 15px;

    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.md};
    line-height: ${(props) => props.theme.lineHeights.medium};
    background-color: ${(props) => props.theme.colors.buttonBg};
    color: ${(props) => props.theme.colors.white};
    border-radius: ${(props) => props.theme.borderRadius.round};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    &:active {
      background-color: #f37820;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  h1 {
    padding: ${(p) => p.theme.spacing[0]};
    font-weight: 300;
    text-align: center;
    color: ${(p) => p.theme.colors.buttonBg};
  }

  @media screen and (min-width: 767px) {
    h1 {
      text-align: left;
    }
  }
`;
