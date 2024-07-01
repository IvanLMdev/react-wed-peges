import { useContext } from "react"
import { tableContext } from "./ContextTable"

const ReplayBtn = () => {
    const {Replay} = useContext(tableContext)

    return (
        <button className="bg-violet-900 p-3 rounded-md text-sm lg:text-xl
         hover:bg-violet-500 transition-colors " 
         onClick={Replay} >reset</button>
    )
}

export default ReplayBtn
