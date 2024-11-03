import React, { useContext } from 'react'
import CountC from './CountC'
import { Context } from '../../App'

const CountB = () => {
    const {curentDispatch} = useContext(Context);
    
  return (
    <div>
      <CountC/>
    </div>
  )
}

export default CountB
