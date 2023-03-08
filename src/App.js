import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import { useLocation } from 'react-router-dom';
import Signup from './pages/Signup/Signup';

function App() {
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Error/>} />
        </Routes>
    </div>
  );
}

export default App;
