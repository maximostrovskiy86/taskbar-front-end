import {useState, useRef} from "react";
import {useDispatch} from "react-redux";
import {
	CreateEditContainer,
	CardInput,
	FooterEditCardContainer,
	CreateEditHeaderCardContainer, ConfirmedCreateDeleteTask,
} from "./CreatedEditCard.styled";
import OptionsPicker from "../optionsPicker";
import DateCalendar from "../dateCalendar";
import {ChoiceCategory} from "../card/Card.styled";
import {ReactComponent as Star} from "../../images/star_blue.svg";
import {ReactComponent as CancelCross} from "../../images/cancele-cross.svg";
import addTask from "../../redux/tasks/tasksOperations"
import {CSSTransition} from "react-transition-group";
import Button from "../button";
import PopUpConfirmCreateTask from "../popUpConfirmCreateTask";
import Modal from "../modal";



const CreateEditCard = ({
							difficultyProp = "normal",
							categoryProp = "stuff"
						}) => {
	const [category, setCategory] = useState(categoryProp);
	const [difficulty, setDifficulty] = useState(difficultyProp);
	const [date, setDate] = useState(new Date());
	const [title, setTitle] = useState('');
	const [isShowModal, setIsShowModal] = useState(false);
	
	
	const dispatch = useDispatch();
	
	const handleChangeCardForm = (e) => {
		const {value, name} = e.target;
		
		switch (name) {
			// case "level":
			// 	setLevel(value);
			// 	break;
			case "title":
				setTitle(value);
				break;
			case "category":
				setCategory(value);
				break;
			default:
				return;
		}
	}
	
	const onSubmit = (e) => {
		e.preventDefault();
		
		const dataTask = {
			difficulty,
			title,
			category,
			date,
		}
		
		dispatch(addTask(dataTask));
		
	}
	
	const onChoiceLevel = (item) => {
		// setLevelDate({
		// 	...levelDate,
		// 	level: item.level,
		// 	color: item.color,
		// })
		
		// setIsShowModal(false);
		
		console.log('item', item);
	}
	
	
	return (
		<>
			<CreateEditContainer onSubmit={onSubmit} className="create-edit-card">
				<CreateEditHeaderCardContainer>
					{/*<div className={isShowModal ? "level-box active" : "level-box"}>*/}
					{/*	<span className="color-selected-level"></span>*/}
					<OptionsPicker onChoiceLevel={onChoiceLevel} initialValue={difficulty} type='level'/>
					<Star/>
				</CreateEditHeaderCardContainer>
				<div className="create-edit-input-box">
					<CardInput>
						<label htmlFor="enter-title">Create a new quest</label>
						<input type="text" id="enter-title" name="title" required minLength="3" autoFocus/>
					</CardInput>
					<DateCalendar selectDate={setDate} elemDate={date} className="date-picker-calendar"/>
				</div>
				<FooterEditCardContainer>
					<OptionsPicker onChoiceLevel={onChoiceLevel} initialValue={category} type="category"/>
					<ConfirmedCreateDeleteTask>
						<Button type="button" className="cancel-task"
								onClick={() => setIsShowModal(true)}><CancelCross/></Button>
						{isShowModal &&
							<PopUpConfirmCreateTask onClose={() => setIsShowModal(false)}>
								<h4 className="popUp-title">Delete this quest?</h4>
								<div className="popUp-button-container">
									<Button onClick={() => setIsShowModal(false)}>Cancel</Button>
									<Button>Delete</Button>
								</div>
							</PopUpConfirmCreateTask>
						}
						<Button type="submit" className="create-task">Create</Button>
					</ConfirmedCreateDeleteTask>
				</FooterEditCardContainer>
			</CreateEditContainer>
		</>
	)
}

export default CreateEditCard;