import React, { useState } from "react";

const TasksList = ({ state ,handleEdite ,handelDelete }) => {
  return (
    <div>
      {state.map((item) => (
        <div key={item.id}>
          <Tasks item={item} change={handleEdite} deleteTask={handelDelete} />
        </div>
      ))}
    </div>
  );
};

const Tasks = ({item ,change ,deleteTask}) => {
  const [isEdit ,SetIsEdit] =useState(false);
  let taskContent ;
  if(isEdit){
    taskContent =(
      <>
        <input type="text" value={item.text} className="rounded-md border p-2 hover:border-indigo-800" onChange ={(e)=>{ change({...item , text:e.target.value})}}/>
        <button onClick={()=>{ SetIsEdit(false)}} className="text-rose-50 bg-lime-400 hover:bg-gray-600 ml-2 p-2 rounded-md">save</button>
      </>
    )
  }else{
    taskContent =(
      <>
        {item.text}
        <button onClick={()=>{ SetIsEdit(true)}} className="text-rose-50 bg-red-400 hover:bg-gray-600 ml-2 p-2 rounded-md">Edit</button>
      </>
    )
  }
  return (
      <div>
        {taskContent}
        <button onClick={()=>{deleteTask(item.id)}} className="text-rose-50 hover:bg-gray-600 bg-red-400 m-2 p-2 rounded-md ">delete</button>
      </div>
);
};

export default TasksList;
