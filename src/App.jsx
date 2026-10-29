import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import {Route, Routes} from "react-router-dom"
import './App.css'
import { Home } from './pages/Home'
import { Home2 } from './pages/Home2'
import { Home3 } from './pages/Home3'
import { Intro } from './pages/Intro'
import { Login } from './pages/Login'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Games } from './pages/Games'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState("")

  return (
    <div id='root-container'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
    </Routes>
    </div>
  )
}

export default App
