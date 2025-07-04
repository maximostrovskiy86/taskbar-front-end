import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from "redux-persist";
import { authReducer } from "./auth/authSlice";
import { tasksReducer } from "./tasks/tasksSlice";

// const middleware = (getDefaultMiddleware) =>
// 	 getDefaultMiddleware({
// 		serializableCheck: {
// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 		},
// 	});

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  // 	return getDefaultMiddleware({
  // 		serializableCheck: {
  // 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  // 		},
  // 	})
  // }
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
