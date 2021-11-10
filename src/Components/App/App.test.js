import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App test suite', () => {

  beforeEach(() => {
    render(<App />);
  })

  test('Form renders', () => {
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });

  test('Create new todo works', () => {
    const formInput = screen.getByTestId('form-text');
    const formSubmit = screen.getByTestId('submit');

    fireEvent.change(formInput, {
      target: {
        value: 'testingtesting'
      }
    });
    fireEvent.click(formSubmit);

    const createdTodo = screen.getByText('testingtesting');

    expect(createdTodo).toBeInTheDocument();
  });
});
