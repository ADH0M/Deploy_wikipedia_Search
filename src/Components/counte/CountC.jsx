import { useContext } from "react";
import { Context } from "../../App";

const CountC = () => {
  const {curentDispatch} = useContext(Context);

  return (
    <div>

      <button className="m-2" onClick={()=>{curentDispatch({type:'decrement'})}}>-</button>
      <button className="m-2" onClick={()=>{curentDispatch({type:'reset'})}}>reset</button>
      <button className="m-2" onClick={()=>{curentDispatch({type:'increment'})}}>+</button>
    </div>
  )
}

export default CountC
