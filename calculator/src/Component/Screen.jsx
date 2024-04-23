import { useContext } from "react"
import { CalContext} from "../Context/CalContext"
export default function Screen(){
      const {dvalue}=useContext(CalContext)
      return (
        <>
           <div className="w-full h-auto bg-slate-600 rounded-xl">
                <div className="text text-2xl p-5 flex justify-end text-slate-50">
                      {dvalue?dvalue:"0"}
                </div>
           </div>
        </>
    )
}