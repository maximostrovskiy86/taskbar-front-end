import CardListsItem from "../cardListsItem";


const CardLists = ({tasks}) => {
	return (
		<div>
			{tasks && tasks.map((item, index) => {
				return <CardListsItem key={item.id} task={item}/>
			})}
		</div>
	)
}

export default CardLists;