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
				console.log("getTasks", action);
				state.data = action.payload.data.tasks;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(tasksOperations.getTasks.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			})
			
			
			.addCase(tasksOperations.addTask.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(tasksOperations.addTask.fulfilled, (state, action) => {
				console.log("addTask", action);
				state.data = [...state.data, action.payload.data.task];
				state.isLoading = false;
				state.error = null;
			})
			.addCase(tasksOperations.addTask.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			})
		
		// .addCase(addUserProductByDay.pending, (state, _) => {
		// 	state.isLoading = true;
		// })
		// .addCase(addUserProductByDay.fulfilled, (state, action) => {
		// 	state.eatenProduct = action.payload.data.eatenProduct;
		// 	state.day = action.payload.data.newDay ? action.payload.data.newDay : action.payload.data.day;
		// 	state.day.daySummary = action.payload.data.newSummary ? action.payload.data.newSummary : action.payload.data.daySummary;
		// 	state.isLoading = false;
		// 	state.error = null;
		// })
		// .addCase(addUserProductByDay.rejected, (state, action) => {
		// 	state.error = action.payload;
		// 	state.isLoading = false;
		// })
	}
})

export const tasksReducer = taskSlice.reducer;
