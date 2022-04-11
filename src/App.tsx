import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainNavigation } from './components/MainNavigation';
import { RootPage } from './components/RootPage';
import { PhotosPage } from './components/PhotosPage';
import { TodosPage } from './components/TodosPage';
import { Todo } from './components/Todo';
import { PageNotFound } from './components/PageNotFound';

import './App.scss';

export const App: React.FC = () => {
  return (
    <>
      <MainNavigation />

      <section className="main">
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="photos" element={<PhotosPage />} />
          <Route path="todos" element={<TodosPage />} />
          <Route path="todos/:todoid" element={<Todo />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </section>
    </>
  );
};
