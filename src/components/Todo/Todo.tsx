import React from 'react';
import { useParams } from 'react-router-dom';
import './Todo.scss';

export const Todo: React.FC = () => {
  const params = useParams();

  // eslint-disable-next-line no-console
  console.log(params);

  return (
    <div className="single todo">
      {`Single Todo with id #${params.todoid}`}
    </div>
  );
};
