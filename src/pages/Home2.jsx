import React from 'react'
import logo from '../assets/logo.svg'
import img1 from '../assets/img1.png'
import {FaAddressCard, FaIdBadge, FaPeopleCarry, FaRibbon, FaShieldAlt, FaTasks, FaUser} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const Home2 = () => {
    const navigate = useNavigate()
  return (
    <section className='grid p-1 place-items-start justify-items-start text-center h-full px-6'>
                  <div className='grid w-full h-fit p-2 text-white '>
                    <img src={logo} className='h-32 w-32 mx-auto'/>
                    <p className='text-yellow-500/80 text-4xl font-bold'>TRUST FUND</p>
                    <p className='font-semibold'>I N T E R N A T I O N A L</p>
                    <p className='font-normal'>Trust Score Based <span className='text-yellow-600'>Oppurtunity</span> Platform</p>
                  </div>
                  <div className='w-full text-white rounded-lg bg-cyan-600/20 grid'>
                    <p>TRUST SCORE</p>
                    <div className='flex justify-center place-items-center gap-3 w-fll p-2'>
                        <div className='grid'>
                            <button className='rounded-full text-2xl p-3 bg-black/50 border-2 border-amber-400'>520</button>
                            <p className='text-xs font-medium'>BASIC</p>
                        </div>
                        
                        <div className='grid'>
                            <p className=' text-2xl font-bold text-yellow-500'> {'>'} </p>
                            <span className='text-transparent'>-</span>
                        </div>
                        <div className='grid'>
                            <button className='rounded-full text-2xl p-3 bg-black/50 border-2 border-amber-400'>520</button>
                            <p className='text-xs font-medium'>GOOD</p>
                        </div>
                        
                        
                        <div className='grid'>
                            <p className=' text-2xl font-bold text-yellow-500'> {'>'} </p>
                            <span className='text-transparent'>-</span>
                        </div>
                        <div className='grid'>
                            <button className='rounded-full text-2xl p-3 bg-black/50 border-2 border-amber-400'>520</button>
                            <p className='text-xs font-medium'>PREMIUM</p>
                        </div>
                        
                    </div>
                  </div>
                  <div className='flex gap-2 w-full justify-centerp-2'>
                    <button className='grid rounded-lg gap-2 p-2 w-[20%] hover:scale-120 duration-200 bg-cyan-600/20 place-items-center text-xs text-white'>
                        
                        <FaUser className='w-10 h-10 text-yellow-500'/>
                        Lengkapi Profil
                    </button>
                    <button className='grid rounded-lg gap-2 p-2 w-[20%] hover:scale-120 duration-200 bg-cyan-600/20 place-items-center text-xs text-white'>
                        <FaTasks className='w-10 h-10 text-yellow-500'/>
                        Selesaikan Tugas
                    </button>
                    <button className='grid rounded-lg gap-2 p-2 w-[20%] hover:scale-120 duration-200 bg-cyan-600/20 place-items-center text-xs text-white'>
                        <FaPeopleCarry className='w-10 h-10 text-yellow-500'/>
                        Referal Valid
                    </button>
                    <button className='grid rounded-lg gap-2 p-2 w-[20%] hover:scale-120 duration-200 bg-cyan-600/20 place-items-center text-xs text-white'>
                        <FaRibbon className='w-10 h-10 text-yellow-500'/>
                        Aktifitas Positif
                    </button>
                    <button className='grid rounded-lg gap-2 p-2 w-[20%] hover:scale-120 duration-200  bg-cyan-600/20 place-items-center text-xs text-white'>
                        <FaShieldAlt className='w-10 h-10 text-yellow-500'/>
                        Komitmen dan Kepatuhan
                    </button>
                  </div>
                  <div className='grid w-full h-fit p-2 text-white'>
                                  <p className='text-yellow-500/80 text-4xl mt-4 font-bold'>SETIAP AKTIVITAS</p>
                                  <p className='font-semibold text-2xl'>MEMILIKI NILAI</p>
                                  {/* <p className='font-light text-xs'>Lengkapi profil, selesaikan tugas, berikan referal yang valid, dan jaga komitmen Anda untuk meningkatkan Trust Score</p> */}
                                </div>
                  <div className='flex w-full h-full p-4'>
                  <button onClick={()=>{navigate('/home3')}} className='text-black font-semibold text-xl hover:text-yellow-200 duration-150 rounded-2xl  justify-center mt-auto h-16 bg-yellow-500 w-full'>Lanjut</button>
                  </div>
              </section>
  )
}
