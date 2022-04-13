import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
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
    <div className="todoPage">
      <div className="todoPage__top">
        <h2>Page with Todos</h2>
        <Form.Label htmlFor="select-completed" style={{ width: '350px', marginBottom: '16px' }}>
          Toggle completion status below
          <Form.Select
            style={{ marginTop: '8px' }}
            id="select-completed"
            value={filteredStatus}
            onChange={(event) => dispatch(setStatusFilter(event.target.value))}
          >
            <option value={SortBy.all}>All</option>
            <option value={SortBy.done}>Done</option>
            <option value={SortBy.todo}>Todo</option>
          </Form.Select>
        </Form.Label>
        <Form
          style={{ width: '350px' }}
          onSubmit={onSubmitNewTodo}
          method="post"
        >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="new-todo-input">Add new todo below</Form.Label>
            <Form.Control
              id="new-todo-input"
              placeholder="Enter here"
              value={newTodoValue}
              onChange={(e) => setNewTodoValue(e.target.value)}
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Add todo
          </Button>
        </Form>
      </div>
      <div className="todoPage__content">
        <ul className="todoPage__list">
          {visibleTodos.map(todo => (
            <li key={todo.id} className="todoPage__list-item">
              <div>
                <input
                  checked={todo.status}
                  type="checkbox"
                  onChange={() => dispatch(toggleStatusTodo(todo.id))}
                />
                <Link
                  className={cn('todoPage__link', { 'todoPage__link--checked': todo.status })}
                  to={`/todos/${todo.id}`}
                >
                  {todo.description}
                </Link>
              </div>
              <Button
                variant="danger"
                onClick={() => dispatch(removeTodo(todo.id))}
                type="button"
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
