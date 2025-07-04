import React from "react";
import { StyleContainer } from "./Container.styled";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <StyleContainer className="container">{children}</StyleContainer>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
