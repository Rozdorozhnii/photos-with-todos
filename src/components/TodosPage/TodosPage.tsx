import React from 'react';
import { Outlet } from 'react-router-dom';
import './TodosPage.scss';

export const TodosPage: React.FC = () => {
  return (
    <div>
      <div>
        Todos
      </div>
      <Outlet />
    </div>
  );
};
