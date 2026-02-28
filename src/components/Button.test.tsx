import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders with the given label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies the correct variant class', () => {
    render(<Button label="Danger" variant="danger" />);
    expect(screen.getByRole('button')).toHaveClass('btn-danger');
  });

  it('defaults to primary variant', () => {
    render(<Button label="Default" />);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button label="Submit" onClick={handleClick} />);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button label="Disabled" disabled onClick={handleClick} />);
    await user.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('has disabled attribute when disabled prop is true', () => {
    render(<Button label="Disabled" disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('matches snapshot', () => {
    const { container } = render(<Button label="Snap" variant="secondary" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
