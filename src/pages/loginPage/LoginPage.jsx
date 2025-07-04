import { LoginPageContainer } from "./LoginPage.styled";
import Container from "../../components/container";
import LoginForm from "../../components/loginForm";
import HeadTitle from "../../components/headTitle";

const LoginPage = () => {
  return (
    <>
      <LoginPageContainer className="loginPage">
        <Container>
          <HeadTitle>Login</HeadTitle>
          <LoginForm />
        </Container>
      </LoginPageContainer>
    </>
  );
};

export default LoginPage;
