import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import LoginForm from './compnents/LoginForm';
import SignUpForm from './compnents/SignUpForm';
import WelcomePage from './compnents/WelcomePage';

function App() {

  return (
    <div className='App'> 
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUpForm/>} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
