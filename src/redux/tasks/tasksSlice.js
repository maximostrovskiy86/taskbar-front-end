import {createSlice} from '@reduxjs/toolkit'
import tasksOperations from "./tasksOperations";
// import authOperations from "../auth/authOperations";
// import {getCurrentDate} from "../../helpers/getCurrentDay";


const initialState = {
	data: [],
	isLoading: false,
	error: null,
}


const taskSlice = createSlice({
	name: "tasks",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(tasksOperations.getTasks.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(tasksOperations.getTasks.fulfilled, (state, action) => {
				// console.log("tasks", action);
				state.data = action.payload.data.tasks;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(tasksOperations.getTasks.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			})
			
			
			.addCase(tasksOperations.createTask.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(tasksOperations.createTask.fulfilled, (state, action) => {
				// console.log("tasks", action);
				state.data = [...state.data, action.payload.data.task];
				state.isLoading = false;
				state.error = null;
			})
			.addCase(tasksOperations.createTask.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			})
			
			.addCase(tasksOperations.updateTask.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(tasksOperations.updateTask.fulfilled, (state, action) => {
				console.log("action", action.payload)
				console.log("state", state)
				state.data = [...state.data, action.payload.data.task];
				state.isLoading = false;
				state.error = null;
			})
			.addCase(tasksOperations.updateTask.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			})
	}
})

export const tasksReducer = taskSlice.reducer;
