import { createContext, useReducer } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ToDoPage from "./Components/ToDo/ToDoPage";
import ProductPage from "./Components/product/ProductPage";


function App() {
  return (
      <div className="dark:bg-gray-800 w-full  h-[100vh]">
        <Navbar />
        {/* <ToDoPage /> */}
        <ProductPage />
      </div>

  );
}

export default App;
