import {SpinnerStyled} from "./LoadingSpinner.styled";
import {FallingLines} from "react-loader-spinner";
import {DotLoader} from "react-spinners";
import React from "react";

const LoadingSpinner = () => {
	return (
		<SpinnerStyled>
			{/*<FallingLines*/}
			{/*	visible={true}*/}
			{/*	height="80"*/}
			{/*	width="80"*/}
			{/*	ariaLabel="color-ring-loading"*/}
			{/*	wrapperStyle={{}}*/}
			{/*	wrapperClass="color-ring-wrapper"*/}
			{/*	colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}*/}
			{/*/>*/}
			<DotLoader
			color="#3febe6"
			cssOverride={{}}
			loading
			size={60}
			speedMultiplier={2}
			/>
		</SpinnerStyled>
	)
}

export default LoadingSpinner;