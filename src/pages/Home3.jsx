import React from 'react'

import logo from '../assets/logo.svg'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import { useNavigate } from 'react-router-dom'
import { FaChartBar, FaChartLine, FaPeopleArrows, FaProjectDiagram, FaShieldVirus, FaStar, FaUserShield } from 'react-icons/fa'

export const Home3 = () => {
    const navigate = useNavigate()
    return (
        <section className='grid p-1 place-items-end justify-items-end text-center h-full px-6'>
            <div className='grid w-full h-fit p-2 text-white'>
                <img src={logo} className='h-32 w-32 mx-auto' />
                <p className='text-yellow-500/80 text-4xl font-bold'>TRUST FUND</p>
                <p className='font-semibold'>I N T E R N A T I O N A L</p>
                <p className='font-normal'>Trust Score Based <span className='text-yellow-600'>Oppurtunity</span> Platform</p>
                <div className='w-full h-fit relative'>
                    <img src={img2} className='object-content mx-auto h-[300px]' alt="" />
                    <div className='absolute left-0 top-0 left-0 w-full h-[70%]  grid grid-cols-2'>
                    <FaUserShield size={55} className='text-yellow-500 justify-self-start self-starts'/>
                    <FaStar size={55} className='text-yellow-500 justify-self-end self-starts'/>
                    <FaChartBar size={55} className='text-yellow-500 justify-self-start self-end'/>
                    <FaPeopleArrows size={55} className='text-yellow-500 justify-self-end self-end'/>
                    </div>
                </div>
                
                <p className='text-yellow-500/80 text-4xl mt-4 font-bold'>KEPERCAYAAN</p>
                <p className='font-semibold text-2xl'>ADALAH MATA UANG BARU</p>
            </div>
            <div className='grid gap-2 w-full h-fullp-4'>
                <button onClick={() => { navigate('/intro') }} className='text-black font-semibold text-xl hover:text-yellow-200 duration-150 rounded-2xl  justify-center mt-auto h-12 bg-yellow-500 w-full'>Mulai Sekarang</button>
                <button onClick={() => { navigate('/intro') }} className='bg-black font-semibold text-xl hover:text-yellow-200 duration-150 rounded-2xl border border-yellow-500  justify-center mt-auto h-12 text-yellow-500 w-full'>Lewati</button>
            </div>
        </section>
    )
}
