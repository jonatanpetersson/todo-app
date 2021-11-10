import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form test suite', () => {

  beforeEach(() => {
    render(<Form />);
  })

  test('Form renders', () => {
    const form = screen.getByTestId('form');

    expect(form).toBeInTheDocument();
  });

  test('Form displays optional title input field when typing', () => {
    const formTextInput = screen.getByTestId('form-text');
    fireEvent.change(formTextInput, {
      target: {
        value: 'todo'
      }
    });
    const formTitleInput = screen.getByPlaceholderText(/optional/i);

    expect(formTitleInput).toBeInTheDocument();
  });

  test('Form displays "please"-error if input not provided when submitting', () => {
    const formTextInput = screen.getByPlaceholderText(/add a thing/i);
    fireEvent.submit(formTextInput);
    const typedInput = screen.getByPlaceholderText(/please/i);

    expect(typedInput).toBeInTheDocument();
  });
});