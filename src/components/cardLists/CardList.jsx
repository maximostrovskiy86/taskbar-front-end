import {CardListContainer} from "./CarsList.styled";
import Card from "../card";
import CreateEditCard from "../createdEditCard";
import {useState} from "react";


const CardList = ({isCreateFormShow = false, tasks, onCloseModal, isVisible = false}) => {
	// console.log("TASKCARDLIST", tasks);
	const [isAnimate, setIsAnimate] = useState(false);
	
	return (
		<CardListContainer>
			{isCreateFormShow && isVisible && (
				<li className="card-list-item">
					<CreateEditCard isDeleteCreatingTask={onCloseModal}/>
				</li>
			)}
			
			{tasks && tasks.map((task) => {
				return <li className="card-list-item" key={task.id}>
					<Card task={task} isAnimate={isAnimate} setIsAnimate={setIsAnimate}/>
				</li>
			}).reverse()
			}
		</CardListContainer>
	)
}

export default CardList;