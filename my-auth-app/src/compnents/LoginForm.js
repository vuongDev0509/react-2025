// src/LoginForm.js
import { useState } from 'react';

function LoginForm({ onSwitchToSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Get user from localStorage
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (!savedUser) {
      alert('No account yet. Please register.');
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      alert(`Login successful! Hello! ${savedUser.username}`);
    } else {
      alert('Wrong email or password!');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <button type="submit">Login</button>
      <p>
        No account yet?{' '}
        <span onClick={onSwitchToSignUp}>Register</span>
      </p>
    </form>
  );
}

export default LoginForm;
