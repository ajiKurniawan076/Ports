import './App.css'
import { Navbar } from './components/Navbar'
import { Port } from './components/sections/Port'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { createContext, useState } from 'react'
import { Footer } from './components/Footer'


export const Pages = createContext<any>(null)
export const Portopage = createContext<any>(null)
function App() {
  const [page, setpage] = useState<String|null>(null)
  const [port, setport] = useState(false)
  const [dark, setdark] = useState(false)
  return (
    <BrowserRouter>
    <Pages.Provider value={{page, setpage, dark, setdark}}>
    <div className={`h-screen w-screen px-2 flex flex-col duration-500 ${dark?' bg-black ':''}`}>
    <Portopage.Provider value={{port,setport}}>
    <Navbar/>
    <Port/>
    </Portopage.Provider>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
    </Pages.Provider>
    </BrowserRouter>
  )
}

export default App
