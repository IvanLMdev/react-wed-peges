import ButtonTypeGame from "./ButtonTypeGame"

const StartedMenu = () => {
  return (
    <div className="absolute left-0 min-h-screen w-full flex  flex-col justify-center gap-9 items-center bg-violet-950">
        <h1 className=" text-violet-800 text-4xl lg:text-6xl  font-black title ">mega tá té tí</h1>
        <ul className=" flex flex-col justify-around items-center ">
            <ButtonTypeGame id={0} des={"partida unica"} />
            <ButtonTypeGame id={1} des={"mejor de tres"} />
            <ButtonTypeGame id={2} des={"mejor de cinco"} />
        </ul>
    </div>
  )
}

export default StartedMenu
