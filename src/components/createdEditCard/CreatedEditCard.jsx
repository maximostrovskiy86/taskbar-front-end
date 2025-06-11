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



const CreateEditCard = ({difficultyProp = "Normal",}) => {
	const categoryArray = ["Stuff", "Family", "Learning", "Family", "Leisure", "Work"];
	const [date, setDate] = useState(new Date());
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [isShowModal, setIsShowModal] = useState(false);
	const [levelDate, setLevelDate] = useState({level: "Normal", color: "#24D40C"},);
	
	const dispatch = useDispatch();
	const nodeRef = useRef(null);
	
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
			level: levelDate.level,
			title,
			category,
			date,
		}
		
		dispatch(addTask(dataTask));
		
	}
	
	const onChoiceLevel = (item) => {
		setLevelDate({
			...levelDate,
			level: item.level,
			color: item.color,
		})
		
		setIsShowModal(false);
		
		console.log('item', item);
		console.log('isSHOWMODAL', isShowModal);
	}
	
	const toggleModal = () => {
		setIsShowModal(!isShowModal);
	}
	
	return (
		<>
			<CreateEditContainer onSubmit={onSubmit}>
				<CreateEditHeaderCardContainer>
					<div className={isShowModal ? "level-box active" : "level-box"}
						 onClick={() => setIsShowModal(!isShowModal)}>
						<span style={{backgroundColor: `${levelDate.color}`}} className="color-selected-level"></span>
						<button>{levelDate.level}</button>
						<OptionsPicker isShowModal={isShowModal} onChoiceLevel={onChoiceLevel}
									   toggleModal={toggleModal}/>
					</div>
					<Star/>
				</CreateEditHeaderCardContainer>
				<CardInput>
					<label htmlFor="enter-title">Create a new quest</label>
					<input type="text" id="enter-title" name="title" required minLength="3" autoFocus/>
				</CardInput>
				<DateCalendar selectDate={setDate} elemDate={date}/>
				<FooterEditCardContainer>
					<ChoiceCategory onClick={handleChangeCardForm} className="category">
						<select name="category">
							{categoryArray.map((item, index) => (
								<option key={index} value={item}>{item}</option>
							))}
						</select>
					</ChoiceCategory>
					<ConfirmedCreateDeleteTask>
						<Button	 type="button" className="cancel-task"><CancelCross/></Button>
						<Button	 type="submit" className="create-task">Create</Button>
					</ConfirmedCreateDeleteTask>
				</FooterEditCardContainer>
			</CreateEditContainer>
		</>
	)
}

export default CreateEditCard;