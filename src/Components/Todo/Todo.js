import './Todo.css';
import React from 'react';

export default function Todo({ todo, todos, setTodos }) {
  const removeTodo = ev => {
    ev.stopPropagation();
    const updatedTodos = todos.filter(el => el.id !== todo.id);
    setTodos(updatedTodos);
    localStorage.setItem('state', JSON.stringify(updatedTodos));
  };

  const toggleDone = () => {
    const updatedTodoObject = {
      title: todo.title,
      text: todo.text,
      done: !todo.done,
      id: todo.id,
    };
    const updatedTodos = todos.map(el => (el.id === todo.id ? updatedTodoObject : el));
    setTodos(updatedTodos);
    localStorage.setItem('state', JSON.stringify(updatedTodos));
  };

  return (
    <article data-testid="todo" className={`todo-list__todo ${todo.done ? 'todo-list__todo--done' : ''}`} onClick={toggleDone}>
      <div className="todo-list__todo-wrapper">
        {todo.title ? <h2 className="todo-list__todo-title">{todo.title}</h2> : ''}
        <p className="todo-list__todo-text">{todo.text}</p>
      </div>
      <button data-testid="todo-button" className={`todo-list__todo-button material-icons ${todo.done ? '' : 'todo-list__todo-button--hidden'}`} onClick={removeTodo}>&#xE15B;</button>
    </article>
  );
}
