import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
      <>
        <nav className=" flex justify-between bg-pink-500 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-2 w-full relative md:max-w-xs">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#pablo"
              >
                pink Tailwind Starter Kit
              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div className={"md:flex flex-grow items-center flex" +
                (navbarOpen ? " flex" : " hidden")}> 
      <nav className="flex flex-col sm:flex-row h-full items-end">

        <NavLink to='' className="font-semibold sm:text-2xl flex justify-center items-end w-full sm:w-[120px]"><p className="sm:fixed sm:top-[45px] h-[50px] w-[120px] text-center rounded-t-lg duration-300">Home</p></NavLink>
        <NavLink to='about' className="font-semibold sm:text-2xl flex justify-center items-end w-full sm:w-[120px]"><p className="sm:fixed sm:top-[45px] h-[50px] w-[120px] text-center rounded-t-lg duration-300">About Me</p></NavLink>
        <NavLink to='contact' className="font-semibold sm:text-2xl flex justify-center items-end w-full sm:w-[120px]"><p className="sm:fixed sm:top-[45px] h-[50px] w-[120px] text-center rounded-t-lg duration-300">Contact</p></NavLink>


      </nav>
          </div>
          </div>
        </nav>
      </>
    );
}
