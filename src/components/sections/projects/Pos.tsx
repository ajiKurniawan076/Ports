import { useState } from "react"
import { AiOutlineDownSquare, AiOutlineLeftSquare, AiOutlineRightSquare, AiOutlineUpSquare } from "react-icons/ai"

export const Pos = () => {
  const totalimg = 10
  const [currentimg, setcurretimg] = useState(2)
  const arrTot = [...Array(totalimg).keys()].slice(1)
  let showimg = currentimg==1? arrTot.slice(0, 2) : arrTot.slice(currentimg - 2, currentimg + 1) 
  console.log(showimg);

  return (
    <div className="flex flex-col w-full h-full items-center gap-5">
      <div className="flex h-1/2 my-10 relative max-md:hover:scale-150">
        <div className="flex gap-3 items-center max-md:flex-col">
          <button onClick={()=>{currentimg!=1 && setcurretimg(currentimg-1)}} className="max-md:hidden h-[250px] bg-gray-500/80 absolute z-10 left-0"><AiOutlineLeftSquare size={50}/></button>
          <button onClick={()=>{currentimg!=1 && setcurretimg(currentimg-1)}} className="md:hidden absolute top-[-1%] z-20 w-[250px] bg-gray-500/80 flex justify-center"><AiOutlineUpSquare size={50}/></button>
          {showimg.map((id, index) => (
            currentimg!=1?
            index==1? <a href={`./src/img/temp/POS/${id}.JPG`} target="_blank" className="z-10"><img src={`./src/img/temp/POS/${id}.JPG`} alt="" className={`duration-300 scale-100 md:scale-150 z-10 w-[250px] h-[250px]`} key={id}/></a> : <img src={`./src/img/temp/POS/${id}.JPG`} alt="" className={`duration-300 scale-100 w-[250px] h-[250px] max-md:hidden`} key={id}/>
              :
              index==0? <a href={`./src/img/temp/POS/${id}.JPG`} target="_blank" className="z-10"><img src={`./src/img/temp/POS/${id}.JPG`} alt="" className={`duration-300 scale-100 md:scale-150 z-10 w-[250px] h-[250px]`} key={id}/></a> : <img src={`./src/img/temp/POS/${id}.JPG`} alt="" className={`duration-300 scale-100 w-[250px] h-[250px] max-md:hidden`} key={id}/>
            ))}
          <button onClick={()=>{currentimg!=9 && setcurretimg(currentimg+1)}} className="max-md:hidden h-[250px] bg-gray-500/80 absolute right-0"><AiOutlineRightSquare size={50}/></button>
          <button onClick={()=>{currentimg!=9 && setcurretimg(currentimg+1)}} className="md:hidden absolute bottom-0 z-10 w-[250px] bg-gray-500/80 flex justify-center"><AiOutlineDownSquare size={50}/></button>
        </div>
        
      </div>
      <div className="px-3 text-center">
                                        <h5>Application Name</h5>
                                        <p className="text-xs">Point of Sales Application </p>
                                        <h5>Programming Language</h5>
                                        <p className="text-xs">PHP 8</p>
                                        <h5>Framework & Tools</h5>
                                        <p className="text-xs">Laravel 9, Ajax, JQuery, Javascript, Bootstrap, MySQL</p>
                                    </div>
    </div>
  )
}
