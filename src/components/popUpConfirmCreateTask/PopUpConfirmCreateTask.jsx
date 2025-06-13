import {useEffect} from "react";
import {PopUpConfirmBackDrop, PopUpContent} from "./PopUpConfirmCreateTask.styled";

const PopUpConfirmCreateTask = ({children, onClose, ref}) => {
	
	useEffect(() => {
		window.addEventListener("keydown", onCLoseModal);
		return () => {
			window.removeEventListener("keydown", onCLoseModal);
		};
	});
	
	const onCLoseModal = (e) => {
		if (e.code === 'Escape') {
			onClose();
		}
	}
	
	const onOverlayClose = (e) => {
		if (e.currentTarget === e.target) {
			onClose();
		}
	}
	
	return (
		<PopUpConfirmBackDrop onClick={onOverlayClose}>
			<PopUpContent ref={ref}>
				{children}
			</PopUpContent>
		</PopUpConfirmBackDrop>
	)
}

export default PopUpConfirmCreateTask;