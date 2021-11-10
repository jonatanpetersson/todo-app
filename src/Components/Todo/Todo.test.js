import { render, screen } from '@testing-library/react';
import Todo from '../Todo/Todo';

describe('Todo test suite', () => {

  test('Todo renders', () => {
    const todo = {
      title: 'Test Todo',
      text: 'Lorem Ipsum',
      done: true,
      id: 'whatever',
    };
    const todos = [todo];

    render(<Todo todo={todo} todos={todos} />);
    const todoTitle = screen.getByText('Test Todo');
    const todoText = screen.getByText('Lorem Ipsum');

    expect(todoTitle).toBeInTheDocument();
    expect(todoText).toBeInTheDocument();
  });
});