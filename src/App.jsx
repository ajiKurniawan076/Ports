import { useState } from 'react'

import {Route, Routes} from "react-router-dom"
import './App.css'
import { Home } from './pages/Home'
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
