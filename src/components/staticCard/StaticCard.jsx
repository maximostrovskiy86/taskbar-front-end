import {useDispatch} from 'react-redux';
import {CategoryContainer, CardHeaderStyle} from "./StaticCard.styled";
import {CardContainer} from "../card/Card.styled";
import {ReactComponent as Fire} from "../../images/fire.svg";
import {ReactComponent as Star} from "../../images/star_blue.svg";
import tasksOperations from "../../redux/tasks/tasksOperations";

const StaticCard = ({textPropName, difficultyProp, taskDate, categoryProp, onClick, id, isCompleted, ref}) => {
	const dispatch = useDispatch();
	
	const optionsTime = {hour12: false, hour: "numeric", minute: "numeric"};
	const date = new Date(taskDate).toLocaleTimeString("en-US", optionsTime);
	let time;
	
	if (
		new Date().toLocaleDateString() === new Date(taskDate).toLocaleDateString()
	) {
		time = `Today, ${date}`;
	} else if (new Date().getDate() + 1 === new Date(taskDate).getDate()) {
		time = `Tomorrow, ${date}`;
	} else {
		time = new Date(taskDate).toLocaleTimeString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour12: false,
			hour: "numeric",
			minute: "numeric",
		});
	}
	
	const isFireShow =
		Date.parse(taskDate) - Date.now() <= 3600000 &&
		Date.parse(taskDate) - Date.now() > 0;
	
	
	console.log("NEW DATE", new Date());
	console.log("DATE NOW", Date.parse(taskDate));
	
	
	
	const onHandleUpdateStatusTask = (id) => {
		dispatch(tasksOperations.updateStatusTask({
			completed: !isCompleted,
			id
		}));
	}
	
	return (
		<CardContainer onClick={onClick} className="static-card" ref={ref}>
			<CardHeaderStyle>
				<div>
					<span className={difficultyProp}></span>
					<span>{difficultyProp}</span>
				</div>
				<div className="star-static-card"><Star onClick={() => onHandleUpdateStatusTask(id)}/></div>
			</CardHeaderStyle>
			<div className="main-card">
				<h3 className="title-task">{textPropName}</h3>
				<div>
					<span className="date">{time}</span>
					{isFireShow && <Fire/>}
				</div>
			</div>
			<CategoryContainer className={categoryProp}>{categoryProp}</CategoryContainer>
		</CardContainer>
	)
}

export default StaticCard;