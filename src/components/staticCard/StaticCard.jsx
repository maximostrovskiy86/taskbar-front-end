import {useDispatch} from 'react-redux';
import {StaticCardContainer, CategoryContainer, CardHeaderStyle} from "./StaticCard.styled";
import {CardContainer} from "../card/Card.styled";
import {ReactComponent as Fire} from "../../images/fire.svg";
import {ReactComponent as Star} from "../../images/star_blue.svg";
import tasksOperations from "../../redux/tasks/tasksOperations";

const StaticCard = ({textPropName, difficultyProp, taskDate, categoryProp, onClick, id, isCompleted}) => {
	const dispatch = useDispatch();
	
	const onHandleUpdateStatusTask = (id) => {
		dispatch(tasksOperations.updateStatusTask({
			completed: !isCompleted,
			id
		}));
	}
	
	
	return (
		<CardContainer onClick={onClick} className="static-card">
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
					<span className="date">{taskDate}</span>
					<Fire/>
				</div>
			</div>
			<CategoryContainer className={categoryProp}>{categoryProp}</CategoryContainer>
		</CardContainer>
	)
}

export default StaticCard;