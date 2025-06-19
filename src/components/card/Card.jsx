import StaticCard from "../staticCard";
import CreateEditCard from "../createdEditCard";
import {useState} from "react";


const Card = ({task}) => {
	const [isUpdateCard, setIsUpdateCard] = useState(false);
	// console.log("TASK", task);
	const {difficulty, category, taskName, taskDate, _id, completed} = task;
	
	return (
		<div className={`card ${task._id}`}>
			{isUpdateCard ? (
				<CreateEditCard
					difficultyProp={difficulty}
					categoryProp={category}
					textPropName={taskName}
					taskDate={taskDate}
					id={_id}
					isCompleted={completed}
					
					isUpdateCard={isUpdateCard}
					handleHideCard={() => setIsUpdateCard(false)}/>
			) : (
				<StaticCard
					difficultyProp={difficulty}
					categoryProp={category}
					textPropName={taskName}
					taskDate={taskDate}
					isCompleted={completed}
					
					id={_id}
					
					onClick={() => {
						console.log("TRUE", true)
						setIsUpdateCard(true)
					}}
				/>
			)}
		</div>
	)
}

export default Card;