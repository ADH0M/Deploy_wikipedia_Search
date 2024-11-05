import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ToDoPage from "./Components/ToDo/ToDoPage";
import ProductPage from "./Components/product/ProductPage";
import ImageSlider from "./Components/useEfecteTarining/useRef/ImageSlider";
import Inputs from "./Components/useEfecteTarining/useRef/Inputs";
import Vedio from "./Components/useEfecteTarining/useRef/Vedio";


function App() {
  return (
      <div className="dark:bg-gray-800 w-full  ">
        <Navbar />
        <ProductPage />
        <ToDoPage />
        <ImageSlider />
        <Vedio />
        <Inputs />

      </div>

  );
}

export default App;
