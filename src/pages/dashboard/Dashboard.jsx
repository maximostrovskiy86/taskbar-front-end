import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DashBoardContainer} from "./Dashboard.styled";
import CardLists from "../../components/cardLists";
import Container from "../../components/container";
import Button from "../../components/button";
import Modal from "../../components/modal";
import AddTaskForm from "../../components/addTaskForm";
import {getAllTasks} from "../../redux/tasks/tasksSelectors";
import {useEffect} from "react";
import tasksOperations from "../../redux/tasks/tasksOperations";
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";
import CardList from "../../components/cardLists";


const Dashboard = () => {
	const [showModal, setShowModal] = useState(false);
	const [isCreateFormShown, setIsCreateFormShown] = useState(false);
	
	const dispatch = useDispatch();
	const tasks = useSelector(getAllTasks);
	
	useEffect(() => {
		dispatch(tasksOperations.getTasks())
	}, [dispatch])
	
	const toggleModal = () => {
		setShowModal(!showModal);
	}
	
	const createEditTask = () => {
		setIsCreateFormShown(!isCreateFormShown)
	}
	
	console.log("tasks", tasks);
	return (
		<DashBoardContainer>
			<Container>
				<CardLists tasks={tasks} isCreateFormShown={isCreateFormShown} toggleModal={createEditTask}/>
				<div className="add-task-button">
					<IconContext.Provider value={{className: "task-button", size: "0.75em"}}>
						<Button type="button" onClick={createEditTask}>
							<FaPlus/>
						</Button>
					</IconContext.Provider>
				</div>
			</Container>
		</DashBoardContainer>
	)
}

export default Dashboard;