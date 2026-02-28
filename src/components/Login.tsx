import React, { useState } from 'react';

export function Login({ onSubmit }: { onSubmit?: (username: string) => void }) {
  const [username, setUsername] = useState('');

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit?.(username); }}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        aria-label="username"
      />
      <button type="submit">Login</button>
    </form>
  );
}
