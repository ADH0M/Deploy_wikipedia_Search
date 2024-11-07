import { useEffect, useState } from "react";
import DarkModeBtn from "../buttons/DarkModeBtn";
import Secations from "./Secations";
import Card from "../cards/Card";

const Navbar = () => {
  const [windowScroll, setWindoScroll] = useState(false);
  const handelScroll = () => {
    if (window.scrollY > 30) {
      return setWindoScroll(true);
    } else {
      return setWindoScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
  }, []);

  return (
    <div
      className={`flex transition-all duration-300 z-50 sticky top-0 justify-center items-center ${
        windowScroll
          ? "bg-blue-200 dark:bg-slate-500 pb-1 border-b border-gray-300 "
          : "bg-gray-300 dark:bg-gray-600 border-b border-b-gray-400"
      }   `}
    >
      <Secations />
      <DarkModeBtn />
      <div className="flex ml-3 gap-2">
        <Card />
      </div>
    </div>
  );
};

export default Navbar;
