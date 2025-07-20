// src/LoginForm.js
import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://6879201863f24f1fdca0f79f.mockapi.io/users/';

function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async e => {
    e.preventDefault();
    try {
        // get all user by API
        const res = await axios.get(API_URL);

        // Browse through the user list and check if there is anyone with duplicate email + password.
        const user = res.data.find(u => u.email === form.email && u.password === form.password);

        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          navigate('/welcome');
        } else {
          alert('Incorrect email or password!');
        }
      } catch (error) {
        alert('Login error!');
        console.error(error);
      }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
      <input type="password" placeholder="password" name="password" value={form.password} onChange={handleChange} required />
      <button type="submit">Login</button>
      <p>
        No account yet?{' '}
        <Link to="/signup" className="back-button">Register</Link>
      </p>
    </form>
  );
}

export default LoginForm;
