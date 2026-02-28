import { useState } from 'react';

export function useCounter(initialCount = 0, step = 1) {
  const [count, setCount] = useState(initialCount);
  return {
    count,
    increment: () => setCount((c) => c + step),
    decrement: () => setCount((c) => c - step),
    reset: () => setCount(initialCount),
  };
}
