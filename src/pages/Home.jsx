import React, { useRef, useState } from 'react'
import logo from '../assets/logo.svg'
import img1 from '../assets/img1.png'
import img2 from '../assets/code1.jpg'
import img3 from '../assets/code2.jpg'
import img4 from '../assets/kapal4.webp'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../elements/Navbar'
import { Footer } from '../elements/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import { FaArrowCircleRight, FaBookOpen, FaFacebook, FaFirstOrder, FaGoogle, FaInstagram, FaMailBulk, FaMapMarkedAlt, FaPeopleCarry, FaPhone, FaServicestack, FaShippingFast, FaSmile, FaUserAlt, FaUserAstronaut, FaUserCheck, FaUserCircle, FaUserTag, FaWhatsapp } from 'react-icons/fa'

export const Home = () => {
  const navigate = useNavigate()
  const nameRef = useRef(null)
  const msgRef = useRef(null)
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const pesan = (e)=>{
    e.preventDefault()
    setName(nameRef?.current?.value)
    setMsg(msgRef?.current?.value)
  }
  const kirim = (e)=>{
    e.preventDefault()
    window.open(`https://wa.me/6288232943147?text='Hai Aji Saya ${name}. ${msg}`, '_blank', 'noopener,noreferrer')
  }
  return (
    <>
      <section className='grid place-items-start justify-items-start text-center h-fit bg-white mt-16 md:mt-36'>
        <Navbar />

        <div id='home' className='scroll-mt-15 md:scroll-mt-30 grid w-full h-fit text-white relative'>
          <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} showThumbs={false} showIndicators={false} showStatus={false} interval={3000} className='relative'>
            <div>
              <img className=' object-cover h-200' src={img2} />

            </div>
            <div>
              <img className='object-cover h-200' src={img3} />

            </div>

          </Carousel>
          <div className='w-full h-full absolute top-0 left-0 flex flex-col gap-4 justify-center items-start text-white font-extrabold bg-teal-950/80 text-left px-[5%]'>
            <h4 className='text-base md:text-xl lg:text-2xl text-amber-100'>
              Welcome To My Page Pals
            </h4>
            <h1 className='text-lg md:text-3xl lg:text-5xl max-w-200'>
              This is My Portofolio page that contains my personal information.
            </h1>
            <h4 className='text-sm md:text-xl lg:text-2xl max-w-200 font-normal'>
              I'd like to share all about me in this site. So, welcome to my home <FaSmile className='text-yellow-300 mt-2 w-20 h-20'/>
            </h4>
            <a href='#kontak' className=' bg-white flex gap-1 rounded-2xl w-32 md:w-44 items-center mt-10 p-2 border-2 border-green-500/50 hover:bg-gray-200 duration-300 text-green-500'><FaWhatsapp className='text-green-500' size={40} /> Contact Me</a>
            <div className='flex gap-8 border-t w-full p-2'>
              <div className='flex flex-col gap-3'>
                <h2 className='text-lg text-amber-100 md:text-2xl lg:text-4xl'>S.Kom (UKSW)</h2>
                <h3 className='text-base md:text-xl lg:text-3xl'>Degree</h3>
              </div>
              <div className='flex flex-col gap-3'>
                <h2 className='text-lg text-amber-100 md:text-2xl lg:text-4xl'>{new Date().getFullYear()-1996}</h2>
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
          <h4  className='text-teal-600'>Skills</h4>
          <h4 className=' font-normal' >I've been focusing my study in website and desktop application development.
So, these are the programming language and framework that i've learnt so far:</h4>
          <div className='grid  md:grid-cols-3 gap-20 place-items-center h-full p-2 mb-14 w-full'>
            <div className='flex  flex-col bg-teal-950/20 rounded-lg hover:scale-105 duration-200 gap-2 text-s text-left items-start font-normal shadow-2xl p-4 w-full h-full'>
              <h4>React JS</h4>
              <p>My Bestie in frontend development is React JS. It's easy to implement my idea into codes using React JS</p>
              <p className='self-center mt-auto'>1</p>
            </div>
            <div className='flex  flex-col bg-teal-950/20 rounded-lg hover:scale-105 duration-200 gap-2 text-s text-left items-start font-normal shadow-2xl p-4 w-full h-full'>
              <h4>Express JS</h4>
              <p>Not the best one, but Express JS matches with my preference of using React as my frontend framework</p>
              <p className='self-center mt-auto'>2</p>
            </div>
            <div className='flex  flex-col bg-teal-950/20 rounded-lg hover:scale-105 duration-200 gap-2 text-s text-left items-start font-normal shadow-2xl p-4 w-full h-full'>
              <h4>MongoDB</h4>
              <p>I need JSON, MongoDB would be there for me</p>
              <p className='self-center mt-auto'>3</p>
            </div>
            <div className='flex  flex-col bg-teal-950/20 rounded-lg hover:scale-105 duration-200 gap-2 text-s text-left items-start font-normal shadow-2xl p-4 w-full h-full'>
              <h4>Laravel</h4>
              <p>My first love as a fullstack developer is Laravel. Easy implementations of frontend X backend integration. I'd like to use laravel if i have a chance to use it</p>
              <p className='self-center mt-auto'>4</p>
            </div>
            <div className='flex  flex-col bg-teal-950/20 rounded-lg hover:scale-105 duration-200 gap-2 text-s text-left items-start font-normal shadow-2xl p-4 w-full h-full'>
              <h4>GoLang</h4>
              <p>When i learnt Rest API for the first time, GoLang was there for me. The Structure was strong, but i prefered to learn Express at the end</p>
              <p className='self-center mt-auto'>5</p>
            </div>
            <div className='flex  flex-col bg-teal-950/20 rounded-lg hover:scale-105 duration-200 gap-2 text-s text-left items-start font-normal shadow-2xl p-4 w-full h-full'>
              <h4>MySQL</h4>
              <p>Of course </p>
              <p className='self-center mt-auto'>6</p>
            </div>

          </div>

        </div>
        <div id='about' className='scroll-mt-15 md:scroll-mt-30 w-full px-[12.5%] bg-teal-950 justify-self-center p-2 py-16 flex flex-col gap-2 justify-center items-start text-white'>
          <h4 className='text-amber-100'>About Me</h4>
          <h2 className=' font-normal' >Hello,</h2>
          <div className='grid  md:grid-cols-4 gap-4 place-items-center h-full p-2 mb-14'>
            <div className='flex flex-col hover:scale-105 duration-200 border-t border-white/30 gap-2 text-s text-left items-start font-normal shadow-2xl p-4 w-full h-full'>
              <h4 className='text-amber-100'>Me</h4>
              <p>My Name is Aji Kurniawan,
I was born in Salatiga in 24th February 1996</p>
            </div>

            <div className='flex flex-col hover:scale-105 duration-200 border-t border-white/30 gap-2 text-s text-left items-start font-normal shadow-2xl p-4 w-full h-full'>
              <h4 className='text-amber-100'>Education</h4>
              <p>I got Bachelor Degree of Informatic Engineering in Satya Wacana Christian University (UKSW) with Application Developer as my classification. I've been focusing my study in website and desktop application development.</p>
            </div>

            <div className='flex flex-col hover:scale-105 duration-200 border-t border-white/30 gap-2 text-s text-left items-start font-normal shadow-2xl p-4 w-full h-full'>
              <h4 className='text-amber-100'>Hobbies</h4>
              <p>I really love doing sports. Such as Soccer, Badminton, Basketball, Volleyball. Also in Music i love playing guitar</p>
            </div>

            <div className='flex flex-col hover:scale-105 duration-200 border-t border-white/30 gap-2 text-s text-left items-start font-normal shadow-2xl p-4 w-full h-full'>
              <h4 className='text-amber-100'>Disability</h4>
              <p>I'm diagnosed with Ankylosing Spondylitis in my 20's. So i can't do most of my hobbies now. If u find me not looking at u, it's just me being stiff. I'm So Sorry!!</p>
            </div>
          </div>

        </div>
        <div id='kontak' className='scroll-mt-15 md:scroll-mt-30 grid lg:flex w-full h-fit text-white font-serif bg-[url("../assets/contact.jpg")] bg-cover bg-center'>
          <div className='lg:w-[30%] flex flex-col p-2  bg-linear-to-br/oklch from-[#bbdcdf] from-60% to-[#3d676b] to-40% lg:pt-20'>
            <h1 className='lg:text-right text-teal-950 '>Contact <span className='lg:hidden'>Me</span></h1>
            <div className='h-full rounded-3xl mx-2.5 my-5 flex flex-col p-3 text-teal-950'>
              <h4>Aji Kurniawan, S.Kom</h4>
              <div className='flex items-center gap-8 p-4 my-4'>
                <FaMapMarkedAlt />
                <h5>Jalan Kalitaman 74, Salatiga, Jawa Tengah</h5>
              </div>
              <div className='flex items-center gap-8 p-4 my-4'>
                <FaWhatsapp />
                <h5>088 232 943 147</h5>
              </div>
              <div className='flex items-center gap-8 p-4 my-4'>
                <FaMailBulk />
                <h5>ajikurniawan076@gmail.com</h5>
              </div>
              <a href="https://instagram.com/ajik.oni/"   target="_blank" rel="noopener noreferrer" className='flex items-center gap-8 p-4 my-4'>
                <FaInstagram />
                <h5>@ajik.oni</h5>
              </a>
            </div>
          </div>
          <div className='lg:w-[70%] flex flex-col gap-1 p-2 text-teal-950 font-bold bg-teal-950/50'>
            <h1 className='text-left text-amber-100 my-18 hidden lg:block'>Me</h1>

            <form className='h-full rounded-3xl mx-2.5 p-6 flex flex-col gap-4'>
              <h3 className='text-left text-amber-100'>
                Send Me A Massage
              </h3>
              <input onChange={pesan} ref={nameRef} type="text" className='flex w-full md:w-100 bg-white/60 p-2' placeholder='Name' />
              <textarea onChange={pesan} ref={msgRef} rows={5} className='flex w-full md:w-100 bg-white/60 p-2' placeholder='Your Messages' />
              <button onClick={kirim} type='submit' className='w-full md:w-100 rounded-2xl bg-white/60 p-2 hover:bg-teal-100/40'>Kirim</button>
            </form>
            <div className="max-w-full h-80 md:h-105 rounded-xl overflow-hidden shadow-lg opacity-90">
              <iframe
                title="Lokasi Kantor"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63315.934766326456!2d110.45588561598849!3d-7.326251726501181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a787e692c9c69%3A0xf6a53e23a0c4462c!2sSalatiga%2C%20Salatiga%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1793203169083!5m2!1sen!2sid"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}
