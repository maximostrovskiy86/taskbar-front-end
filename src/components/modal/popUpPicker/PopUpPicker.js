import {PopUpPickerContent, BackDrop, OptionStylContainer} from "./PopUpPicker.styled";
import React, {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import {CSSTransition} from "react-transition-group";

const popupRoot = document.querySelector('#popup-root');

const PopUpPicker = ({children, onClose, ref}) => {
	
	const nodeRef = useRef(null);
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
			<BackDrop onClick={onOverlayClose}/>
			<PopUpPickerContent ref={ref}>
				{children}
			</PopUpPickerContent>
		</>
	)
}

export default PopUpPicker;