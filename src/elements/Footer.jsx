import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='flex flex-col w-full min-h-56 bg-linear-[135deg,#324e51_50%,#3d676b_50%]  text-amber-100 px-6'>
        <div className='h-[80%] gap-4 grid lg:flex w-full justify-around lg:px-16 lg:py-2'>
            <div className='flex flex-col w-full gap-2'>
                <span className='font-bold text-xl'>Quick Link</span>
                <div className='flex justify-center lg:justify-end'>
                    <div className='flex flex-col w-full lg:w-[50%] text-left'>
                        <a href='#home' className=''>Home</a>
                        <a href='#service' className=''>Skills</a>
                        <a href='#about' className=''>About Me</a>
                        <a href='#kontak' className=''>Contact Me</a>
                    </div>
                </div>
                
            </div>
            <div className='flex flex-col w-full gap-2'>
                <span className='font-bold text-xl'>Contact Info</span>
                <div className='flex justify-center lg:justify-end'>
                    <div className='flex flex-col w-full lg:w-[50%] text-left'>
                        <span className='flex items-center gap-1'><FaWhatsapp/> +62 8823 2943 147</span>
                        <span className='flex items-center gap-1'><FaInstagram/> @ajik.oni</span>
                        <span className='flex items-center gap-1'><FaGoogle/> ajikurniawan076@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[20%] flex justify-end text-2xl text-pink-400 animate-pulse'>Thanks for your visit, Wish You A Happy & Beautiful Day</div>
    </div>
  )
}
