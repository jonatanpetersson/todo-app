import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('Todo List test suite', () => {

  test('Todo list renders', () => {
    render(<TodoList />);
    const todoList = screen.getByTestId('todo-list');

    expect(todoList).toBeInTheDocument();
  });

  test('Todos render', () => {
    const todos = [
      {
        title: 'Test Todo',
        text: 'Lorem Ipsum',
        done: false,
        id: 'whatever',
      },
      {
        title: '',
        text: 'Ipsum Lorem',
        done: false,
        id: 'whatever2',
      },
    ];
    render(<TodoList todos={todos} />);
    const todoText = screen.getByText('Lorem Ipsum');
    const todoText2 = screen.getByText('Ipsum Lorem');

    expect(todoText).toBeInTheDocument();
    expect(todoText2).toBeInTheDocument();
  });
});