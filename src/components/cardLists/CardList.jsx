import Card from "../card";
import CreateEditCard from "../createdEditCard";
import {useState} from "react";


const CardList = ({isCreateFormShow = false, tasks}) => {
	// console.log("TASKCARDLIST", tasks);
	const [isAnimate, setIsAnimate] = useState(false);
	
	return (
		<div>
			{/*{isCreateFormShow && !isStatus && (*/}
			{/*	<div className="cardListItem">*/}
			{/*		<CreateEditCard isDeleteCreatingTask={onCloseModal}/>*/}
			{/*	</div>*/}
			{/*)}*/}
			{tasks && tasks.map((task) => {
				return <Card key={task._id} task={task} isAnimate={isAnimate} setIsAnimate={setIsAnimate}/>
			}).reverse()
			}
		</div>
	)
}

export default CardList;