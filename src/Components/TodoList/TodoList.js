import './TodoList.css';
import React from 'react';
import Todo from '../Todo/Todo';

export default function TodoList({ todos, setTodos }) {
  return (
    <section data-testid="todo-list" className="todo-list">
      {todos ? todos.map(todo => (!todo.done ? <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} /> : '')) : ''}
      {todos ? todos.map(todo => (todo.done ? <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} /> : '')) : ''}
    </section>
  );
}
