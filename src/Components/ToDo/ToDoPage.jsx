// ()=>{
//   const task =state.find((item)=>item.id===action.id);
//   return [...state ,{...task}]
// }

import { useReducer } from "react";
import AddTask from "./AddTask";
import TasksList from "./TasksList";

const initialState = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

const reducer = (state , action)=>{
  switch (action.type) {
    case 'Add':

      return [...state ,{id:state.length + 1,text:action.payload ,done:false}]
    
    case 'Edit':
      return state.map((ele)=>{
        if(ele.id === action.task.id){
          return action.task;
        }else{
          return ele
        };
      });
    
      case 'Delete':
      return state.filter((item)=>{
        return item.id !== action.id
      })

      default :
        return state;
  }
}

const ToDoPage = () => {
  const [state , dispatch] = useReducer( reducer , initialState);
  console.log(state);
  
  const handleAddTask = (task)=>{
    dispatch({type:'Add',payload:task});
  };

  const handleEdite = (task)=>{
    dispatch({type:'Edit' ,task:task})
  }

  const handelDelete = (id)=>{
    dispatch({type:'Delete' ,id:id})
  }

  return (
    <div className="container mx-auto w-64 h-64 flex justify-center m-5 w-full  h-full ">
      <section>
        <AddTask newTask = {handleAddTask}/>
        <TasksList state={state} handleEdite={handleEdite} handelDelete={handelDelete}/>
      </section>
    </div>
  );
};

export default ToDoPage;
