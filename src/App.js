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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<SignIn />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
