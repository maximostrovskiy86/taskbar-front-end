import {CardContainer} from './CardListsItem.styled'
import {ReactComponent as Fire} from "../../images/fire.svg";
import {ReactComponent as Star} from "../../images/star_blue.svg";


const CardListsItem = ({task}) => {
	const {title, level, date, category} = task;
	// console.log("task", task)
	
	return (
		<CardContainer className="card">
			<div className="header-card">
				<span className="level">
					{level}
				</span>
				<Star/>
			</div>
			<div className="main-card">
				<h3 className="title-task">{title}</h3>
				<div>
					<span className="date">{date}</span>
					<Fire/>
				</div>
			</div>
			<div className="category">{category}</div>
		</CardContainer>
	)
}

export default CardListsItem;