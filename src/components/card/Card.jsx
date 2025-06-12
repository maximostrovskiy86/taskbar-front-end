import {CardContainer, CardHeader, ChoiceCategory} from './Card.styled'
import {ReactComponent as Fire} from "../../images/fire.svg";
import {ReactComponent as Star} from "../../images/star_blue.svg";


const Card = ({task}) => {
	// const {title, level, date, category} = task;
	
	return (
		<CardContainer className="card">
			<CardHeader>
				<span className="level">
					{/*{level}*/}
				</span>
				<Star/>
			</CardHeader>
			<div className="main-card">
				{/*<h3 className="title-task">{title}</h3>*/}
				<div>
					{/*<span className="date">{date}</span>*/}
					<Fire/>
				</div>
			</div>
			{/*<ChoiceCategory>{category}</ChoiceCategory>*/}
		</CardContainer>
	)
}

export default Card;