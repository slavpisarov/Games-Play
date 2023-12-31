import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext'

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import GameList from './components/GameList/GameList'
import GameCreate from './components/GameCreate/GameCreate'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import GameDetails from './components/GameDetails/GameDetails'
import Logout from './components/Logout/Logout'
import GameEdit from './components/GameEdit/GameEdit'
import ErrorBoundary from './components/ErrorBoundary'
import AuthGuard from './guards/AuthGuard'


function App() {

  return (

    <ErrorBoundary>
      <AuthProvider >
        <div id="box">
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/games' element={<GameList />} />
            <Route path='/games/:gameId' element={<GameDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route element={<AuthGuard />}> {/* guestGuard */}
              <Route path='/games/:gameId/edit' element={<GameEdit />} />
              <Route path='/create' element={<GameCreate />} />
              <Route path='/logout' element={<Logout />} />
            </Route >
          </Routes>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
