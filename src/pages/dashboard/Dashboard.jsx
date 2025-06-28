import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DashBoardContainer} from "./Dashboard.styled";
import CardList from "../../components/cardLists";
import Container from "../../components/container";
import Button from "../../components/button";
import {getAllActiveTasks, getAllCompletedTasks} from "../../redux/tasks/tasksSelectors";
import {useEffect} from "react";
import tasksOperations from "../../redux/tasks/tasksOperations";
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";
import CreateEditCard from "../../components/createdEditCard";
import {getAccessToken} from "../../redux/auth/authSelectors";


const Dashboard = () => {
	const [isCreateFormShow, setIsCreateFormShow] = useState(true);
	
	const dispatch = useDispatch();
	const tasksActive = useSelector(getAllActiveTasks);
	const token = useSelector(getAccessToken);
	const completedTasks = useSelector(getAllCompletedTasks);
	
	useEffect(() => {
		if (token) {
			dispatch(tasksOperations.getTasks())
		}
	}, [dispatch, token])
	
	return (
		<DashBoardContainer>
			<Container>
				<h2>Today</h2>
				<section className="today">
					{isCreateFormShow && (
						<CreateEditCard isDeleteCreatingTask={() => setIsCreateFormShow(false)}/>
					)}
					<CardList tasks={tasksActive} isCreateFormShow={isCreateFormShow}/>
				</section>
				<section>
					<h2>Tomorrow</h2>
				</section>
				<section className="done">
					<h2>Done</h2>
					<CardList isStatus={true} tasks={completedTasks} isCreateFormShow={isCreateFormShow}/>
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