import {CardListContainer} from "./CarsList.styled";
import Card from "../card";
import CreateEditCard from "../createdEditCard";

const CardList = ({isCreateFormShow = false, tasks, onCloseModal, isVisible = false}) => {
	
	console.log("tasks", tasks);
	
	return (
		<CardListContainer>
			{isCreateFormShow && isVisible && (
				<li className="card-list-item">
					<CreateEditCard isDeleteCreatingTask={onCloseModal}/>
				</li>
			)}
			
			{tasks.length > 0 && tasks.map((task) => {
				// console.log("task", task);
				return <li className="card-list-item" key={task._id || task.id}>
					<Card task={task}/>
				</li>
			})
			}
		</CardListContainer>
	)
}

export default CardList;