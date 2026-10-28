import React from 'react'
import { Navbar } from '../elements/Navbar'
import { Footer } from '../elements/Footer'
import { FaBookOpen, FaFirstOrder, FaPeopleCarry, FaPhone, FaServicestack, FaShippingFast, FaUserAlt, FaUserAstronaut, FaUserCheck, FaUserCircle, FaUserFriends, FaUserTag } from 'react-icons/fa'

export const Services = () => {
 return (
     <section className='grid place-items-start justify-items-start text-center h-fit'
     // style={
     //    { backgroundImage: `url(${bg})`}
     // }
     >
                   <Navbar/>
                   <div className='flex flex-col w-full h-fit gap-0'>
                   <div className='text-teal-900 w-full min-h-full relative bg-[url("../assets/service.webp")] bg-cover bg-center'>
                      <div className='flex flex-col gap-20 w-full h-full text-amber-100 font-serif bg-teal-950/70 text-center p-20'>
                      <h1>Layanan Kami</h1>
                        <div className='grid md:grid-cols-3 gap-20 place-items-center h-full p-2'>
                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaServicestack className='w-full h-full p-8'/></button>
                          Layanan 1
                          </div>
                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaBookOpen className='w-full h-full p-8'/></button>
                          Layanan 2
                          </div>
                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaFirstOrder className='w-full h-full p-8'/></button>
                          Layanan 3
                          </div>
                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaPeopleCarry className='w-full h-full p-8'/></button>
                          Layanan 4
                          </div>
                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaPhone className='w-full h-full p-8'/></button>
                          Layanan 5
                          </div>
                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                          <button className=' rounded-full bg-white/40 md:w-50 w-40 md:h-50 h-40'><FaShippingFast className='w-full h-full p-8'/></button>
                          Layanan 6
                          </div>
                        </div>
                      </div>
                   </div>
                   <div className='h-fit bg-teal-950 w-full'>
                    <div className='grid w-full h-full bg-white rounded-xl gap-20  text-teal-950 font-serif p-20'>
                      <h1>Mitra Kami</h1>
                      <div className='grid md:grid-cols-3 gap-20 place-items-center h-full p-2'>
                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                          <button className=' rounded-full bg-teal-950/40 md:w-50 w-40 md:h-50 h-40'><FaUserTag className='w-full h-full p-8'/></button>
                          Mitra 1
                          </div>
                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                          <button className=' rounded-full bg-teal-950/40 md:w-50 w-40 md:h-50 h-40'><FaUserCheck className='w-full h-full p-8'/></button>
                          Mitra 2
                          </div>
                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                          <button className=' rounded-full bg-teal-950/40 md:w-50 w-40 md:h-50 h-40'><FaUserCircle className='w-full h-full p-8'/></button>
                          Mitra 3
                          </div>
                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                          <button className=' rounded-full bg-teal-950/40 md:w-50 w-40 md:h-50 h-40'><FaUserAlt className='w-full h-full p-8'/></button>
                          Mitra 4
                          </div>
                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                          <button className=' rounded-full bg-teal-950/40 md:w-50 w-40 md:h-50 h-40'><FaUserAstronaut className='w-full h-full p-8'/></button>
                          Mitra 5
                          </div>
                          <div className='flex flex-col hover:scale-105 text-xl font-semibold'>
                          <button className=' rounded-full bg-teal-950/40 md:w-50 w-40 md:h-50 h-40'><FaUserFriends className='w-full h-full p-8'/></button>
                          Mitra 6
                          </div>
                        </div>
                    </div>
                   </div>
                   </div>
                   <Footer/>
               </section>
   )
 }
