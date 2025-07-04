import React from "react";
import { ButtonContainer } from "./Button.styled";
import PropTypes from "prop-types";

const Button = ({ type = "submit", onClick, children, className = "" }) => {
  return (
    <ButtonContainer className={className} type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};
