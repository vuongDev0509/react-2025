import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API_URL = 'https://6879201863f24f1fdca0f79f.mockapi.io/users/';

const cloudName = 'dfc6e0mla';
const uploadPreset = 'user_avatar';

function SignUpForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '', avatar: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', uploadPreset);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        data
      );
      return res.data.secure_url;
    } catch (err) {
      console.error('Upload ảnh thất bại: ', err);
      return null;
    }
  };

  const handleFileChange = async e => {
    const file = e.target.files[0];
    if (!file) return;
    const url = await uploadToCloudinary(file);
    if (url) {
      setForm(prev => ({ ...prev, avatar: url }));
    }
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
        <input type="file" name="avatar" accept="image/*" onChange={handleFileChange} required />

        {form.avatar && (
            <div>
              <p>Image uploaded:</p>
              <img src={form.avatar} alt="Avatar" width={150} height={150}  />
            </div>
        )}
        
        <button type="submit">SignUp</button>
        <p> Already have an account? 
          <Link to="/" className="back-button">Login</Link>   
        </p>
    </form>
  );
}
export default SignUpForm;
