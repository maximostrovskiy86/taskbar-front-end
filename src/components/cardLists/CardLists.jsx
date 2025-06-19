import Card from "../card";
import CreateEditCard from "../createdEditCard";


const CardLists = ({isCreateFormShow = false, tasks}) => {
	console.log("TASKCARDLIST", tasks);
	return (
		<div>
			{/*{isCreateFormShow && !isStatus && (*/}
			{/*	<div className="cardListItem">*/}
			{/*		<CreateEditCard isDeleteCreatingTask={onCloseModal}/>*/}
			{/*	</div>*/}
			{/*)}*/}
			{tasks && tasks.map((task) => {
				return <Card key={task._id} task={task}/>
			}).reverse()
			}
		</div>
	)
}

export default CardLists;