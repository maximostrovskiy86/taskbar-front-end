import {useState} from "react";
import {OptionsPickerContainer} from "./OptionsPicker.styled";
import PopUpPicker from "../modal/popUpPicker/PopUpPicker";
import {CSSTransition} from "react-transition-group";
import Button from "../button";
import {theme} from "../../theme";

const DIFFICULTY_ARRAY = [
	{name: "easy", color: "#00D7FF"},
	{name: "normal", color: "#24D40C"},
	{name: "hard", color: "#DB0837"},
];
// const DIFFICULTY_ARRAY = ["easy", "normal", "hard"];
const CATEGORY_ARRAY = [
	{name: "stuff", color: "#b9c3c8"},
	{name: "family", color: "#ffe6d3"},
	{name: "health", color: "#cdf7ff"},
	{name: "learning", color: "#fff6c0"},
	{name: "leisure", color: "#f8d2ff"},
	{name: "work", color: "#d3f6ce"},
]


const OptionsPicker = ({onChoiceLevel, initialValue, isShowLevel, type}) => {
	const [value, setValue] = useState(initialValue);
	const [colorValue, setValueColor] = useState("#b9c3c8");
	const [isShowCategory, seIsShowCategory] = useState(true);
	const [showPopUp, setShowPopUp] = useState(false);
	
	const typeOptions = type === "level" ? DIFFICULTY_ARRAY : CATEGORY_ARRAY;
	const isLevel = type === "level";
	const isCategory = type === "category";
	console.log("typeOptions")
	const handleOptionsChange = (option) => {
		console.log("e", option);
		setValue(option.name);
		setValueColor(option.color);
		setShowPopUp(false);
	}
	
	return (
		<OptionsPickerContainer isCategoryChoice={isCategory}>
			{isLevel && <span className={`color-selected-${value}`}></span>}
			<Button onClick={() => setShowPopUp(true)} className={isCategory ? `choice-category-btn ${showPopUp && "active"}` : `choice-level-btn ${showPopUp && "active"}`}
					bg={colorValue} isCategoryChoice={isCategory}>{value}</Button>
			{showPopUp && (
				<PopUpPicker onClose={() => setShowPopUp(false)} className="popUp">
					{typeOptions &&
						<ul className="option-list">
							{typeOptions.map((option, index) => (
								<li key={index} onClick={() => handleOptionsChange(option)}
									className={isLevel ? "" : "category-item"}>
									{isLevel && <span className={`color-selected-${option.name}`}></span>}
									{option.name}
								</li>
							))}
						</ul>
					}
				</PopUpPicker>
			)}
		</OptionsPickerContainer>
	)
}

// <OptionsPickerContainer>
// 	<CSSTransition
// 		in={isShowModal}
// 		nodeRef={nodeRef}
// 		timeout={250}
// 		classNames="popup-level"
// 		unmountOnExit
// 	>
// 		<PopUpPicker ocClose={ocClose} ref={nodeRef}>
// 			<ul className="level-list">
// 				{DIFFICULTY_ARRAY.map((levelEl, index) => (
// 					<li key={index} onClick={() => onChoiceLevel(levelEl)}>
// 						<span style={{backgroundColor: `${levelEl.color}`}} className="label-color"></span>
// 						{levelEl.level}
// 					</li>
// 				))}
// 			</ul>
// 		</PopUpPicker>
// 	</CSSTransition>
// </OptionsPickerContainer>
export default OptionsPicker;