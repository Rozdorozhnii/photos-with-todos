import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { todosSlice, SortBy } from '../../store/reducers/TodosSlice';
import './TodosPage.scss';

export const TodosPage: React.FC = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
  const { todos, filteredStatus } = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();
  const {
    toggleStatusTodo,
    addTodo,
    removeTodo,
    setStatusFilter,
  } = todosSlice.actions;

  const onSubmitNewTodo = (event: React.FormEvent) => {
    event.preventDefault();

    const newTodoId: number = Math.max(...todos.map(todo => todo.id)) + 1;

    const newTodo: Todo = {
      id: newTodoId,
      description: newTodoValue,
      status: false,
    };

    if (newTodoValue) {
      dispatch(addTodo(newTodo));
    }

    setNewTodoValue('');
  };

  let visibleTodos = [...todos].sort((a, b) => Number(a.status) - Number(b.status));

  if (filteredStatus !== 'all') {
    visibleTodos = todos.filter(todo => String(todo.status) === filteredStatus);
  }

  return (
    <div>
      <label htmlFor="select-completed">
        Toggle completion status&nbsp;
        <select
          className="TodoList__interactive-input"
          id="select-completed"
          value={filteredStatus}
          onChange={(event) => dispatch(setStatusFilter(event.target.value))}
        >
          <option value={SortBy.all}>All</option>
          <option value={SortBy.completed}>Completed</option>
          <option value={SortBy.active}>Active</option>
        </select>
      </label>
      <form
        onSubmit={onSubmitNewTodo}
        method="post"
      >
        <input
          value={newTodoValue}
          onChange={(e) => setNewTodoValue(e.target.value)}
        />
        <button
          type="submit"
        >
          Add todo
        </button>
      </form>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            <label htmlFor="checkbox">
              <input
                id="checkbox"
                checked={todo.status}
                type="checkbox"
                onChange={() => dispatch(toggleStatusTodo(todo.id))}
              />
              <Link
                className={cn({ 'Todo--checked': todo.status })}
                to={`/todos/${todo.id}`}
              >
                {`${todo.description} ${todo.id}`}
              </Link>
            </label>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              type="button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
