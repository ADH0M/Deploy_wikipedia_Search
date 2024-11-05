import React, {  useEffect, useRef, useState } from 'react'

const PrevState = () => {
    const [state ,setState] =useState('javaScript');
    const preState = useRef();
    useEffect(()=>{
        preState.current = state ;
    },[state]);
    const previousState =preState.current ; 
  return (
    <div>
      <input type="text" className='text-gray-900' value={state} onChange={(e)=>setState(e.target.value)} />
        <div className='p-2 m-2 font-semibold text-gray-500 text-xl'>{previousState}</div>
    </div>
  )
}

export default PrevState
