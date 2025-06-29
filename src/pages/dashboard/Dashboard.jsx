import {useState} from "react";
import {useSelector} from "react-redux";
import {DashBoardContainer} from "./Dashboard.styled";
import CardList from "../../components/cardLists";
import Container from "../../components/container";
import Button from "../../components/button";
import {getAllActiveTasks, getAllCompletedTasks} from "../../redux/tasks/tasksSelectors";
import {FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";
import CreateEditCard from "../../components/createdEditCard";



const Dashboard = () => {
	const [isCreateFormShow, setIsCreateFormShow] = useState(true);
	const tasksActive = useSelector(getAllActiveTasks);
	const completedTasks = useSelector(getAllCompletedTasks);
	
	return (
		<DashBoardContainer>
			<Container>
				<h2>Today</h2>
				<section className="today">
					{/*{isCreateFormShow && (*/}
					{/*	<CreateEditCard isDeleteCreatingTask={() => setIsCreateFormShow(false)}/>*/}
					{/*)}*/}
					<CardList tasks={tasksActive} onCloseModal={() => setIsCreateFormShow(false)} isCreateFormShow={isCreateFormShow}/>
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