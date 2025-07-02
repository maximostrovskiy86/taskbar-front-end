import {CardListContainer} from "./CarsList.styled";
import Card from "../card";
import CreateEditCard from "../createdEditCard";

const CardList = ({isCreateFormShow = false, tasks, onCloseModal, isVisible = false}) => {
	return (
		<CardListContainer>
			{isCreateFormShow && isVisible && (
				<li className="card-list-item">
					<CreateEditCard isDeleteCreatingTask={onCloseModal}/>
				</li>
			)}
			
			{tasks && tasks.map((task) => {
				return <li className="card-list-item" key={task.id}>
					<Card task={task}/>
				</li>
			})
			}
		</CardListContainer>
	)
}

export default CardList;