import Card from "../card";
import CreateEditCard from "../createdEditCard";
import {useState} from "react";


const CardLists = ({isCreateFormShow = false, tasks, onCloseModal}) => {
	
	return (
		<div>
			{isCreateFormShow && (
				<div className="cardListItem">
					<CreateEditCard isDeleteCreatedTask={onCloseModal}/>
				</div>
			)}
			{tasks && tasks.map((item) => {
				return <Card key={item._id} task={item}/>
			}).reverse()
			}
		</div>
	)
}

export default CardLists;