// src/App.js
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import { useState} from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen h-screen flex flex-col bg-sky-500'>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path='/signup'
          element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path='/dashboard'
          element={
            isLoggedIn ? (
              <Dashboard/>
            ) : (
              <Navigate to='/login' />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
