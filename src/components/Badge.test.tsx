import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders with the given label', () => {
    render(<Badge label="New" />);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies the correct color class', () => {
    render(<Badge label="Success" color="green" />);
    expect(screen.getByText('Success')).toHaveClass('badge-green');
  });

  it('defaults to gray color', () => {
    render(<Badge label="Default" />);
    expect(screen.getByText('Default')).toHaveClass('badge-gray');
  });
});
