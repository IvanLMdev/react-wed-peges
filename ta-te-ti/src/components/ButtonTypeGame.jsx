import { useContext } from "react"
import { Context } from "../App"

const ButtonTypeGame = ({des,id}) => {

  const {SelectGame} = useContext(Context)

  return (
    <button id={id} className="text-sm  lg:w-52 rounded-md p-2 bg-violet-800 my-3  hover:bg-violet-500 transition-colors" onClick={SelectGame}>
        {des}
    </button>
  )
}

export default ButtonTypeGame
