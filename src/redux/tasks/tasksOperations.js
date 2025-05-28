import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";


const getTasks = createAsyncThunk('tasks/getTasks',
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.get('/tasks');
			// token.set(response.data.accessToken);
			console.log("LoginUser", response);
			
			return response;
		} catch (err) {
			// console.log("LoginErrror", err);
			return thunkAPI.rejectWithValue(err);
		}
	});


const tasksOperations = {
	getTasks,
}

export default tasksOperations;