import Locker from "./Locker";
import WinnerModal from "./WinnerModal";
import TieModal from "./TieModal";
import ReplayBtn from "./ReplayBtn";
import TitleGame from "./TitleGame";
import { table_data as TD } from "../utilities/table-data";
import { points_X as PX } from "../utilities/points_count";
import { points_O as PO } from "../utilities/points_count";
import { createContext,useState,useEffect,useContext } from "react";
// importand el contexto de App
import { Context } from "../App";

export const tableContext = createContext();

const ContextTable = () => {

	const {typeGame,initMenu,winXpoint,setWinXpoint,winOpoint,setWinOpoint} = useContext(Context)

	const [player,setPlayer] = useState({inGame:true ,symbol:"X",winner:false})
	const [tie,setTie] = useState(false)
	
	
	
	
	function splitForPoints(symbol){
		function AddPoint(xo,list){
			xo = xo + 1
			 if(xo == 1){
				list[0].sym = "|"
			 }else if(xo == 2){
				list[1].sym = "|"
			 }else if(xo == 3){
				list[2].sym = "|"
			 }else if(xo == 4){
				list[3].sym = "|"
			 }else if(xo == 5){
				list[4].sym = "|"
			 }
		}
		if(typeGame > 0){
			symbol == 'X' ? setWinXpoint(winXpoint+1)  :  setWinOpoint(winOpoint+1)

			symbol == 'X' ? AddPoint(winXpoint,PX) : AddPoint(winOpoint,PO)
		}
	}
	function WinnerComb(game,symb){
	//combinaciones horizontales
		if((TD[0].marked) && (TD[1].marked)  && (TD[2].marked)){
			if((TD[0].sym == TD[1].sym) && ( TD[0].sym  == TD[2].sym)){
				splitForPoints(TD[0].sym)
				setPlayer({inGame:game , symbol:symb , winner:true})
			}
		}

		if((TD[3].marked) && (TD[4].marked)  && (TD[5].marked)){
			if((TD[3].sym == TD[4].sym) && ( TD[3].sym  == TD[5].sym)){
				splitForPoints(TD[3].sym)
				setPlayer({inGame:game , symbol:symb , winner:true})
			}	
		}

		if((TD[6].marked) && (TD[7].marked)  && (TD[8].marked)){
			if((TD[6].sym == TD[7].sym) && (TD[6].sym  == TD[8].sym)){
				splitForPoints(TD[6].sym)
				setPlayer({inGame:game , symbol:symb , winner:true})
			}
		}

	//Combinaciones verticales
		if((TD[0].marked) && (TD[3].marked)  && (TD[6].marked)){
			if(TD[0].sym == TD[3].sym && ( TD[0].sym  == TD[6].sym)){
				splitForPoints(TD[0].sym)
				setPlayer({inGame:game , symbol:symb , winner:true})
			}
		}		
		if((TD[1].marked) && (TD[4].marked)  && (TD[7].marked)){
			if(TD[1].sym == TD[4].sym && ( TD[1].sym  == TD[7].sym)){
				splitForPoints(TD[1].sym)
				setPlayer({inGame:game , symbol:symb , winner:true})
			}
		 }	
		if((TD[2].marked) && (TD[5].marked)  && (TD[8].marked)){
			if(TD[2].sym == TD[5].sym && ( TD[2].sym  == TD[8].sym)){
				splitForPoints(TD[2].sym)
				setPlayer({inGame:game , symbol:symb , winner:true})
			}
		}
		
		//
 
		if((TD[0].marked) && (TD[4].marked)  && (TD[8].marked)){
			if(TD[0].sym == TD[4].sym && ( TD[0].sym  == TD[8].sym)){
				splitForPoints(TD[0].sym)
				setPlayer({inGame:game , symbol:symb , winner:true})
			}
		} 
		if((TD[2].marked) && (TD[4].marked)  && (TD[6].marked)){
			if(TD[2].sym == TD[4].sym && ( TD[2].sym  == TD[6].sym)){				
				splitForPoints(TD[2].sym)
				setPlayer({inGame:game , symbol:symb , winner:true})
			}
		}
		//Verificar empate
		if( !(player.winner) ){
			setTie(TD.every(x => x.marked==true))
		}else{
			return 1
		}
	}
	function Replay(){
		setPlayer({inGame:true,symbol:"X",winner:false})
		setTie(false)

		TD.map(x => x.sym="")
		TD.map(x => x.marked=false)
	}
	function ReplayAll(){
		Replay()
		PX.map(x => x.sym = "")
		PO.map(x => x.sym = "")
		setWinXpoint(0)
		setWinOpoint(0)
	}
	function HandleClick (e){
		if( e.target.id){
			let index = e.target.id
			if( !(TD[index].marked ) ){
				player.inGame ? setPlayer({ inGame:false , symbol:"O",winner:false}) : 
								setPlayer({ inGame:true , symbol:"X",winner:false})
							
				TD[index].marked = true
				TD[index].sym = player.symbol
				
				WinnerComb(player.inGame , player.symbol )
							
			}
		}
  	}

  useEffect(()=>{
	Replay()
	PX.map(x => x.sym = "")
	PO.map(x => x.sym = "")
	setWinXpoint(0)
	setWinOpoint(0)
  },[initMenu])

	return (
<tableContext.Provider value={{HandleClick,Replay,player,ReplayAll}}>
	<main className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
		{typeGame<1?<TitleGame mess={"partida unica"}/>:typeGame<2?<TitleGame mess={"mejor de tres"}/>:
		<TitleGame mess={"mejor de cinco"}/>}
		<section className="grid grid-cols-3 gap-3 mb-20">
      		{TD.map( x => <Locker key={x.id}  id={x.id} sym={x.sym}/> )}
      	</section>
		 
		<section className="flex justify-center items-center gap-5 w-full"> 
			<ReplayBtn/>
			<h1 className="bg-violet-500 p-3 rounded-md text-sm lg:text-xl md:w-1/4 lg:w-1/5 flex items-center pointer-events-none">Siguinte: 
				<span className=" text-sm lg:text-2xl text-red-700 font-bold ">{player.symbol}</span> 
			</h1>	
		</section>

		{typeGame ==1 && winXpoint == 3 ?<WinnerModal name={"X"} message={"el GANADOR del torneo es !!! "} typeG={1} texButton={"replay"}/>:<></>}
		{typeGame ==1 && winOpoint == 3 ?<WinnerModal name={"O"} message={"el GANADOR del torneo es !!! "} typeG={1} texButton={"replay"}/>:<></>}
		{typeGame ==2 && winXpoint == 5 ?<WinnerModal name={"X"} message={"el GANADOR del torneo es !!! "} typeG={1} texButton={"replay"}/>:<></>}
		{typeGame ==2 && winOpoint == 5 ?<WinnerModal name={"O"} message={"el GANADOR del torneo es !!! "} typeG={1} texButton={"replay"}/>:<></>}


		{player.winner?<WinnerModal name={player.symbol} message={typeGame<1?"EL GANADOR ES":"punto para"} texButton={typeGame==0?"replay":"back to game"}/>
		:tie?<TieModal/>:<></>}
		
	</main>
</tableContext.Provider>
  )
}

export default ContextTable
