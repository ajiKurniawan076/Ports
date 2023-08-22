import { NavLink } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { useContext, useState } from "react"
import { Pages, Portopage } from "../App"
export const Navbar = () => {
  const [navopen, setnavopen] = useState(false)
  const {page} = useContext(Pages)
  const {setport} = useContext(Portopage)
  return (
    <div className="w-full flex justify-between mb-5 relative">
      <div className="flex flex-wrap items-center justify-between w-full">
        <div className="flex items-center gap-2 w-full relative">
          <img src='.\src\img\logo.png' alt="logo" className="h-full max-h-[75px]" />
          <div>
            <h2>BANG ONE</h2>
            <h6 className=" max-md:hidden">My Porofolio Website</h6>
          </div>
          <div className="flex gap-0 items-center ms-auto md:hidden">
          <h5 className="p-2">{page}</h5>
          <button className="bg-gray-500/30 p-3 rounded-md text-gray-500 hover:bg-gray-500/60" onClick={() => { setnavopen(!navopen) }}><AiOutlineMenu size={20} /></button>
          </div>
          <div className="flex ms-auto items-center me-10 gap-5 border-b-2 border-gray-400 rounded-xl max-md:hidden">
            <span className=" text-sm md:text-lg font-semibold">My Portofolio </span>
            <div className="flex text-gray-400/70 gap-0 items-end animate-ping w-[75px] h-[75px]">
              <img src="./src/img/arrow.png" alt="Arrow Here" className="mt-2 px-3"></img>
            </div>

          </div>
        </div>
        <div className={"md:flex items-start justify-center w-full" +
          (navopen ? "flex flex-grow " : " hidden ")}>
          <nav className="flex flex-col border-black/60 md:flex-row max-md:fixed top-[75px] bg-utama max-md:z-20 left-0 justify-start w-full mt-3 max-md:border-4 md:justify-center" onClick={()=>{setnavopen(false)}}>

            <NavLink to='' className="font-semibold sm:text-2xl flex justify-center items-end w-full md:w-[120px]"><p className="md:fixed md:top-[79px] h-[50px] w-full md:w-[120px] text-center md:rounded-t-lg duration-300">Home</p></NavLink>
            <NavLink to='about' className="font-semibold sm:text-2xl flex justify-center items-end w-full md:w-[120px]"><p className="md:fixed md:top-[79px] h-[50px] w-full md:w-[120px] text-center md:rounded-t-lg duration-300">About Me</p></NavLink>
            <NavLink to='contact' className="font-semibold sm:text-2xl flex justify-center items-end w-full md:w-[120px]"><p className="md:fixed md:top-[79px] h-[50px] w-full md:w-[120px] text-center md:rounded-t-lg duration-300">Contact</p></NavLink>
            <button className="md:hidden font-semibold sm:text-2xl flex justify-center items-end w-full md:w-[120px]" onClick={()=>{setport(true)}}><p className="h-[50px] w-full md:w-[120px] text-center md:rounded-t-lg duration-300">My Portofolio</p></button>


          </nav>
        </div>
      </div>
    </div>
  )
}
