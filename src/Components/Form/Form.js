import './Form.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ todos, setTodos }) {
  const toggleForm = () => {
    setTimeout(() => {
      const inputTitle = document.querySelector('.form__title');
      const inputText = document.querySelector('.form__text');
      const inputSubmit = document.querySelector('.form__submit');

      if (inputText.value) {
        inputTitle.classList.remove('form__title--hidden');
        inputSubmit.classList.remove('form__submit--hidden');
      } else {
        inputTitle.classList.add('form__title--hidden');
        inputSubmit.classList.add('form__submit--hidden');
      }
    }, 0);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const inputTitle = document.querySelector('.form__title');
    const inputText = document.querySelector('.form__text');

    if (!inputText.value) {
      inputText.classList.add('form__text--required');
      inputText.placeholder = 'Add a thing to do, please...';
      setTimeout(() => {
        inputText.classList.remove('form__text--required');
        inputText.placeholder = 'Add a thing to do...';
      }, 2000);
    } else {
      const todoObject = {
        title: inputTitle.value,
        text: inputText.value,
        done: false,
        id: uuidv4(),
      };
      const updatedTodos = [todoObject, ...todos];
      setTodos(updatedTodos);
      localStorage.setItem('state', JSON.stringify(updatedTodos));
      inputTitle.value = '';
      inputText.value = '';
      toggleForm();
      inputText.focus();
    }
  };

  return (
    <form
      data-testid="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      className="form">
      <div className="form__input-wrapper">
        <input
          data-testid="form-title"
          name="inputTitle"
          type="text"
          placeholder="Add a title... (optional)"
          className="form__title form__title--hidden" />
        <input
          data-testid="form-text"
          name="inputText"
          type="text"
          placeholder="Add a thing to do..."
          onChange={toggleForm}
          autoFocus
          className="form__text" />
      </div>
      <input
        data-testid="submit"
        name="sumbit"
        value="&#xE145;"
        type="submit"
        className="form__submit form__submit--hidden material-icons" />
    </form>
  );
}
