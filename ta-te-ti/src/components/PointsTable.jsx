import {points_X as PX} from '../utilities/points_count';
import {points_O as PO} from '../utilities/points_count';

const PointsTable = () => {
  

  return (
    <section className=" lg:w-60 h-60 bg-violet-800  rounded-md flex flex-col justify-start items-center pointer-events-none">
        <h1>Puntos</h1>
        <section className="flex w-full min-h-52">
          <ul className="bg-violet-600 w-full flex flex-col justify-star items-center min-h-full border-r-2 border-violet-800">
              <h2 className="text-2xl text-violet-950 font-bold">X</h2>
              {PX.map(x=><h1 key={x.id} className="text-2xl text-red-700">{x.sym}</h1>)}
          </ul>
          <ul className="bg-violet-600 w-full flex flex-col justify-star items-center min-h-full border-l-2 border-violet-800">
              <h2 className="text-2xl text-violet-950  font-bold">O</h2>
              {PO.map(o=><h1 key={o.id} className="text-2xl text-red-700">{o.sym}</h1>)}
          </ul>
        </section>
    </section>
  )
}

export default PointsTable
