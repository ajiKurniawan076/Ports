import React, { useState } from 'react'

import logo from '../assets/logo.svg'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import { FaPeopleArrows, FaPeopleCarry, FaRocket, FaStar, FaUser, FaUserShield } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const Intro = () => {
    const [score, setScore] = useState(500)
    const navigate = useNavigate()
    return (
        <section className='grid p-1 place-items-start gap-3 justify-items-start text-center min-h-full px-6'>
            <div className='grid w-full h-fit p-2 text-white'>
                <img src={logo} className='h-32 w-32 mx-auto' />
                <p className='text-yellow-500/80 text-4xl font-bold'>TRUST FUND</p>
                <p className='font-semibold'>I N T E R N A T I O N A L</p>
                <p className='font-normal'>Trust Score Based <span className='text-yellow-600'>Oppurtunity</span> Platform</p>
                <div className='w-full h-80 relative flex place-items-center justify-center'>
                    <div className='grid rounded-full border-yellow-400 border-2 p-4 w-30 h-30 bg-black'>
                        <p className='text-xs'>TRUST SCORE</p>
                        <p className='text-4xl text-yellow-500 font-semibold'>{score}</p>
                        <p className='text-sm'>/1000</p>
                    </div>
                    <div className='absolute left-0 top-0 left-0 w-full h-full grid grid-cols-2 p-8'>
                        <div className='flex flex-col place-items-center justify-self-start self-starts'>
                            <div className='bg-gray-700/40 p-4 rounded-full border border-yellow-500/40 flex'>
                                <FaStar size={45} className='text-yellow-500 ' />
                            </div>
                            
                            <p className='text-xs'>TRUST SCORE</p>
                        </div>
                        <div className='flex flex-col place-items-center justify-self-end self-starts'>
                            <div className='bg-gray-700/40 p-4 rounded-full border border-yellow-500/40 flex'>
                                <FaUserShield size={45} className='text-yellow-500' />
                            </div>
                            
                            <p className='text-xs'>INTEGRITY</p>
                        </div>
                        <div className='flex flex-col place-items-center justify-self-start self-end'>
                            <div className='bg-gray-700/40 p-4 rounded-full border border-yellow-500/40 flex'>
                                <FaPeopleArrows size={45} className='text-yellow-500 ' />
                            </div>
                            
                            <p className='text-xs'>COMMUNITY</p>
                        </div>
                        <div className='flex flex-col place-items-center justify-self-end self-end'>
                            <div className='bg-gray-700/40 p-4 rounded-full border border-yellow-500/40 flex'>
                                <FaRocket size={45} className='text-yellow-500' />
                            </div>
                            
                            <p className='text-xs'>OPPORTUNITY</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='grid gap-2 w-full h-full p-4 text-white bg-gray-800/80 rounded-lg border-amber-400/50 border'>
                <div className='flex gap-4 w-full px-6 place-items-center justify-center'>
                    <FaUser size={50} className='text-yellow-400'/>
                    <div className='h-full grid text-white place-items-start px-5'>
                        <p className='text-xs'>TRUST SCORE ANDA</p>
                        <p className='text-4xl'>{score}/1000 </p>
                        <p className='text-xs'>MEMBER BARU </p>
                    </div>
                </div>
                <div className='w-full relative rounded-lg h-5 bg-black'>
                    <div className='w-[50%] relative rounded-lg h-5 bg-yellow-500/80'></div>
                </div>
                <p className='text-sm font-light'>Perjalanan membangun kepercayaan dimulai hari ini</p>
            </div>
            <div className='grid gap-2 w-full h-full p-4'>
                <button onClick={() => { navigate('/login') }} className='text-black font-semibold text-xl hover:text-yellow-200 duration-150 rounded-2xl  justify-center mt-auto h-14 bg-yellow-500 w-full'>Masuk</button>
                <button onClick={() => { navigate('/login') }} className='bg-black font-semibold text-xl hover:text-yellow-200 duration-150 rounded-2xl border border-yellow-500  justify-center mt-auto h-14 text-yellow-500 w-full'>Daftar Member</button>
            </div>

            <div className='flex w-full justify-between text-yellow-600 px-2'>
                <p>--------------------{'|'}</p>
                <p className='font-semibold'>Komunitas TFI Hari Ini</p>
                <p>{'|'}--------------------</p>
            </div>
            <div className='flex w-full justify-between text-yellow-600 px-2'>
                <div className='grid place-items-center w-1/3'>
                    <div className='p-4 rounded-full border border-amber-400'>                    
                        <FaPeopleCarry size={45}/>
                    </div>
                    <p className='text-xs font-light text-white'>Member Aktif</p>
                    <p className='text-2xl font-bold'>9.976</p>
                </div>
                <div className='grid place-items-center w-1/3'>
                    <div className='p-4 rounded-full border border-amber-400'>                    
                        <FaPeopleCarry size={45}/>
                    </div>
                    <p className='text-xs font-light text-white'>Trust Score Dibangun Hari Ini</p>
                    <p className='text-2xl font-bold'>3.921</p>
                </div>
                <div className='grid place-items-center w-1/3'>
                    <div className='p-4 rounded-full border border-amber-400'>                    
                        <FaPeopleCarry size={45}/>
                    </div>
                    <p className='text-xs font-light text-white'>Oppurtunity FundBerjalan</p>
                    <p className='text-2xl font-bold'>Rp 2 Juta</p>
                </div>
            </div>
            <div className='flex w-full justify-between text-yellow-600/40 px-2 place-items-center gap-2'>
                <p className='w-1/3'>--------------------{'|'}</p>
                <div className='w-1/3'>
                    <p className='font-semibold text-sm'>Kepercayaan adalah mata uang baru</p>
                </div>
                <p className='w-1/3'>{'|'}--------------------</p>
            </div>
        </section>
    )
}
