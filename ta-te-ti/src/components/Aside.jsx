import ButtonTypeGame from "./ButtonTypeGame"
import PointsTable from "./PointsTable"
import { useContext } from "react"
import { Context } from "../App"

const Aside = () => {

   const {typeGame} = useContext(Context)
  
   return (
   <aside className=" bg-violet-300  py-3 px-1 border-violet-950 flex m-auto min-h-screen  w-1/3 md:w-1/5 border-r-4 lg:w-1/3  flex-col  items-center justify-between">

         <h1 className="grid gap-2 grid-cols-1 lg:grid-cols-3 text-violet-950  text-3xl lg:text-5xl  font-black title pt-3">
            <span>Tá </span>
            <span>Té</span>
            <span>Tí</span>
         </h1>
         
         {typeGame > 0 ?<PointsTable/>: <></>}
         
         <section className="w-60 mb-9 flex justify-center">
            <ButtonTypeGame id={3} des={"menu"} />
         </section>
      
   </aside>
  )
}

export default Aside
