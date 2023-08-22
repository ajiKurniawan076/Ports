import { useContext, useEffect, useState } from "react"
import { Pages } from "../../App"

export const About = () => {
  const [rendered, setrender] = useState(false)
  const {setpage} = useContext(Pages)
  useEffect(()=>{setrender(true)
  //console.log('rendered')
  setpage('ABOUT')
  },[])

  return (
    <div className={`flex w-full mt-5 ${rendered?'bg-black/30 scake-100':'scale-[10%] bg-transparent'} sm:h-[400px] rounded-3xl duration-300`}>
      <div className="p-10 text-white/80 w-4/5 bg-black/30 overflow-auto rounded-s-3xl">
        <h3 className="">Hello</h3> 
        <div className="mt-3 p-4 text-sm font-semibold">My Name is Aji Kurniawan,
        <br/> I was born in Salatiga in 24th February 1996
        <br />i've been living in my hometown since i was born til i graduate from my University at Satya Wacana Christian University in 24th February 2023
        <br /><br />I got Bachelor Degree in Informatic Engineering with Application Developer as classification. i focused my study in website and desktop application.
        <br />So, these are the programming language and framework that i've learnt so far:
        <br />
        <div className="flex max-md:flex-col gap-10 justify-between mt-10">
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
      <div className="mt-10 relative group w-1/5 flex justify-center h-fit">
        <img src="./src/img/oni.jpg" alt="My Profil Image" className="group w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full hover:scale-150 duration-300"></img>
        <p className="absolute bottom-[-75px] md:bottom-[-90px] scale-0 group-hover:scale-100 bg-yellow-300/40 duration-300 rounded-lg p-2">Aji Kurniawan</p>
      </div>
    </div>

  )
}
