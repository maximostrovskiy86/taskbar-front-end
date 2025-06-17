export const getAllTasks = state => {
	console.log("SATTE", state)
	
	return state.tasks.data
};