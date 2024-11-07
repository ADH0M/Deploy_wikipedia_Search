import { Outlet } from "react-router";
import AddPosts from "../components/ToDoTasks/AddPosts";


const Tasks = () => {
  return (
    <>
      <div className=" m-auto w-full">
        <Outlet />
      </div>
      <div>
        <AddPosts />
      </div>
    </>
  );
};

export default Tasks;
