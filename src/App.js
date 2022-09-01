import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import SignIn from './pages/SignIn/SignIn';
import WebHosting from './pages/WebHosting/WebHosting';
import VpsGame from './pages/VpsGame/VpsGame';
import EmailHosting from './pages/EmailHosting/EmailHosting';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/web-hosting' element={<WebHosting />} />
          <Route path='/vps-game' element={<VpsGame />} />
          <Route path='/email-hosting' element={<EmailHosting />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<SignIn />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
