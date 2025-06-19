export const getAllActiveTasks = state => {
	// console.log("SATTE", state)
	
	return state.tasks.data.filter(task => !task.completed)
};

export const getAllCompletedTasks = (state) => {
	console.log("SATTE", state)
	return state.tasks.data.filter(task => {
		console.log("TASKCOMPLETED", task);
		
		return  task.completed
	})
};