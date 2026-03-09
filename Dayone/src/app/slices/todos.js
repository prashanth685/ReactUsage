import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchtodos = createAsyncThunk("todos/fetchtodos", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data;
});

const todos = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchtodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchtodos.fulfilled, (state, action) => {
        ((state.loading = false), (state.todos = action.payload));
      })
      .addCase(fetchtodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default todos.reducer;
