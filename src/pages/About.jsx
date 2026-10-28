import React from 'react'
import { Navbar } from '../elements/Navbar'
import { Footer } from '../elements/Footer'
import { Carousel } from 'react-responsive-carousel'

export const About = () => {
  return (
    <section className={`grid place-items-start justify-items-start text-center h-fit `}
    >
                  <Navbar/>
                  
                  <div className='flex flex-col gap-6 text-teal-900 w-full h-fit relative p-2 md:p-20 bg-[url("../assets/about.webp")] bg-cover bg-center'>
                      <h1 className='font-extrabold font-serif h-fit'>Tentang Kami</h1>
                      <div className='flex flex-col gap-4 w-full h-full text-amber-100 font-serif bg-teal-950/70 rounded-4xl text-center p-6'>
                        <h4>PT Binaiya Samudera Indonesia merupakan salah satu perusahaan di Indonesia yang bergerak di bidang peragenan kapal.
                          Area operasional kami berada di daerah a, b ,c ... dst
                        </h4>
                        <h2>V I S I</h2>
                        <h5>Visi 1</h5>
                        <h5>Visi 2</h5>
                        <h5>Visi 3</h5>
                        <h2>M I S I</h2>
                        <h5>Misi 1</h5>
                        <h5>Misi 2</h5>
                        <h5>Misi 3</h5>
                      </div>
                  </div>
                  <Footer/>
              </section>
  )
}
