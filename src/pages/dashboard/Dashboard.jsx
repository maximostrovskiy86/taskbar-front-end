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


const Dashboard = () => {
	const [showModal, setShowModal] = useState(false);
	
	const dispatch = useDispatch();
	const tasks = useSelector(getAllTasks);
	
	useEffect(() => {
		dispatch(tasksOperations.getTasks())
	}, [dispatch])
	
	const toggleModal = () => {
		setShowModal(!showModal);
	}
	
	console.log("tasks", tasks);
	return (
		<DashBoardContainer>
			<Container>
				<CardLists tasks={tasks}/>
				<IconContext.Provider value={{className: "add-task-button", size: "0.75em"}}>
					<Button type="button" onClick={toggleModal}>
						<FaPlus/>
					</Button>
				</IconContext.Provider>
			</Container>
			{showModal &&
				<Modal toggleModal={toggleModal}>
					<AddTaskForm/>
				</Modal>
			}
		</DashBoardContainer>
	)
}

export default Dashboard;