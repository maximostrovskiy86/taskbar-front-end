import {WrapperAnimate} from "./Card.styled";
import StaticCard from "../staticCard";
import CreateEditCard from "../createdEditCard";
import {useState} from "react";


const Card = ({task, isCreateFormShow}) => {
	const [isUpdateCard, setIsUpdateCard] = useState(false);
	const {difficulty, category, taskName, taskDate, _id, completed} = task;
	
	console.log("TASK", task)
	
	return (
		<WrapperAnimate className={`card ${task._id}`}>
			
			{isUpdateCard ? (
				<CreateEditCard
					difficultyProp={difficulty}
					categoryProp={category}
					textPropName={taskName}
					taskDate={taskDate}
					id={_id}
					isCompleted={completed}
					
					isUpdateCard={isUpdateCard}
					handleHideCard={() => setIsUpdateCard(false)}
				
				/>
			
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
		
		</WrapperAnimate>
	)
}

export default Card;