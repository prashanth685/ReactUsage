import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
// import userSlice from "../app/slices/userSlice";
// import todosSlice from "../app/slices/todos";

export const store = configureStore({
  reducer: {
    // users: userSlice,
    // todos: todosSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});
