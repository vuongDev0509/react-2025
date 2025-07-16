import { useState } from 'react';

function SignUpForm({ onSwitchToLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar]     = useState(null);
  const [preview, setPreview]   = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const generateUserId = () => {
    return 'user_' + Math.random().toString(36).substring(2); 
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onloadend = () => {
      const avatarBase64 = reader.result;

      const newUser = {
        id: generateUserId(),
        username,
        email,
        password,
        avatar: avatarBase64,
      };

      // save to localStorage
      localStorage.setItem('user', JSON.stringify(newUser));

      alert('Registration successful! Go to login.');
      onSwitchToLogin();
    };

    if (avatar) {
      reader.readAsDataURL(avatar);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
        <h2>SignUp</h2>
        <input type="text" placeholder="name" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="PassWord" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="file" accept="image/*" onChange={handleAvatarChange} required />
        {preview && <img src={preview} alt="Avatar preview" />}
        <button type="submit">SignUp</button>
        <p> Already have an account? <span onClick={onSwitchToLogin}>Login</span></p>
    </form>
  );
}

export default SignUpForm;
