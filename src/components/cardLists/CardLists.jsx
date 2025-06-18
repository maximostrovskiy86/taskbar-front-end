import Card from "../card";
import CreateEditCard from "../createdEditCard";


const CardLists = ({isCreateFormShow = false, tasks, onCloseModal}) => {
	
	return (
		<div>
			{isCreateFormShow && (
				<div className="cardListItem">
					<CreateEditCard isDeleteCreatedTask={onCloseModal}/>
				</div>
			)}
			{tasks && tasks.map((task) => {
				return <Card key={task._id} task={task} />
			}).reverse()
			}
		</div>
	)
}

export default CardLists;