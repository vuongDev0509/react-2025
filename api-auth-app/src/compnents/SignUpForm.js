import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL      = 'https://6879201863f24f1fdca0f79f.mockapi.io/users/';
const cloudName    = 'dfc6e0mla';
const uploadPreset = 'user_avatar';

function SignUpForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: ''
  });

  const [isUploading, setIsUploading] = useState(false); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);

    const avatarUrl = await uploadToCloudinary(file);
    if (avatarUrl) {
      setForm((prev) => ({ ...prev, avatar: avatarUrl }));
    } else {
      alert('Image upload failed. Please try again.');
    }

    setIsUploading(false);
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error('Upload failed:', error);
      return null;
    }
  };

  const validateForm = ({ confirmPassword, password, avatar }) => {
    if (password !== confirmPassword) {
      alert('The confirmation password does not match.');
      return false;
    }

    if (!avatar || !avatar.startsWith('http')) {
      alert('You have not uploaded a avatar.');
      return false;
    }

    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;

    const { confirmPassword, ...payload } = form; // Remove confirmPassword when sending to the API.

    try {
      await axios.post(API_URL, form, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert('Registration successful!');
      navigate('/');
    } catch (error) {
      alert('Resgistration failed!');
      console.error('Registration error:', error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        required
      />

      <input
        type="file"
        name="avatar"
        accept="image/*"
        onChange={handleFileChange}
        required
      />

      {isUploading && <p>Uploading image...</p>}

      {form.avatar && (
        <div>
          <p>Image uploaded:</p>
          <img src={form.avatar} alt="Avatar" width={150} height={150} />
        </div>
      )}

      <button type="submit" disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Sign Up'}
      </button>

      <p>
        Already have an account?{' '}
        <Link to="/" className="back-button">
          Login
        </Link>
      </p>
    </form>
  );
}

export default SignUpForm;