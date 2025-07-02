import {useState} from "react";
import {useSelector} from "react-redux";
import {DashBoardContainer} from "./Dashboard.styled";
import CardList from "../../components/cardLists";
import Container from "../../components/container";
import Button from "../../components/button";
import {
	getActiveTodayTasks,
	getActiveTomorrowTasks,
	getAllCompletedTasks,
	getUnusedTasks
} from "../../redux/tasks/tasksSelectors";
import {FaPlus} from "react-icons/fa";

const Dashboard = () => {
	const [doneIsShown, setDoneIsShown] = useState(false);
	const [isCreateFormShow, setIsCreateFormShow] = useState(true);
	const tasksActiveToday = useSelector(getActiveTodayTasks);
	const tasksActiveTomorrow = useSelector(getActiveTomorrowTasks);
	
	const completedTasks = useSelector(getAllCompletedTasks);
	const unUsedTasks = useSelector(getUnusedTasks);
	
	const getSorted = list => {
		return list.sort((a, b) => {
			const dateA = new Date(a.taskDate);
			const dateB = new Date(b.taskDate);
			if (dateA < dateB) {
				return -1;
			}
			if (dateA > dateB) {
				return 1;
			}
			
			return 0;
		});
	};
	
	const todayCards = [...getSorted(tasksActiveToday)];
	
	
	return (
		<DashBoardContainer>
			<Container>
				<section className="today-section">
					<h3 className="dashboard-title">Today</h3>
					<CardList isVisible={true} tasks={todayCards} onCloseModal={() => setIsCreateFormShow(false)}
							  isCreateFormShow={isCreateFormShow}/>
				</section>
				<section>
					<h3 className="dashboard-title">Time is over</h3>
					<CardList tasks={getSorted(unUsedTasks)}/>
				</section>
				<section>
					<h3 className="dashboard-title">Tomorrow</h3>
					<CardList tasks={getSorted(tasksActiveTomorrow)}/>
				</section>
				<section className="done-section">
					<div className="wrapper-done">
						<Button className={doneIsShown ? "active" : ""} onClick={() => setDoneIsShown(!doneIsShown)}>
							Done
						</Button>
					</div>
					{doneIsShown && <CardList tasks={completedTasks}/>}
				</section>
				<div className="add-task-button">
					<Button type="button" onClick={() => setIsCreateFormShow(true)}>
						<FaPlus size="1.25rem"/>
					</Button>
				</div>
			</Container>
		</DashBoardContainer>
	)
}

export default Dashboard;