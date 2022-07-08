import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
