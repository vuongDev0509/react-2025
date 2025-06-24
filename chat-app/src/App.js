import logo from './logo.svg';
import './App.css';
import './App.scss';
import ChatWindow from './components/ChatWindow';


function App() {
  return (
    <div className="App">
      <div className="vv-app-chat"> 
        <div class="container"> 
          <h1 style={{ textAlign: "center" }}>Fake Chat App 💬</h1>
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}

export default App;
