import {PopUpPickerContent, BackDrop} from "./PopUpPicker.styled";
import React, {useEffect} from "react";

const PopUpPicker = ({children, toggleModal, ref}) => {
	useEffect(() => {
		window.addEventListener("keydown", onCLoseModal);
		const body = document.querySelector("body");
		body.style.overflow = "hidden";
		
		return () => {
			window.removeEventListener("keydown", onCLoseModal);
			const body = document.querySelector("body");
			body.style.overflow = "auto";
		};
	});
	
	const onCLoseModal = (e) => {
		if (e.code === 'Escape' || e.code === 'Enter') {
			toggleModal();
		}
	}
	
	const onOverlayClose = (e) => {
		if (e.currentTarget === e.target) {
			toggleModal();
		}
	}
	
	return (
		<>
			<BackDrop onClick={onOverlayClose}/>
			<PopUpPickerContent ref={ref}>
				{children}
			</PopUpPickerContent>
		</>
	)
}

export default PopUpPicker;