import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../app/slices/userSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
