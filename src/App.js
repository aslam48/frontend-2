import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
