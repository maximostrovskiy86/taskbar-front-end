import {OptionsPickerContainer} from "./OptionsPicker.styled";
import PopUpPicker from "../modal/popUpPicker/PopUpPicker";
import {useRef} from "react";
import {CSSTransition} from "react-transition-group";

const DIFFICULTY_ARRAY = [
	{level: "Easy", color: "#00D7FF"},
	{level: "Normal", color: "#24D40C"},
	{level: "Hard", color: "#DB0837"},
];


const OptionsPicker = ({toggleModal, onChoiceLevel, isShowModal}) => {
	const nodeRef = useRef(null);
	
	return (
		<OptionsPickerContainer>
			<CSSTransition
				in={isShowModal}
				nodeRef={nodeRef}
				timeout={500}
				classNames="popup-level"
				unmountOnExit
			>
				<PopUpPicker toggleModal={toggleModal} ref={nodeRef}>
					<ul className="level-list">
						{DIFFICULTY_ARRAY.map((levelEl, index) => (
							<li key={index} onClick={() => onChoiceLevel(levelEl)}>
								<span style={{backgroundColor: `${levelEl.color}`}} className="label-color"></span>
								{levelEl.level}
							</li>
						))}
					</ul>
				</PopUpPicker>
			</CSSTransition>
		</OptionsPickerContainer>
	)
}

export default OptionsPicker;