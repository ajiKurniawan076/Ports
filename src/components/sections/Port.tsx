import { useContext, useState } from "react"
import { Portopage } from "../../App"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { Pos } from "./projects/Pos"
import { Face } from "./projects/Face"
import { Posfront } from "./projects/Posfront"
import { Fcdesk } from "./projects/Fcdesk"
import { Fcweb } from "./projects/Fcweb"

export const Port = () => {
    const { port, setport } = useContext(Portopage)
    const [project, setproject] = useState(0)

    return (
        
        <div className={`${!port ? 'fixed top-0 right-[-100%] duration-300 z-10' : 'fixed top-0 right-0 duration-500 z-10'} h-full w-full flex`}>
            <div className="group relative max-md:hidden">
                <button className={`${!port ? '' : 'hidden'} fixed top-0 right-[-7%] md:right-[-3.2%] mt-5 bg-second-t whitespace-nowrap -rotate-90 w-[80px] h-[50px] flex font-bold justify-center rounded-t-lg`} onClick={() => { setport(true) }}>{`open`}</button>
                <span className="absolute left-[-400%] scale-0 bg-yellow-200 text-xs rounded-full p-2 group-hover:scale-100 duration-300">My Portofolio</span>
            </div>
            <div className="h-full bg-second w-full relative">
            
                <div className="absolute h-full w-full bg-black/30 overflow-auto">
                    <button className="absolute top-5 end-5 font-medium text-4xl text-white" onClick={() => { setport(false) }}>x</button>

                    <h3 className="text-center mt-10 text-white/90">MY PORTOFOLIO APPS</h3>
                    <div className="mt-5 border-t-4 border-white/50 w-full h-screen">
                        {project!==0 ?

                            <div className="bg-white/60 w-full h-full flex items-center flex-col">
                                
                                {project==1 &&<Pos/>
                                ||project==2 &&<Posfront/>
                                ||project==3 &&<Face/>
                                ||project==4 &&<Fcweb/>
                                ||project==5 &&<Fcdesk/>  
                                }
                                
                                <button className="" onClick={() => { setproject(0) }}><AiOutlineCloseSquare size={50} /></button>
                            </div>


                            :

                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center mt-3">
                                <div className="h-[300px] bg-white/70 w-[250px] rounded-xl hover:scale-125 duration-500 flex-col" onClick={() => { setproject(1) }}>
                                    <h5 className="text-center">Point Of Sales APP - Fullstack</h5>
                                    <img src=".\src\img\temp\POS\1.jpg" alt="Project Thumbnail" className="w-full h-[175px]" />
                                    <div className="px-3">
                                        <h6>Programming Language</h6>
                                        <p className="text-xs">PHP 8</p>
                                        <h6>Framework & Tools</h6>
                                        <p className="text-xs">Laravel 9, Ajax, JQuery, Javascript, Bootstrap, MySQL</p>
                                    </div>
                                </div>
                                <div className="h-[300px] bg-white/70 w-[250px] rounded-xl hover:scale-125 duration-500 flex-col" onClick={() => { setproject(2) }}>
                                    <h5 className="text-center">Point Of Sales APP - Frontend</h5>
                                    <img src="./src/img/temp/POS Front/1.jpg" alt="Project Thumbnail" className="w-full h-[175px]" />
                                    <div className="px-3">
                                        <h6>Programming Language</h6>
                                        <p className="text-xs">Javascript</p>
                                        <h6>Framework & Tools</h6>
                                        <p className="text-xs">React JS, Tailwind, Toast, MySQL</p>
                                    </div>
                                </div>
                                <div className="h-[300px] bg-white/70 w-[250px] rounded-xl hover:scale-125 duration-500 flex-col" onClick={() => { setproject(3) }}>
                                    <h5 className="text-center">Face Recognition Web-App</h5>
                                    <img src=".\src\img\logo.png" alt="Project Thumbnail" className="w-full h-[175px]" />
                                    <div className="px-3">
                                        <h6>Programming Language</h6>
                                        <p className="text-xs">PHP 8</p>
                                        <h6>Framework & Tools</h6>
                                        <p className="text-xs">Laravel 9, Ajax, JQuery, Javascript, Bootstrap, MySQL</p>
                                    </div>
                                </div>
                                <div className="h-[300px] bg-white/70 w-[250px] rounded-xl hover:scale-125 duration-500 flex-col" onClick={() => { setproject(4) }}>
                                    <h5 className="text-center">Forecasting Web-app</h5>
                                    <img src=".\src\img\temp\POS\1.JPG" alt="Project Thumbnail" className="w-full h-[175px]" />
                                    <div className="px-3">
                                        <h6>Programming Language</h6>
                                        <p className="text-xs">Java & HTML</p>
                                        <h6>Framework & Tools</h6>
                                        <p className="text-xs">Java Springboot, Thymeleaf</p>
                                    </div>
                                </div>
                                <div className="h-[300px] bg-white/70 w-[250px] rounded-xl hover:scale-125 duration-500 flex-col" onClick={() => { setproject(5) }}>
                                    <h5 className="text-center">Forecasting Desktop-app</h5>
                                    <img src="" alt="Project Thumbnail" className="w-full h-[175px]" />
                                    <div className="px-3">
                                        <h6>Programming Language</h6>
                                        <p className="text-xs">Java</p>
                                        <h6>Framework & Tools</h6>
                                        <p className="text-xs">Java Swing</p>
                                    </div>
                                </div>
                            </div>}

                    </div>
                </div>
                
            </div>
        </div>
        
    )
}
