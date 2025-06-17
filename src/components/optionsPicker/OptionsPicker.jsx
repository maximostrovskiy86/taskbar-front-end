import {useRef, useState} from "react";
import {OptionsPickerContainer} from "./OptionsPicker.styled";
import PopUpPicker from "../modal/popUpPicker/PopUpPicker";
import Button from "../button";
import UseAnimate from "../../hooks/UseAnimate";

const DIFFICULTY_ARRAY = [
	{name: "easy", color: "#00D7FF"},
	{name: "normal", color: "#24D40C"},
	{name: "hard", color: "#DB0837"},
];

const CATEGORY_ARRAY = [
	{name: "stuff", color: "#b9c3c8"},
	{name: "family", color: "#ffe6d3"},
	{name: "health", color: "#cdf7ff"},
	{name: "learning", color: "#fff6c0"},
	{name: "leisure", color: "#f8d2ff"},
	{name: "work", color: "#d3f6ce"},
]


const OptionsPicker = ({getOptionValue, initialValue, type}) => {
	const [value, setValue] = useState(initialValue);
	const [colorValue, setValueColor] = useState("#b9c3c8");
	const [showPopUp, setShowPopUp] = useState(false);
	const nodeRef = useRef(null);
	
	
	const typeOptions = type === "level" ? DIFFICULTY_ARRAY : CATEGORY_ARRAY;
	const isLevel = type === "level";
	const isCategory = type === "category";
	// console.log("typeOptions")
	const handleOptionsChange = ({name, color}) => {
		setValue(name);
		setValueColor(color);
		getOptionValue(name);
		setShowPopUp(false);
	}
	
	return (
		<OptionsPickerContainer isCategoryChoice={isCategory}>
			{isLevel && <span className={`color-selected-${value}`}></span>}
			<Button onClick={() => setShowPopUp(true)}
					className={isCategory ? `choice-category-btn ${showPopUp && "active"}` : `choice-level-btn ${showPopUp && "active"}`}
					bg={colorValue} isCategoryChoice={isCategory}>{value}</Button>
				<UseAnimate show={showPopUp} nodeRef={nodeRef} className="alert">
					<PopUpPicker onClose={() => setShowPopUp(false)} showPopUp={showPopUp} ref={nodeRef} className="popUp">
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
				</UseAnimate>
		</OptionsPickerContainer>
	)
}
export default OptionsPicker;