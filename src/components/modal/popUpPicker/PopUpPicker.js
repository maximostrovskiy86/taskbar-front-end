import {PopUpPickerContent, BackDrop} from "./PopUpPicker.styled";
import React, {useEffect} from "react";
import {createPortal} from "react-dom";

const popupRoot = document.querySelector('#popup-root');

const PopUpPicker = ({children, onClose}) => {
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
			onClose();
		}
	}
	
	const onOverlayClose = (e) => {
		if (e.currentTarget === e.target) {
			onClose();
		}
	}
	
	return (
		<>
		<BackDrop onClick={onOverlayClose} />
			<PopUpPickerContent>
				{children}
			</PopUpPickerContent>
		</>
	)
}

export default PopUpPicker;