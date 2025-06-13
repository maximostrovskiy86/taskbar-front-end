import Card from "../card";
import CreateEditCard from "../createdEditCard";


const CardLists = ({isCreateFormShown = false, tasks, toggleModal}) => {
	
	return (
		<div>
			{isCreateFormShown && (
				<div className="cardListItem">
					<CreateEditCard isDeleteCreatedTask={toggleModal}/>
				</div>
			)}
			{tasks && tasks.map((item, index) => {
				return <Card key={item.id} task={item}/>
			})}
		</div>
	)
}

export default CardLists;