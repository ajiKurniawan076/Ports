import { useState, useEffect, useContext } from "react"
import { Pages } from "../../App"
import {AiFillInstagram, AiOutlineWhatsApp, AiFillFacebook, AiFillMail} from "react-icons/ai"

export const Contact = () => {
  const [rendered, setrender] = useState(false)
  const {setpage, dark} = useContext(Pages)
  useEffect(() => {
    let loading = true
    loading===true && setrender(true)
    //console.log('rendered')
    setpage('CONTACT')
    return () => {
      loading = false
     }
  }, []

  )
  return (
    <div className={`w-full mt-5 ${rendered?` bg-black/30 scale-100  ${dark?'bg-white':''}`:'scale-[10%] bg-transparent'} sm:h-[400px] rounded-3xl duration-300`}>

      <div className={`p-10 ${dark? 'text-black/80':'text-white/80'} bg-black/30 rounded-3xl h-full text-center`}>
        <h3 className="">Contacts</h3> 
        <div className="mt-3 p-4 text-sm font-semibold">You guys can find me on some social media platform below :
        <br /><span className="flex items-center gap-3"><AiFillInstagram size={40}/><a href="https://www.instagram.com/ajik.oni/"> @Ajik.oni</a></span>
        <br /><span className="flex items-center gap-3"><AiFillFacebook size={40}/><a href='https://www.facebook.com/oni.nhooligan/'>fb.com/oni.nhooligan</a></span>
        <br /><span className="flex items-center gap-3"><AiOutlineWhatsApp size={40}/><a href="https://wa.me/6288232943147"> +6288 232 943 147</a></span>
        <br /><span className="flex items-center gap-3"><AiFillMail size={40}></AiFillMail> <a href="mailto:ajikurniawan076@gmail.com">Ajikurniawan076@gmail.com</a></span>
        </div>
      </div>
    </div>
  )
}
