import {useDispatch, useSelector} from "react-redux";
import {DashBoardContainer} from "./Dashboard.styled";
import CardLists from "../../components/cardLists";
import Container from "../../components/container";
import Button from "../../components/button";
import {getAllTasks} from "../../redux/tasks/tasksSelectors";
import {useEffect} from "react";
import tasksOperations from "../../redux/tasks/tasksOperations";
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";


const Dashboard = () => {
	const dispatch = useDispatch();
	const tasks = useSelector(getAllTasks);
	
	useEffect(() => {
		dispatch(tasksOperations.getTasks())
	}, [dispatch])
	
	console.log("tasks", tasks);
	return (
		<DashBoardContainer>
			<Container>
				<CardLists tasks={tasks}/>
				<IconContext.Provider value={{className: "add-task-button", size: "0.75em"}}>
					<Button type="button">
						<FaPlus/>
					</Button>
				</IconContext.Provider>
			</Container>
		</DashBoardContainer>
	)
}

export default Dashboard;