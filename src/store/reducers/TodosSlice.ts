/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [{
    id: 1,
    description: 'Lorem Ipsum',
    status: false,
  },
  {
    id: 2,
    description: 'Ipsum Lorem',
    status: false,
  }],
};

export const todosSlice: Slice<TodosState> = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleStatusTodo(state, action: PayloadAction<number>) {
      const toogledTodo = state.todos.find(todo => todo.id === action.payload);

      if (toogledTodo) {
        toogledTodo.status = !toogledTodo.status;
      }

      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      if (toogledTodo) {
        state.todos.push(toogledTodo);
      }
    },
  },
});

export default todosSlice.reducer;
