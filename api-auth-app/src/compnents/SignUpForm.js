import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API_URL = 'https://6879201863f24f1fdca0f79f.mockapi.io/users/';

function SignUpForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '', avatar: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async e =>  {
    e.preventDefault();
    try {
      await axios.post(API_URL, form, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Registration successful!');
      navigate('/');
    } catch (error) {
      alert('Registration failed!');
      console.error('Error when registering:', error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
        <h2>SignUp</h2>
        <input type="text" name="name" placeholder="name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password"  placeholder="PassWord" value={form.password} onChange={handleChange} required />
        <input type="file" name="avatar" accept="image/*" onChange={handleChange} required />
        <button type="submit">SignUp</button>
        <p> Already have an account? 
          <Link to="/" className="back-button">Login</Link>   
        </p>
    </form>
  );
}
export default SignUpForm;
