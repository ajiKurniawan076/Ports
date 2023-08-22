import { useContext, useEffect, useState } from "react"
import { Pages } from "../../App"

export const Home = () => {
  const [rendered, setrender] = useState(false)
  const {setpage} = useContext(Pages)
  useEffect(() => {
    let loading = true
    loading===true && setrender(true)
    //console.log('rendered')
    setpage('HOME')
    return () => {
      loading = false
     }
  }, []

  )
  return (
    <div className={`w-full mt-5 ${rendered?'bg-black/30 scake-100':'scale-[10%] bg-transparent'} sm:h-[400px] rounded-3xl duration-300`}>

      <div className="p-10 text-white/80 bg-black/30 rounded-3xl h-full text-center">
        <h3 className="animate-bounce hover:animate-none">Welcome To My Page Pals</h3> 
        <p className="mt-10 p-4 text-xl font-semibold">This is My Portofolio page that contains my personal information.
        <br /><br />I would like to share my projects and my social media accounts in this site, so thank you for being here my friend.
        </p>
      </div>

    </div>
  )
}
