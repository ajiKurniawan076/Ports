import { useContext } from "react"
import { Pages } from "../App"

export const Footer = () => {
  const {dark} = useContext(Pages)
  return (
    <div className={`flex w-full border-t-4 border-gray-400/80 justify-between mt-auto ${dark?' text-white ': null}`}>
        <div className="ms-auto">
        <h4 className="text-end">Thanks for visiting My Page</h4>
        <p className="font-semibold text-end">I wish you a happy and beautiful day</p>
        </div>
    </div>
  )
}
