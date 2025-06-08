import {useState} from "react";
import {useDispatch} from "react-redux";
import Card from "../card";
import {CardContainer, CardInput} from "../card/Card.styled";
import {ReactComponent as Star} from "../../images/star_blue.svg";
import addTask from "../../redux/tasks/tasksOperations"


const CreateEditCard = () => {
	const levelArray = ["Easy", "Normal", "Hard"];
	
	const [level, setLevel] = useState('');
	const [title, setTitle] = useState('');
	
	const dispatch = useDispatch();
	
	
	const handleChangeCardForm = (e) => {
		const {value, name} = e.target;
		
		switch (name) {
			case "level":
				setLevel(value);
				break;
			case "title":
				setTitle(value);
				break;
			default:
				return;
		}
	}
	
	const onSubmit = (e) => {
		e.preventDefault();
		
		const dataTask = {
			level,
			title
		}
		
		dispatch(addTask(dataTask));
		
	}
	
	return (
		<CardContainer>
			<form onSubmit={onSubmit}>
				<div className="header-card">
					<select onClick={handleChangeCardForm} name="level">
						{levelArray.map((item) => (
							<option key={item} value={item}>{item}</option>
						))}
					</select>
					<Star/>
				</div>
				<CardInput>
					<label htmlFor="enter-title">Create a new quest</label>
					<input type="text" id="enter-title" name="title" required minLength="3" autoFocus/>
				</CardInput>
			</form>
			<h1>NEw</h1>
		</CardContainer>
	)
}

export default CreateEditCard;