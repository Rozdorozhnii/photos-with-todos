/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

// eslint-disable-next-line no-shadow
export enum SortBy {
  all = 'all',
  completed = 'true',
  active = 'false'
}

export interface TodosState {
  todos: Todo[];
  filteredStatus: SortBy;
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
  filteredStatus: SortBy.all,
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
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    setStatusFilter(state, action: PayloadAction<SortBy>) {
      state.filteredStatus = action.payload;
    },
  },
});

export default todosSlice.reducer;
