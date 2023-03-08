import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import Error from './components/Error/Error';
import Login from './pages/Login/Login';
import { useLocation } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import { setUser, clearUser } from './features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const {pathname} = useLocation()
  const [isLoading, setIsLoading] = useState()
  const { user } = useSelector(store => store.auth)
  const dispatch = useDispatch()

  useEffect(() => {
      const getUser = async() =>{
          fetch('http://localhost:8000/api/auth/login/success', {
            credentials: 'include',
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credential': true,
              'Authorization': `Bearer ${document.cookie.startsWith('jwt') }`
            },
          })
          .then((res)=>{
            return res.json()
          })
          .then((data) =>{
            console.log('received: ', data)
            dispatch(setUser(data.user))
          })
        .catch((error)=>{
            console.log(error)
            dispatch(clearUser())
        })
    }
    getUser()
  }, [])
  
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={ user? <Navigate to='/' />: <Login /> }/>
          <Route path='/signup' element={ user? <Navigate to='/' />: <Signup /> }/>
          <Route path='*' element={<Error/>} />
        </Routes>
    </div>
  );
}

export default App;
