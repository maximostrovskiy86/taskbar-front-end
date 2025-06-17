import StaticCard from "../staticCard";
import CreateEditCard from "../createdEditCard";
import {useState} from "react";


const Card = ({task}) => {
	const [isUpdateCard, setIsUpdateCard] = useState(false);
	
	return (
		<div className="card" onClick={() => setIsUpdateCard(true)}>
			{isUpdateCard ?
				<CreateEditCard task={task} isUpdateCard={isUpdateCard} handleHideCard={() => setIsUpdateCard(false)}/>
				:
				<StaticCard task={task}/>
			}
		</div>
	)
}

export default Card;