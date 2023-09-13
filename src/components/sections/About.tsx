import { useContext, useEffect, useState } from "react"
import { Pages } from "../../App"

export const About = () => {
  const [rendered, setrender] = useState(false)
  const {setpage, dark} = useContext(Pages)
  useEffect(()=>{setrender(true)
  //console.log('rendered')
  setpage('ABOUT')
  },[])

  return ( 
    <div className={`flex w-full mt-5 ${rendered?` bg-black/30 scale-100  ${dark?'bg-white':''}`:'scale-[10%] bg-transparent'} sm:h-[400px] rounded-3xl duration-300 overflow-auto`}>
      <div className={`p-10 ${dark? 'text-black/80':'text-white/80'} w-full md:w-4/5 bg-black/30 rounded-s-3xl h-full overflow-auto`}>
        
        <div className="flex justify-center w-full md:hidden">
        <img src="./src/img/oni.jpg" alt="My Profil Image" className="group w-[150px] h-[150px] rounded-full hover:scale-150 duration-300"></img>
        </div>
        <h3 className="text-center">Hello, </h3> 
        <div className="mt-3 p-4 text-sm font-semibold text-center">My Name is Aji Kurniawan,
        <br/> I was born in Salatiga in 24th February 1996
        <br />I've been living in my hometown since i was kid until i graduated from my University at Satya Wacana Christian University in 24th February 2023
        <br /><br />I got Bachelor Degree in Informatic Engineering with Application Developer as my classification. I focused my study in website and desktop application development.
        <br />So, these are the programming language and framework that i've learnt so far:
        <br />
        <div className="flex max-md:flex-col gap-10 justify-between mt-10 text-start">
        <ul className="w-1/2">Desktop App
          <li className=" list-disc">Java Swing</li>
        </ul>

        <ul className="w-1/2">Website Fullstack
          <li className=" list-disc">Laravel (PHP)</li>
        </ul>

        <ul className="w-1/2">Website Front End
          <li className=" list-disc">React JS & TS</li>
        </ul>

        <ul className="w-1/2">Website Back End
          <li className=" list-disc">Java Springboot</li>
        </ul>
        </div>
        </div>
      </div>
      <div className="relative group w-1/5 justify-center h-full hidden md:flex bg-black/30">
        <img src="./src/img/oni.jpg" alt="My Profil Image" className="group w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full hover:scale-150 duration-300 my-auto"></img>
        <p className="absolute bottom-[-75px] md:bottom-[90px] scale-0 group-hover:scale-100 bg-yellow-300/80 font-bold duration-300 rounded-lg p-2">Aji Kurniawan</p>
      </div>
    </div>

  )
}
