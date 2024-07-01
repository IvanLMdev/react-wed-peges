import { useContext } from "react"
import { tableContext } from "./ContextTable"

const TieModal = () => {

    const {Replay} = useContext(tableContext)

  return (
    <div className="w-full min-h-screen bg-violet-950 flex flex-col justify-center items-center absolute left-0  gap-5">
        <h1 className="text-violet-300 text-2xl lg:text-5xl">
            <span className="text-red-700 text-3lx lg:text-7xl">x </span>y 
            <span className="text-red-700 text-3xl lg:text-7xl"> o </span> 
            Empataron !!!</h1>
        <button className="bg-violet-500 p-3 rounded-md text-1xl lg:text-xl  hover:bg-violet-900 transition-colors" onClick={Replay} >REPLAY</button>
    </div>
  )
}

export default TieModal
