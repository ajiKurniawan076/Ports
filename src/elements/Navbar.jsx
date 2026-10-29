import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
export const Navbar = () => {
    const [show, setShow] = useState(false)
    const [nav, setNav] = useState('/')
  return (
    <div className='fixed shadow-2xl z-30 top-0 left-0 flex flex-col w-full min-h-16 lg:h-36 opacity-95'>  
        <div className='h-full flex justify-around place-items-center z-20 text-amber-100 w-full bg-linear-[45deg,#3d676b_50%,#324e51_50%]'>
            <div className='flex w-[60%] itens-center justify-center h-full z-20 p-4 gap-2'>
                <img src="assets/profile.png" alt="" className='rounded-full border-4 w-20 h-20 lg:h-30  lg:w-30 '/>
                <span className=' flex text-2xl md:text-3xl items-center font-extrabold '>Aji Kurniawan</span>
            </div>
            <div className='lg:grid lg:grid-cols-5 w-[40%]  h-full place-items-center hidden lg:show'>
                <a href='#home' className={`flex h-full w-full place-items-center justify-center duration-400 hover:bg-white/20 hover:zoom-125 ${nav==='/'? 'text-white font-bold' :'font-bold'  }`} onClick={()=>{setNav('/')}}>Home</a>
                <a href='#service' className={`flex h-full w-full place-items-center justify-center duration-400 hover:bg-white/20 hover:zoom-125 ${nav==='/service'? 'text-white font-bold' :'font-bold'  }`} onClick={()=>{setNav('/service')}}>Skills</a>
                <a href='#about' className={`flex h-full w-full place-items-center justify-center duration-400 hover:bg-white/20 hover:zoom-125 ${nav==='/about'? 'text-white font-bold' :'font-bold'  }`} onClick={()=>{setNav('/about')}}>About Me</a>
                <a href='#kontak' className={`flex h-full w-full place-items-center justify-center duration-400 hover:bg-white/20 hover:zoom-125 ${nav==='/contact'? 'text-white font-bold' :'font-bold'  }`} onClick={()=>{setNav('/contact')}}>Contact</a>
                <a href='/games' className={`flex h-full w-full place-items-center justify-center duration-400 hover:bg-white/20 hover:zoom-125 ${nav==='/contact'? 'text-white font-bold' :'font-bold'  }`} onClick={()=>{setNav('/contact')}}>Mini Games</a>
            </div>
            <FaBars className='lg:hidden z-20' onClick={()=>{setShow(!show); console.log(show)}}/>
           </div>
            <div className={`fixed w-full h-full flex flex-col gap-4 text-amber-100 justify-start items-start  bg-teal-950/70 px-2 lg:hidden ${show? "top-20" :"-top-full"} py-10 z-10 duration-200`}>
                <a href='#home' className={`flex w-full place-items-center justify-start duration-400 hover:bg-white/20 ${nav==='/'? 'text-white font-bold' :'font-bold'  }`} onClick={()=>{setNav('/')}}>Home</a>
                <a href='#service' className={`flex w-full place-items-center justify-start duration-400 hover:bg-white/20 ${nav==='/service'? 'text-white font-bold' :'font-bold'  }`} onClick={()=>{setNav('/service')}}>Skills</a>
                <a href='#about' className={`flex w-full place-items-center justify-start duration-400 hover:bg-white/20 ${nav==='/about'? 'text-white font-bold' :'font-bold'  }`} onClick={()=>{setNav('/about')}}>About Me</a>
                <a href='#kontak' className={`flex w-full place-items-center justify-start duration-400 hover:bg-white/20 ${nav==='/contact'? 'text-white font-bold' :'font-bold'  }`} onClick={()=>{setNav('/contact')}}>Contact</a>
                <a href='/games' className={`flex w-full place-items-center justify-start duration-400 hover:bg-white/20 ${nav==='/contact'? 'text-white font-bold' :'font-bold'  }`} onClick={()=>{setNav('/contact')}}>Mini Games</a>
           </div>
        
    </div>
  )
}
