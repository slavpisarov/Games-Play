import {Routes, Route} from 'react-router-dom'

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import GameList from './components/GameList/GameList'
import GameCreate from './components/GameCreate/GameCreate'


function App() {

  return (
    <div id="box">
        <Header/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/games' element={<GameList/>}/>
            <Route path='/create' element={<GameCreate/>}/>
        </Routes>
    </div>
  )
}

export default App
