import styled from "styled-components";
import { LoginInputBox } from "../registrationLoginForm/RegistrationForm.styled";

export const LoginFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (min-width: 768px) {
        button {
            margin: 20px 0 0;
        }
    }
    
    button + button {
        margin-top: 20px;
        
        background-color: #ffffff;
        color: #FC842D;
        
        border: 2px solid #FC842D;
        transition: background-color 250ms ease-in-out;
    }
	
	p {
		margin-top: 20px;
		font-size: 14px;
		font-weight: 400;
		color: ${p => p.theme.colors.secondary};
	}
	
	strong a {
		color: ${p => p.theme.colors.buttonBg};
	}
`;

export const InputBox = styled(LoginInputBox)`
	@media screen and (max-width: 768px) {
	margin: 0 auto;
	}
`;