import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DashBoardContainer} from "./Dashboard.styled";
import CardLists from "../../components/cardLists";
import Container from "../../components/container";
import Button from "../../components/button";
import {getAllActiveTasks, getAllCompletedTasks} from "../../redux/tasks/tasksSelectors";
import {useEffect} from "react";
import tasksOperations from "../../redux/tasks/tasksOperations";
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";
import CreateEditCard from "../../components/createdEditCard";


const Dashboard = () => {
	const [isCreateFormShow, setIsCreateFormShow] = useState(true);
	
	const dispatch = useDispatch();
	const tasksActive = useSelector(getAllActiveTasks);
	const completedTasks = useSelector(getAllCompletedTasks);
	
	useEffect(() => {
		dispatch(tasksOperations.getTasks())
	}, [dispatch])
	
	return (
		<DashBoardContainer>
			<Container>
				{isCreateFormShow && (
					<div className="cardListItem">
						<CreateEditCard isDeleteCreatingTask={() => setIsCreateFormShow(false)}/>
					</div>
				)}
				<h2>TODAY</h2>
				<section className="today">
					<CardLists tasks={tasksActive} isCreateFormShow={isCreateFormShow}/>
				</section>
				<section className="done">
					<h2>DONE</h2>
					<CardLists isStatus={true} tasks={completedTasks} isCreateFormShow={isCreateFormShow}/>
				</section>
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