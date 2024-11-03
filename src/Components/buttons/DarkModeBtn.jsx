import { useEffect, useState } from "react";

const DarkModeBtn = () => {
    const [darkMode , setDarkMode ] = useState(()=>{
        const saveDarkMode = localStorage.getItem('darkMode');
        return saveDarkMode ? JSON.parse(saveDarkMode) : false ;
    });

    const getDarkMode = ()=>{
        if(darkMode){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        };
        return localStorage.setItem('darkMode' , JSON.stringify( darkMode ) ) 
    };

    useEffect(()=>{
        getDarkMode();
    } ,[darkMode]);

  return (
    <div className="flex w-[50px] py-1  h-fit justify-center items-center ml-2 rounded-full bg-gray-100">
      <label htmlFor="theme" className="text-gray-100 text-indigo-700 dark:text-sky-600">
        <button id="theme" onClick={()=>{setDarkMode(!darkMode)}}>{darkMode ?'white':'dark'}</button>
      </label>

    </div>
  );
};

export default DarkModeBtn;
