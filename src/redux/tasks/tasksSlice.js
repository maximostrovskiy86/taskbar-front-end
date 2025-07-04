import { createSlice } from "@reduxjs/toolkit";
import tasksOperations from "./tasksOperations";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (builder) => {
    builder

      // GET ALL TASKS
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

      // CREATE A NEW TASK
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

      //EDIT TASK
      .addCase(tasksOperations.updateTask.pending, (state, _) => {
        state.isLoading = true;
      })

      .addCase(tasksOperations.updateTask.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (task) => task._id === action.payload.data.task._id,
        );

        state.data.splice(index, 1, action.payload.data.task);
        // state.data[index] = action.payload.data.task; // second variant
        state.isLoading = false;
        state.error = null;
      })
      .addCase(tasksOperations.updateTask.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      // DELETE TASK
      .addCase(tasksOperations.deleteTask.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(tasksOperations.deleteTask.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (task) => task._id !== action.payload.data.task._id,
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(tasksOperations.deleteTask.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      // UPDATE STATUS TASK
      .addCase(tasksOperations.updateStatusTask.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(tasksOperations.updateStatusTask.fulfilled, (state, action) => {
        console.log("ACTION", action);
        const index = state.data.findIndex(
          (task) => task._id === action.payload.data.task._id,
        );
        state.data.splice(index, 1, action.payload.data.task);

        state.isLoading = false;
        state.error = null;
      })
      .addCase(tasksOperations.updateStatusTask.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const tasksReducer = taskSlice.reducer;
