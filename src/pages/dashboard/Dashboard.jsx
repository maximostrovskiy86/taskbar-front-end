import {useDispatch, useSelector} from "react-redux";
import CardLists from "../../components/cardLists";
import Container from "../../components/container";
import {getAllTasks} from "../../redux/tasks/tasksSelectors";
import {useEffect} from "react";
import tasksOperations from "../../redux/tasks/tasksOperations";


const Dashboard = () => {
	const dispatch = useDispatch();
	const tasks = useSelector(getAllTasks);
	
	useEffect(() => {
		dispatch(tasksOperations.getTasks())
	}, [dispatch])
	
	console.log("tasks", tasks);
	return (
		<Container>
			<CardLists tasks={tasks}/>
		</Container>
	)
}

export default Dashboard;