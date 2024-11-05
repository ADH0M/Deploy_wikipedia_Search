import { useRef } from "react";

const ImageSlider = () => {
    const listRef = useRef();
    const getImage = (index)=>{
      const image = listRef.current;
      const list =image.querySelectorAll('li > img')[index];
      list.scrollIntoView({
        behavior:'smooth' ,
        block:'nearest' ,
        inilin:'center'
      })
      
    }
    

  return (
    <>
      <nav className="justify-center flex gap-4 text-gray-500">
        <button onClick={ ()=>getImage(0)}>Neo</button>
        <button onClick={()=>getImage(1)}>Millie</button>
        <button onClick={()=>getImage(2)}>Bella</button>
      </nav>

      <section className="w-full flex justify-center bg-white my-5 p-5">
        <div  className="relative bg-slate-400 p-3">
          <ul ref={listRef} className="flex gap-5 w-[900px] overflow-hidden flex-nowrap">
            <li > 
              <img className="min-w-[400px]" src="https://placecats.com/neo/200/200"  alt="Neo" />
            </li>
            <li>
              <img  className="min-w-[400px]" src="https://placecats.com/millie/200/200" alt="Millie" />
            </li>
            <li>
              <img className="min-w-[400px]" src="https://placecats.com/bella/199/200" alt="Bella" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ImageSlider;
