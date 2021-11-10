import './App.css';
import React, { useState } from 'react';
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';

export default function App() {
  const [todos, setToDos] = useState(localStorage.state ? JSON.parse(localStorage.getItem('state')) : []);

  return (
    <div className="page">
      <header className="page__header">
      </header>
      <main className="page__main">
        <TodoList
          todos={todos}
          setTodos={setToDos}
          />
        <Form
          todos={todos}
          setTodos={setToDos}
          />
      </main>
      <footer className="page__footer">
      </footer>
    </div>
  );
}
