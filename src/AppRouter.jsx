import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from "./App/pages/HomePages.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Tasks from "./App/pages/Tasks.jsx";
import Postslist from "./App/components/ToDoTasks/Postslist.jsx";
import { createContext, useReducer } from "react";
import postsReducer, { initialState }  from "./App/store/posts/postReducer.js";


const router = createBrowserRouter([
  {
    path:import.meta.env.VITE_ROUTE_URL ,
    element: <HomePages />,
    children: [{ index: "/", element: <Navbar /> }],
  },
  {
    path: "/addpost",
    element: <Tasks />,
    children: [{ index: "/", element: <Navbar /> }],
  },
  {
    path: "/posts",
    element: <Postslist />,
    children: [{ index: "/", element: <Navbar /> }],
  },
]);

export const Postcontext = createContext({});
const AppRouter = () => {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  return (
    <>
      <Postcontext.Provider value={{ posts: state, dispatchPost: dispatch }}>
        <RouterProvider router={router} />
      </Postcontext.Provider>
    </>
  );
};

export default AppRouter;
