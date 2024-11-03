import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
const products = [
  { name: "Ch", id: 1, category: "S" },
  { name: "Se", id: 3, category: "A" },
  { name: "Es", id: 4, category: "T" },
  { name: "Pt", id: 2, category: "S" },
];

const ProductPage = () => {
    const {cartDispatch ,cardReducer} =useContext(AuthContext);    
    
  return (
    <div className="container m-auto w-full">
      <table className="w-full flex flex-col items-center my-3 ">
        <thead className="">
          <tr>
            <th className="m-1 inline-block p-2 rounded-lg dark:text-gray-100">
              Products
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td className="bg-gray-600 m-1 border  text-gray-100 inline-block p-2 rounded-lg">
                {item.name}
              </td>
              <td className="bg-gray-600 m-1 border text-gray-100 inline-block p-2 rounded-lg">
                {item.category}
              </td>
              <td>
                <button 
                    onClick={()=>{cartDispatch('increase')}}
                    className="bg-indigo-700 m-1 p-2 rounded-lg text-gray-100 m-2 hover:bg-indigo-500 border">
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <button 
                disabled={cardReducer.value === 0 }
                onClick={()=>{
                    cartDispatch('decrease')
                }}
                className="bg-rose-500 p-2 m-1 rounded-lg text-gray-100 m-2 hover:bg-rose-400 border ">
                remove one
              </button>

            </td>
            <td className="m-2 inline-block p-2 cursor-pointer dark:text-gray-200" onClick={()=>{
                cartDispatch('reset')
            }} >reset</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductPage;
