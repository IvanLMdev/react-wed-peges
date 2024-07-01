import ButtonTypeGame from "./ButtonTypeGame"
import { useContext } from "react"
import { tableContext } from "./ContextTable"

const WinnerModal = ({name,message,typeG=0,texButton}) => {

  const {Replay,ReplayAll} = useContext(tableContext)

  return (
    <div className="w-full min-h-screen bg-violet-950 flex flex-col justify-center items-center absolute left-0  gap-5">
        <h1 className="text-violet-300 text-2xl lg:text-5xl text-center"> {message} 
        <span className="text-red-700 text-3xl lg:text-7xl">{name}</span></h1>
        
        <button className=" w-42 lg:w-52 bg-violet-500 p-2 rounded-md  text-1xl lg:text-xl  hover:bg-violet-900 transition-colors" onClick={typeG==0 ? Replay : ReplayAll} >{texButton}</button>

        {typeG > 0 ?<ButtonTypeGame id={3} des={"menu principal"} /> : <></>}
    </div>
  )
}

export default WinnerModal
