import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {
	CreateEditContainer,
	CardInput,
	FooterEditCardContainer,
	CreateEditHeaderCardContainer, ConfirmedCreateDeleteTask,
} from "./CreatedEditCard.styled";
import OptionsPicker from "../optionsPicker";
import DateCalendar from "../dateCalendar";
import {ReactComponent as Star} from "../../images/star_blue.svg";
import {ReactComponent as CancelCross} from "../../images/cancele-cross.svg";
import {ReactComponent as DoneTask} from "../../images/done.svg";
import {ReactComponent as UpdateTask} from "../../images/save.svg";
import tasksOperations from "../../redux/tasks/tasksOperations"
import Button from "../button";
import PopUpConfirmCreateTask from "../popUpConfirmCreateTask";
import UseAnimate from "../../hooks/UseAnimate";
import {toast} from "react-toastify";



const CreateEditCard = ({
							difficultyProp = "normal",
							categoryProp = "stuff",
							isDeleteCreatedTask,
							task = {},
							// textProp = "",
							handleHideCard,
							isUpdateCard = false
						}) => {
	const dispatch = useDispatch();
	
	const [category, setCategory] = useState(categoryProp);
	const [difficulty, setDifficulty] = useState(difficultyProp);
	const [date, setDate] = useState(new Date());
	const [taskName, setTaskName] = useState("");
	const [isShowModal, setIsShowModal] = useState(false);
	const nodeRef = useRef(null);
	// console.log("TASK", task);
	const handleChangeCardForm = (e) => {
		// console.log("e", e.target.value)
		const {value, name} = e.target;
		
		switch (name) {
			case "title":
				setTaskName(value);
				break;
			default:
				return;
		}
	}
	
	const handleError = () => toast.error("Enter a task title, please");
	
	const onHandleCreateTask = (e) => {
		console.log("e", e)
		
		const dataTask = {
			difficulty,
			category,
			taskName: taskName,
			taskDate: date,
		}
		
		if (taskName === "") {
			handleError();
			return;
		}
		
		dispatch(tasksOperations.createTask(dataTask));
		
		setTaskName("");
	}
	
	const onHandleUpdateTask = () => {
		const updateDataTask = {
			difficulty,
			category,
			taskName: taskName,
			taskDate: date,
			id: task._id
		}
		
		// if (title === "") {
		// 	handleError();
		// 	return;
		// }
		
		dispatch(tasksOperations.updateTask(updateDataTask));
		handleHideCard();
		
		// setTitle("");
	}
	// console.log("TITLE", taskName)
	return (
		<>
			<CreateEditContainer className="create-edit-card">
				<CreateEditHeaderCardContainer>
					<OptionsPicker getOptionValue={setDifficulty} initialValue={difficulty} type='level'/>
					<Star/>
				</CreateEditHeaderCardContainer>
				<div className="create-edit-input-box">
					<CardInput>
						<label htmlFor="enter-title">Create a new quest</label>
						<input type="text" id="enter-title" name="title" required minLength="3" autoFocus
							   value={taskName}
							   onChange={handleChangeCardForm}/>
					</CardInput>
					<DateCalendar selectDate={setDate} elemDate={date} className="date-picker-calendar"/>
				</div>
				<FooterEditCardContainer>
					<OptionsPicker getOptionValue={setCategory} initialValue={category} type="category"/>
					<ConfirmedCreateDeleteTask>
						{!isUpdateCard ? (
							<>
								<Button type="button" className="cancel-task"
										onClick={() => setIsShowModal(true)}><CancelCross/></Button>
								<Button type="submit" onClick={onHandleCreateTask}
										className="create-task">Create</Button>
							</>
						) : (
							<>
								<Button type="button" onClick={onHandleUpdateTask}><UpdateTask/></Button>
								<Button type="button"><CancelCross/></Button>
								<Button type="button"><DoneTask/></Button>
							</>
						)}
						
						<UseAnimate show={isShowModal} nodeRef={nodeRef} className="modal-delete">
							<PopUpConfirmCreateTask onClose={() => setIsShowModal(false)} ref={nodeRef}>
								<h4 className="popUp-title">Delete this quest?</h4>
								<div className="popUp-button-container">
									<Button onClick={() => setIsShowModal(false)}>Cancel</Button>
									<Button onClick={isDeleteCreatedTask}>Delete</Button>
								</div>
							</PopUpConfirmCreateTask>
						</UseAnimate>
					</ConfirmedCreateDeleteTask>
				</FooterEditCardContainer>
			</CreateEditContainer>
		</>
	)
}




export default CreateEditCard;