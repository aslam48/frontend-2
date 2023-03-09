import './App.css';
import { useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import Error from './components/Error/Error';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { setUser, clearUser } from './features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  
  const { user } = useSelector(store => store.auth)
  const dispatch = useDispatch()

  useEffect(() => {
      const getUser = async() =>{
          fetch('https://runor-backend.onrender.com/api/auth/login/success', {
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
  }, [dispatch])
  
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
