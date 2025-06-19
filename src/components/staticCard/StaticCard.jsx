import {StaticCardContainer, CategoryContainer, CardHeaderStyle} from "./StaticCard.styled";
import {CardContainer} from "../card/Card.styled";
import {ReactComponent as Fire} from "../../images/fire.svg";
import {ReactComponent as Star} from "../../images/star_blue.svg";

const StaticCard = ({textPropName, difficultyProp, taskDate, categoryProp, onClick}) => {
	// console.log("DATE", taskDate);
	
	return (
		<CardContainer onClick={onClick} className="static-card">
			<CardHeaderStyle>
				<div>
					<span className={difficultyProp}></span>
					<span>{difficultyProp}</span>
				</div>
				<Star/>
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