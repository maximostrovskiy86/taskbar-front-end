import {useState} from "react";
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
	const [isCreateFormShow, setIsCreateFormShow] = useState(true);
	
	const dispatch = useDispatch();
	const tasks = useSelector(getAllTasks);
	
	useEffect(() => {
		dispatch(tasksOperations.getTasks())
	}, [dispatch])
	
	
	
	return (
		<DashBoardContainer>
			<Container>
				<CardLists tasks={tasks} isCreateFormShow={isCreateFormShow} onCloseModal={() => setIsCreateFormShow(false)}/>
				<div className="add-task-button">
					<IconContext.Provider value={{className: "task-button", size: "0.75em"}}>
						<Button type="button" onClick={() => setIsCreateFormShow(true)}>
							<FaPlus/>
						</Button>
					</IconContext.Provider>
				</div>
			</Container>
		</DashBoardContainer>
	)
}

export default Dashboard;