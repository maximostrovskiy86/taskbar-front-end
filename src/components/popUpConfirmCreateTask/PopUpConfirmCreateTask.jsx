import {useRef} from "react";
import PopUpPicker from "../modal/popUpPicker";
import {PopUpConfirmCreateTaskStyled} from "./PopUpConfirmCreateTask.styled";
import Button from "../button";
import {CSSTransition} from "react-transition-group";


const PopUpConfirmCreateTask = ({isShowModal, onClose}) => {
	console.log("onClose", onClose)
	return (
		<PopUpConfirmCreateTaskStyled>
			<PopUpPicker onClose={onClose}>
				<h4>Delete this quest?</h4>
				<Button>Cancel</Button>
				<Button>Delete</Button>
			</PopUpPicker>
		</PopUpConfirmCreateTaskStyled>
	
	)
}

export default PopUpConfirmCreateTask;