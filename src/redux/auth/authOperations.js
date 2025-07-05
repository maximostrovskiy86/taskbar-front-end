import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.baseURL = "https://questify-back-end.onrender.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/registration",
  async (credentials, thunkAPI) => {
    try {
      return await axios.post("/auth/registration", credentials);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const response = await axios.post("/auth/login", credentials);
    token.set(response.data.accessToken);

    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    // const response = await axios.post('/auth/logout');
    token.unset();
    // return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

// const authCurrentUserRefresh = createAsyncThunk('auth/refresh',
// 	async (_, thunkAPI) => {
// 		const state = thunkAPI.getState();
// 		const persistedToken = state.auth.accessToken;
//
// 		if (persistedToken === null) {
// 			return thunkAPI.rejectWithValue(undefined);
// 		}
//
// 		token.set(persistedToken);
// 		try {
// 			return await axios.get(`/tasks`);
// 		} catch (err) {
// 			return thunkAPI.rejectWithValue(err);
// 		}
// 	})

const authOperations = {
  register,
  login,
  logOut,
  token,
  // authCurrentUserRefresh
};

export default authOperations;
