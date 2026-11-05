import React, { useEffect, useRef, useState } from 'react'
import img2 from '../assets/code1.jpg'
import img3 from '../assets/code2.jpg'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../elements/Navbar'
import { Footer } from '../elements/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import { FaInstagram, FaMailBulk, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa'
import Typewriter from '../effects/Typewriting'

export const Projects = () => {
    const navigate = useNavigate()
    const nameRef = useRef(null)
    const msgRef = useRef(null)
    const [name, setName] = useState('')
    const [msg, setMsg] = useState('')
    const [slide, setSlide] = useState(0)
    const [indPro, setIndPro] = useState(0)
    const proRef = useRef(null)
    const projects = [
        {
            "nama"  : "POS Penjualan",
            "bahasa"  : "PHP, HTML, CSS, Bootstrap, JQuery, Javascript, MySQL",
            "framework" : "Laravel, MySQL",
            "imgs"  : [
                {
                    "namagbr" : "Menu Utama",
                    "src"   : "posp-main"
                },
                {
                    "namagbr" : "Menu Login",
                    "src"   : "posp-login"
                },
                {
                    "namagbr" : "Menu Produk",
                    "src"   : "posp-produk"
                },
                {
                    "namagbr" : "Menu Edit Produk",
                    "src"   : "posp-edit"
                },
                {
                    "namagbr" : "Menu Detail Produk",
                    "src"   : "posp-detail"
                },
                {
                    "namagbr" : "Menu Daftar Transaksi",
                    "src"   : "posp-transaksi"
                },
                {
                    "namagbr" : "Menu Pembuatan Transaksi",
                    "src"   : "posp-newtrans"
                },
            ]
        },
        {
            "nama"  : "POS Klinik Kecantikan + Finance Reporting System",
            "bahasa"  : "Node JS, HTML, CSS, MongoDB, Tailwind",
            "framework" : "React JS FrontEnd, ExpressJS Backend, MongoDB",
            "imgs"  : [
                {"namagbr" : "Preparing Projects Preview",
                 "src"  : "soon"
                }
            ]
        },
        {
            "nama"  : "Web Face Authentication",
            "bahasa"  : "PHP, HTML, CSS, Javascript, JQuery",
            "framework" : "PHP, MySQL, TensOrFlow",
            "imgs"  : [
                {
                    "namagbr" : "Menu Register",
                    "src"   : "face-reg"
                },
                {
                    "namagbr" : "Menu Register Picture",
                    "src"   : "face-shot"
                },
                {
                    "namagbr" : "Menu Login",
                    "src"   : "face-login"
                },
                {
                    "namagbr" : "Face Identification By Picture",
                    "src"   : "face-picidentify"
                },
                {
                    "namagbr" : "Face Identification By Camera",
                    "src"   : "face-camidentify"
                },
                {
                    "namagbr" : "Face Tracker",
                    "src"   : "face-trackimplementation"
                },
            ]
        },
        {
            "nama"  : "Sistem Prediksi Harga Indeks IHSG",
            "bahasa"  : "Java",
            "framework" : "Java Swing",
            "imgs"  : [
                {"namagbr" : "Preparing Projects Preview",
                 "src"  : "soon"
                }
            ]
        }
    ]
    const pesan = (e) => {
        e.preventDefault()
        setName(nameRef?.current?.value)
        setMsg(msgRef?.current?.value)
    }
    const kirim = (e) => {
        e.preventDefault()
        window.open(`https://wa.me/6288232943147?text='Hai Aji Saya ${name}. ${msg}`, '_blank', 'noopener,noreferrer')
    }
    useEffect(()=>{
        setSlide(0)
    },[indPro])
    return (
        <>
            <section className='grid place-items-start justify-items-start text-center h-fit bg-white mt-16 lg:mt-36'>
                <Navbar />

                <div id='home' className='scroll-mt-15 md:scroll-mt-30 grid w-full h-fit text-white relative'>
                    <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} showThumbs={false} showIndicators={false} showStatus={false} interval={3000} className='relative'>
                        <div>
                            <img className=' object-cover h-200' src={img2} loading='eager' />

                        </div>
                        <div>
                            <img className='object-cover h-200' src={img3} />

                        </div>

                    </Carousel>
                    <div className='w-full h-full absolute top-0 left-0 flex flex-col gap-4 justify-center items-start text-white font-extrabold bg-teal-950/80 text-left px-[5%]'>
                        <h4 className='text-base md:text-xl lg:text-2xl text-amber-100'>
                            Welcome to My Portfolio
                        </h4>
                        <h1 className='text-lg md:text-3xl lg:text-5xl max-w-200'>
                            Software Developer & IT Professional
                        </h1>
                        <h4 className='text-sm md:text-xl lg:text-2xl max-w-200 font-normal'>
                            <Typewriter teks={[' Welcome to my professional portfolio, where I showcase my technical expertise, development projects, and experience in building practical software solutions.']} />
                        </h4>
                        <a href='#pesan' className=' bg-white flex gap-1 rounded-2xl w-32 md:w-44 items-center mt-10 p-2 border-2 border-green-500/50 hover:bg-gray-200 duration-300 text-green-500'><FaWhatsapp className='text-green-500' size={40} /> Contact Me</a>
                        <div className='flex gap-8 border-t w-full p-2'>
                            <div className='flex flex-col gap-3'>
                                <h2 className='text-lg text-amber-100 md:text-2xl lg:text-4xl'>S.Kom (UKSW)</h2>
                                <h3 className='text-base md:text-xl lg:text-3xl'>Degree</h3>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h2 className='text-lg text-amber-100 md:text-2xl lg:text-4xl'>{new Date().getFullYear() - 1996}</h2>
                                <h3 className='text-base md:text-xl lg:text-3xl'>Age</h3>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h2 className='text-lg text-amber-100 md:text-2xl lg:text-4xl'>Salatiga</h2>
                                <h3 className='text-base md:text-xl lg:text-3xl'>Home Town</h3>
                            </div>
                        </div>
                    </div>

                </div>


                <div id='service' className='scroll-mt-15 md:scroll-mt-30 w-full px-[12.5%] bg-white justify-self-center p-2 py-12 flex flex-col gap-2 justify-center items-start text-teal-950/80'>
                    <h4 className='text-teal-600'>Finished Projects</h4>
                    <h5 className=' font-normal' >Throughout my development journey, I have worked on various projects involving web and desktop application development. These projects demonstrate my ability to design, develop, and implement functional software solutions, ranging from business management systems to interactive web applications, using technologies and frameworks suited to each project's requirements.</h5>
                    <div className='flex flex-col items-start justify-center w-full'>
                        <div className="hidden md:flex justify-self-center">
                            <button onClick={(e)=>{
                                e.preventDefault()
                                setIndPro(0)
                            }} className="text-base hover:cursor-pointer border-r p-2 font-semibold">POS Penjuaan</button>
                            <button onClick={(e)=>{
                                e.preventDefault()
                                setIndPro(1)
                            }} className="text-base hover:cursor-pointer border-r p-2 font-semibold">POS Klinik + Finance Report</button>
                            <button onClick={(e)=>{
                                e.preventDefault()
                                setIndPro(2)
                            }} className="text-base hover:cursor-pointer border-r p-2 font-semibold">Face Detection Authentication</button>
                            <button onClick={(e)=>{
                                e.preventDefault()
                                setIndPro(3)
                            }} className="text-base hover:cursor-pointer border-r p-2 font-semibold">Forecasting IHSG Indeks System</button>
                            <button onClick={(e)=>{
                                e.preventDefault()
                                setIndPro(3)
                            }} className="text-base hover:cursor-pointer p-2 font-semibold">etc</button>
                        </div>
                        <select ref={proRef} id="" className='md:hidden mx-auto my-4 font-semibold'>
                            <option value="posp">POS Penjuaan</option>
                            <option value="posk">POS Klinik + Finance Report</option>
                            <option value="face">Face Detection Authentication</option>
                            <option value="ihsg">Forecasting IHSG Indeks System</option>
                            <option value="etc" disabled></option>
                        </select>
                        <div className="flex flex-col mx-4 w-full text-start">
                            <table>
                                <tr>
                                    <td className='w-1/4'>Project</td>
                                    <td>:</td>
                                    <td className='w-2/4'>{projects[indPro].nama}</td>
                                </tr>
                                <tr>
                                    <td>Programming Languages</td>
                                    <td>:</td>
                                    <td>{projects[indPro].bahasa}</td>
                                </tr>
                                <tr>    
                                    <td>Framework</td>
                                    <td>:</td>
                                    <td>{projects[indPro].framework}</td>
                                </tr>
                                <tr>
                                    <td>Project Preview</td>
                                    <td>:</td>
                                    <td className=' flex justify-between px-4'>
                                        <button onClick={(e)=>{
                                            e.preventDefault()
                                            console.log(slide)
                                            setSlide(prev=>
                                                prev===0? projects[indPro]?.imgs.length - 1 : 0
                                            )
                                        }}>{"<"}</button>
                                        <p className='text-lg font-semibold'>{projects[indPro]?.imgs[slide]?.namagbr}</p>
                                        <button onClick={(e)=>{
                                            e.preventDefault()
                                            console.log(slide)
                                            setSlide(prev=>
                                                prev===projects[indPro]?.imgs.length - 1? 0 : prev+1
                                            )  
                                        }}>{">"}</button>
                                    </td>
                                </tr>
                            </table>
                            <Carousel selectedItem={slide} onChange={(index)=>{setSlide(index)}} id='preview' autoPlay={false} infiniteLoop={true} showArrows={true} showThumbs={false} showIndicators={false} showStatus={false} interval={3000} className='relative mt-2'>
                                {projects[indPro].imgs.map((item)=>(
                                    <div>
                                        <img className=' object-fill h-200' src={`assets/${item.src}.JPG`} loading='lazy' />

                                    </div>
 ))}
                                

                            </Carousel>
                        </div>
                    </div>

                </div>
                <div id='about' className='scroll-mt-15 md:scroll-mt-30 w-full px-[12.5%] bg-teal-950 justify-self-center p-2 py-16 flex flex-col gap-2 justify-center items-start text-white'>
                    <h4 className='text-amber-100'>About Me</h4>
                    <h2 className=' font-normal' >Hello,</h2>
                    <div className='grid  md:grid-cols-1 gap-4 place-items-center h-full p-2 mb-14'>
                        <div className='flex flex-col hover:text-amber-100 duration-200 border-t border-white/30 gap-2 text-s items-start font-normal p-2 sm:p-4 w-full h-full text-justify space-y-2'>
                            <p className='indent-8'>My name is Aji Kurniawan, and I was born in Salatiga, Indonesia, on February 24, 1996. I hold a Bachelor’s degree in Informatics Engineering from Satya Wacana Christian University (UKSW), where I developed a strong foundation in software engineering, programming, and application development, particularly for web and desktop platforms. I have a strong interest in software development and enjoy building practical, reliable, and user-oriented applications.</p>
                            <p className='indent-8'>Outside of software development, I enjoy staying active through sports such as soccer, badminton, basketball, and volleyball. I also enjoy playing the guitar as a way to express my creativity and pursue my interest in music. Living with Ankylosing Spondylitis has presented challenges to my mobility and daily activities, but it has also become part of my personal journey. I appreciate understanding and patience when physical stiffness occasionally affects my movement or posture.</p>
                        </div>
                    </div>

                </div>
                <Footer />
            </section>
        </>
    )
}
