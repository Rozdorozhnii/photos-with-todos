import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { todosSlice } from '../../store/reducers/TodosSlice';
import './TodosPage.scss';

export const TodosPage: React.FC = () => {
  const { todos } = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();
  const { toggleStatusTodo } = todosSlice.actions;

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label htmlFor="checkbox">
              <input
                id="checkbox"
                checked={todo.status}
                type="checkbox"
                onChange={() => dispatch(toggleStatusTodo(todo.id))}
              />
              <Link to={`/todos/${todo.id}`}>{`${todo.description} ${todo.id}`}</Link>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
