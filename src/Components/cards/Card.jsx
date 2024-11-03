import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider";

const Card = () => {
    const {cardReducer} = useContext(AuthContext)
    
   return (
    <div className={`${cardReducer.value ?"text-green-500" :'text-gray-800 dark:text-gray-200'}`}>
        Cart : {cardReducer.value }
    </div>
  )
}

export default Card
