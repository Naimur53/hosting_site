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
import DomainBanner from './pages/DomainName/SmallCompo/DomainBanner/DomainBanner';
import DomainName from './pages/DomainName/DomainName';
import LegalDocuments from './pages/LegalDocuments/LegalDocuments';
import Ecology1 from './pages/Ecology1/Ecology1';
import Ecology2 from './pages/Ecology2/Ecology2';
import TransferDomain from './pages/TransferDomain/TransferDomain';
import Vps from './pages/Vps/Vps';
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
          <Route path='/domain-name' element={<DomainName />} />
          <Route path='/legal-document' element={<LegalDocuments />} />
          <Route path='/ecology1' element={<Ecology1 />} />
          <Route path='/ecology2' element={<Ecology2 />} />
          <Route path='/vps' element={<Vps />} />
          <Route path='/transfer-domain' element={<TransferDomain />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<SignIn />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
