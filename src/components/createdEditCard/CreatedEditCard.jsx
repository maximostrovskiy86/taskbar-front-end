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
import {ReactComponent as DeleteTask} from "../../images/cancele-cross.svg";
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
							textPropName = "",
							id = null,
							isCompleted = false,
							taskDate,
							handleHideCard,
							isUpdateCard,
							isDeleteCreatingTask,
							
						}) => {
	const dispatch = useDispatch();
	
	const [category, setCategory] = useState(categoryProp);
	const [difficulty, setDifficulty] = useState(difficultyProp);
	const [taskName, setTaskName] = useState(textPropName);
	
	const [date, setDate] = useState(new Date());
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
		// setCategory("stuff");
		// setDifficulty("normal");
	}
	const onHandleUpdateTask = (event) => {
		console.log("e", event);
		event.stopPropagation();
		
		const updateDataTask = {
			difficulty,
			category,
			taskName: taskName,
			taskDate: date,
			id: id
		}
		
		if (taskName === "") {
			handleError();
			return;
		}
		
		dispatch(tasksOperations.updateTask(updateDataTask));
		handleHideCard(false);
		
		// setTitle("");
	}
	
	const onHandleDeleteTask = (id) => {
		
		if (!isUpdateCard) {
			// console.log("-----", "IN")
			setIsShowModal(false);
			isDeleteCreatingTask(false);
			return;
		}
		
		// console.log("-----", "after")
		dispatch(tasksOperations.deleteTask(id));
		setIsShowModal(false);
	}
	
	const onHandleUpdateStatusTask = (id) => {
		dispatch(tasksOperations.updateStatusTask({
			completed: !isCompleted,
			id
		}));
	}
	
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
										onClick={() => setIsShowModal(true)}><DeleteTask/></Button>
								<Button type="submit" onClick={onHandleCreateTask}
										className="create-task">Create</Button>
							</>
						) : (
							<>
								<Button type="submit" onClick={onHandleUpdateTask}><UpdateTask/></Button>
								<Button type="button" onClick={() => setIsShowModal(true)}><DeleteTask/></Button>
								<Button type="submit" onClick={() => onHandleUpdateStatusTask(id)}><DoneTask/></Button>
							</>
						)}
						
						<UseAnimate show={isShowModal} nodeRef={nodeRef} className="modal-delete">
							<PopUpConfirmCreateTask onClose={() => setIsShowModal(false)} ref={nodeRef}>
								<h4 className="popUp-title">Delete this quest?</h4>
								<div className="popUp-button-container">
									<Button onClick={() => setIsShowModal(false)}>Cancel</Button>
									<Button onClick={() => onHandleDeleteTask(id)}>Delete</Button>
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