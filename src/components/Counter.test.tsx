import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
  it('renders with the default initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  it('renders with a custom initial count', () => {
    render(<Counter initialCount={10} />);
    expect(screen.getByTestId('count')).toHaveTextContent('10');
  });

  it('increments count by 1 on increment click', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole('button', { name: 'increment' }));
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  it('decrements count by 1 on decrement click', async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={5} />);
    await user.click(screen.getByRole('button', { name: 'decrement' }));
    expect(screen.getByTestId('count')).toHaveTextContent('4');
  });

  it('resets count to initial value on reset click', async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={3} />);
    await user.click(screen.getByRole('button', { name: 'increment' }));
    await user.click(screen.getByRole('button', { name: 'increment' }));
    expect(screen.getByTestId('count')).toHaveTextContent('5');
    await user.click(screen.getByRole('button', { name: 'reset' }));
    expect(screen.getByTestId('count')).toHaveTextContent('3');
  });

  it('increments by custom step', async () => {
    const user = userEvent.setup();
    render(<Counter step={5} />);
    await user.click(screen.getByRole('button', { name: 'increment' }));
    expect(screen.getByTestId('count')).toHaveTextContent('5');
  });

  it('allows count to go negative', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole('button', { name: 'decrement' }));
    expect(screen.getByTestId('count')).toHaveTextContent('-1');
  });
});
