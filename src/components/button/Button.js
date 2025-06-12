import React from "react";
import {ButtonContainer} from "./Button.styled";

const Button = ({type = "submit", onClick, children, className = "", bg = "", isCategoryChoice = false}) => {
	return (
		<ButtonContainer className={className} bg={bg} type={type} onClick={onClick} isCategory={isCategoryChoice}>
			{children}
		</ButtonContainer>
	);
};

export default Button;
