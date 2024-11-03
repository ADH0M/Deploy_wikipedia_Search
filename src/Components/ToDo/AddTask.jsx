import { useRef } from "react"

const AddTask = ({newTask}) => {
  const task = useRef('')
  return (
    <div>
      <input type="text" ref={task} className="m-2 text-gray-400 p-2 border rounded-lg outline-none hover:border-blue-500"/>
      <button onClick={()=>newTask(task.current.value)} className="text-gray-900 dark:bg-blue-600 p-2 rounded-lg dark:text-gray-100 text-md border hover:bg-opacity-70 hover:border-rose-200 " >Add</button>
    </div>
  )
};








export default AddTask
