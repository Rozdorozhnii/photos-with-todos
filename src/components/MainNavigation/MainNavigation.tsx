import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.scss';

export const MainNavigation: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink
          to="/"
          // activeClassName="is-active"
        >
          Home
        </NavLink>

        <NavLink
          to="/photos"
          // activeClassName="is-active"
        >
          Photos
        </NavLink>

        <NavLink
          to="/todos"
          // activeClassName="is-active"
        >
          Todos
        </NavLink>
      </div>
    </nav>
  );
};
