import { useState, CSSProperties } from "react";
import { SpinnerStyled } from "./LoadingSpinner.styled";
import { ClipLoader } from "react-spinners";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const LoadingSpinner = () => {
  return (
    <SpinnerStyled>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </SpinnerStyled>
  );
};

export default LoadingSpinner;
