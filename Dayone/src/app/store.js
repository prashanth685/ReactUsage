import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../app/slices/userSlice";
import todosSlice from "../app/slices/todos";

export const store = configureStore({
  reducer: {
    users: userSlice,
    todos: todosSlice,
  },
});
