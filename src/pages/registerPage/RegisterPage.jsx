import {LandingContainer} from "./RegisterPage.styled";
import Container from "../../components/container";
import RegistrationForm from "../../components/registrationLoginForm";
import HeadTitle from "../../components/headTitle";

const RegisterPage = () => {
	return (
		<LandingContainer className="landing">
			<Container>
				<HeadTitle>
					Questify
				</HeadTitle>
				<p>Questify will turn your life into a thrilling game full of amazing quests and exciting
					challenges.</p>
				<RegistrationForm/>
			</Container>
		</LandingContainer>
	)
}

export default RegisterPage;