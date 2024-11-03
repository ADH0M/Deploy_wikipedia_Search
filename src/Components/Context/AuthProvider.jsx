import { createContext, useReducer, useState } from 'react'
import reducer,{initialState } from './reducer'



export const AuthContext = createContext({});


const AuthProvider = ({children}) => {
    const [state , dispatch ] = useReducer(reducer,initialState)
    const [auth ,setAuth] = useState({});
  return (
    <div>
        <AuthContext.Provider value={{ auth , setAuth ,cardReducer:state ,cartDispatch:dispatch}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
