import {useState} from "react";
import {useSelector} from "react-redux";
import {DashBoardContainer} from "./Dashboard.styled";
import CardList from "../../components/cardLists";
import Container from "../../components/container";
import Button from "../../components/button";
import {getAllActiveTasks, getAllCompletedTasks, getUnusedTasks} from "../../redux/tasks/tasksSelectors";
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";


const Dashboard = () => {
	const [isCreateFormShow, setIsCreateFormShow] = useState(true);
	const tasksActive = useSelector(getAllActiveTasks);
	const completedTasks = useSelector(getAllCompletedTasks);
	const unusedTasks = useSelector(getUnusedTasks);
	
	
	return (
		<DashBoardContainer>
			<Container>
				<h2>Today</h2>
				<section className="today">
					<CardList isVisible={true} tasks={tasksActive} onCloseModal={() => setIsCreateFormShow(false)}
							  isCreateFormShow={isCreateFormShow}/>
				</section>
				<section>
					<h2>Time is over</h2>
					<CardList tasks={unusedTasks}/>
				</section>
				<section>
					<h2>Tomorrow</h2>
				</section>
				<section className="done">
					<h2>Done</h2>
					<CardList tasks={completedTasks}/>
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