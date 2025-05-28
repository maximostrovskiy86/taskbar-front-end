import {LandingContainer} from "./Landing.styled";
import Container from "../../components/container";
import RegistrationLoginForm from "../../components/registrationLoginForm";
import HeadTitle from "../../components/headTitle";

const Landing = () => {
	return (
		<LandingContainer className="landing">
			<Container>
				<HeadTitle>
					Questify
				</HeadTitle>
				<p>Questify will turn your life into a thrilling game full of amazing quests and exciting
					challenges.</p>
				<RegistrationLoginForm/>
			</Container>
		</LandingContainer>
	)
}

export default Landing;