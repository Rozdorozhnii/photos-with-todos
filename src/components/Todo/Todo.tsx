import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import './Todo.scss';

export const Todo: React.FC = () => {
  const params = useParams();
  const { todos } = useAppSelector(state => state.todos);
  const goalTodo = todos.find(todo => todo.id === Number(params.todoid));

  return (
    <div className="single todo">
      {`Single Todo with id #${params.todoid}`}
      <br />
      {`Description of todo ${goalTodo?.description}`}
    </div>
  );
};
