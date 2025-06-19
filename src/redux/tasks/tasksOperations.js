import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";


const getTasks = createAsyncThunk('tasks/getTasks',
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.get('/tasks');
			// token.set(response.data.accessToken);
			// console.log("LoginUser", response);
			
			return response;
		} catch (err) {
			// console.log("LoginErrror", err);
			return thunkAPI.rejectWithValue(err);
		}
	});

const createTask = createAsyncThunk('tasks/addTask',
	async (credentials, thunkAPI) => {
		
		try {
			const response = await axios.post('/tasks', credentials);
			console.log("addTak", credentials);
			
			return response;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	})


const updateTask = createAsyncThunk('tasks/updateTask',
	async (credentials, thunkAPI) => {
		const {id} = credentials;
		const {category, difficulty, taskDate, taskName} = credentials;
		try {
			
			const response = await axios.put(`/tasks/${id}`, {category, difficulty, taskDate, taskName});
			console.log("response", response);
			
			return response;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	})

const deleteTask = createAsyncThunk('tasks/deleteTask',
	async (id, thunkAPI) => {
		
		try {
			const response = await axios.delete(`/tasks/${id}`,);
			console.log("response", response);
			
			return response;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	})

const tasksOperations = {
	getTasks,
	createTask,
	updateTask,
	deleteTask
}

export default tasksOperations;