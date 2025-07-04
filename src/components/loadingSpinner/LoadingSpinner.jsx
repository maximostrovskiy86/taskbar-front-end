import React from "react";
import { SpinnerStyled } from "./LoadingSpinner.styled";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <SpinnerStyled>
      {/*<ColorRing*/}
      {/*	visible={true}*/}
      {/*	height="80"*/}
      {/*	width="80"*/}
      {/*	ariaLabel="color-ring-loading"*/}
      {/*	wrapperStyle={{}}*/}
      {/*	wrapperClass="color-ring-wrapper"*/}
      {/*	colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}*/}
      {/*/>*/}
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </SpinnerStyled>
  );
};

export default LoadingSpinner;
