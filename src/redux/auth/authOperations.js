import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.Authorization = "";
	},
};

const register = createAsyncThunk('auth/register',
	async (credentials, thunkAPI) => {
		try {
			return await axios.post('/auth/register', credentials);
			
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message);
		}
	});

const login = createAsyncThunk('auth/login',
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.post('/auth/login', credentials);
			token.set(response.data.accessToken);
			// console.log("LoginUser", response);
			
			return response;
		} catch (err) {
			// console.log("LoginErrror", err);
			return thunkAPI.rejectWithValue(err);
		}
	});

const logOut = createAsyncThunk('auth/logout',
	async (_, thunkAPI) => {
		try {
			const response = await axios.post('/auth/logout');
			// console.log("response.data.accessToken", response)
			token.unset();
			return response;
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message);
		}
	})

// const refreshToken = createAsyncThunk('auth/refresh',
// 	async (_, thunkAPI) => {
//
// 		const state = thunkAPI.getState();
// 		console.log("stateAuth", state)
// 		const persistSid = state.auth.sid;
// 		const persistRefreshToken = state.auth.refreshToken;
//
// 		if (persistRefreshToken === null) {
// 			return;
// 		}
// 		console.log("Sid", state.auth.sid)
// 		console.log("RefreshToken", state.auth)
//
// 		token.set(persistRefreshToken);
// 		try {
// 			const response = await axios.post('/auth/refresh', {sid: persistSid});
// 			console.log("persistTokenSid", response)
// 			return response;
// 		} catch (err) {
// 			return thunkAPI.rejectWithValue(err.message);
// 		}
// 	})

const authOperations = {
	register,
	login,
	logOut,
	// refreshToken,
	token
}

export default authOperations;