import React from "react";
import {ButtonContainer} from "./Button.styled";

const Button = ({type = "submit", onClick, children, className = ""}) => {
	return (
		<ButtonContainer className={className} type={type} onClick={onClick} >
			{children}
		</ButtonContainer>
	);
};

export default Button;
