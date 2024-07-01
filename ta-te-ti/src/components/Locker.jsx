import { FaRegCircle } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

import { useContext } from "react"
import { tableContext } from "./ContextTable"

const Locker = ({id,sym}) => {

    const {HandleClick,player} = useContext(tableContext) 

    return (
        <div className="w-[60px] h-[60px] md:w-[90px] md:h-[90px]  lg:w-[150px] lg:h-[150px]  border-4 border-violet-950 flex items-center justify-center rounded-md  hover:border-violet-600 transition-colors" onClick={HandleClick} id={id} sym={sym}> 
            
            {player.winner?<></> : sym=="X" ? <RxCross1 size={"75px"} color="purple"/> :
             sym=="O" ? <FaRegCircle size={"75px"} color="purple"/>:<></>}
           
        </div>
  )
}

export default Locker
