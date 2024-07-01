import Aside from "./components/Aside"
import ContextTable from "./components/ContextTable"
import StartedMenu from "./components/StartedMenu";
import { createContext,useState } from "react";

export const Context = createContext()

function App() {

   const [typeGame,setTypeGame] = useState(null)
   const [initMenu,setInitMenu] = useState(true)

   const [winXpoint,setWinXpoint] = useState(0)
   const [winOpoint,setWinOpoint] = useState(0)

   function SelectGame(e){
     let idButton = e.target.id
     let aux

     idButton==0 ? aux=0 : idButton==1 ? aux=1 : idButton==2 ? aux=2 : aux=3  
     
     setTypeGame(aux)

     aux==3 ? setInitMenu(true) : setInitMenu(false)
   }
 
  return (<>
   <Context.Provider  value={{typeGame,SelectGame,initMenu,winXpoint,setWinXpoint,winOpoint,setWinOpoint}}>
      {initMenu?<StartedMenu/>:<></>}
     <div className="min-h-screen bg-violet-400 flex ">
        <Aside/>
        <ContextTable/>
     </div>
   </Context.Provider>
    </>)
}

export default App
