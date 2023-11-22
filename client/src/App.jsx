import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import * as authService from './services/authService'
import AuthContext from './contexts/AuthContext'

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import GameList from './components/GameList/GameList'
import GameCreate from './components/GameCreate/GameCreate'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import GameDetails from './components/GameDetails/GameDetails'
import Logout from './components/Logout/Logout'


function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(()=>{
    localStorage.removeItem('accessToken');

    return {};
  })

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password)

    setAuth(result);
    localStorage.setItem('accessToken',result.accessToken)
    navigate('/');
  }

  
  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email,values.password)
    setAuth(result);
    localStorage.setItem('accessToken',result.accessToken)
    
    navigate('/')
  }
  const logoutHandler = () =>{
    setAuth({});
    localStorage.removeItem('accessToken')

  }
  
  const values = {
    logoutHandler,
    registerSubmitHandler,
    loginSubmitHandler,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthContext.Provider value={values}>
      <div id="box">
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<GameList />} />
          <Route path='/games/:gameId' element={<GameDetails />} />
          <Route path='/create' element={<GameCreate />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App
