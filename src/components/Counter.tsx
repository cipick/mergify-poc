import React, { useState } from 'react';

export interface CounterProps {
  initialCount?: number;
  step?: number;
}

export function Counter({ initialCount = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="counter">
      <span data-testid="count">{count}</span>
      <button onClick={() => setCount((c) => c + step)} aria-label="increment">
        +
      </button>
      <button onClick={() => setCount((c) => c - step)} aria-label="decrement">
        -
      </button>
      <button onClick={() => setCount(initialCount)} aria-label="reset">
        Reset
      </button>
    </div>
  );
}
