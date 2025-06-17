import {StaticCardContainer, CategoryContainer, CardHeaderStyle} from "./StaticCard.styled";
import { CardContainer } from "../card/Card.styled";
import {ReactComponent as Fire} from "../../images/fire.svg";
import {ReactComponent as Star} from "../../images/star_blue.svg";

const StaticCard = ({task, onClick}) => {
	const {taskName, difficulty, taskDate, category} = task;
	
	return (
		<CardContainer onClick={onClick}>
			<CardHeaderStyle>
				<div>
					<span className={difficulty}></span>
					<span>{difficulty}</span>
				</div>
				<Star/>
			</CardHeaderStyle>
			<div className="main-card">
				<h3 className="title-task">{taskName}</h3>
				<div>
					<span className="date">{taskDate}</span>
					<Fire/>
				</div>
			</div>
			<CategoryContainer className={category}>{category}</CategoryContainer>
		</CardContainer>
	)
}

export default StaticCard;