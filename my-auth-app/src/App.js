import { useState } from 'react';
import './App.css';

import LoginForm from './compnents/LoginForm';
import SignUpForm from './compnents/SignUpForm';

function App() {
  const [isLogin, setIsLogin] = useState(true); 
  const showSignUp = () => setIsLogin(false);
  const showLogin = () => setIsLogin(true);
  return (
    <div className="App">
      <h1>Login or Singup</h1>
        { isLogin ? (
          <LoginForm onSwitchToSignUp={showSignUp} /> 
        ): (
           <SignUpForm onSwitchToLogin={showLogin} />
        )
        }
    </div>
  );
}

export default App;
