import {useRef, useState } from "react";
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
import Button from "../button";
import PopUpConfirmCreateTask from "../popUpConfirmCreateTask";
import UseAnimate from "../../hooks/UseAnimate";


const CreateEditCard = ({
							difficultyProp = "normal",
							categoryProp = "stuff",
							isDeleteCreatedTask
						}) => {
	const [category, setCategory] = useState(categoryProp);
	const [difficulty, setDifficulty] = useState(difficultyProp);
	const [date, setDate] = useState(new Date());
	const [title, setTitle] = useState('');
	const [isShowModal, setIsShowModal] = useState(false);
	const nodeRef = useRef(null);
	
	
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
						<UseAnimate show={isShowModal} nodeRef={nodeRef} className="modal-delete">
							<PopUpConfirmCreateTask onClose={() => setIsShowModal(false)} ref={nodeRef}>
								<h4 className="popUp-title">Delete this quest?</h4>
								<div className="popUp-button-container">
									<Button onClick={() => setIsShowModal(false)}>Cancel</Button>
									<Button onClick={isDeleteCreatedTask}>Delete</Button>
								</div>
							</PopUpConfirmCreateTask>
						</UseAnimate>
						<Button type="submit" className="create-task">Create</Button>
					</ConfirmedCreateDeleteTask>
				</FooterEditCardContainer>
			</CreateEditContainer>
		</>
	)
}




export default CreateEditCard;