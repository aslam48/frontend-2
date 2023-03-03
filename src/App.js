import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import { useLocation } from 'react-router-dom';

function App() {
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <div className={` ${pathname==='/login'?'h-screen w-screen': ''}`}>
      <main className={`mt-20 lg:mt-40 ${pathname==='/login'?'h-screen w-screen': ''}`}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
