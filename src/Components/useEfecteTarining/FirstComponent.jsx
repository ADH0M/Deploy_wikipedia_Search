import { useEffect, useRef, useState } from "react";
import WikiApp from "./WikiApp";
import ApiApp from "./ApiApp";
import DebounceCustomHook from "./DebounceCustomHook";
const FirstComponent = () => {
  const [pwd, setPwd] = useState("");
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  let value = n1 + n2;
  const refEffect = useRef(true);
  useEffect(() => {
    if (refEffect.current) {
      refEffect.current = false;
      console.log("mounte");
    }
  }, []);

  const [name, setName] = useState("true");

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <input
          type="text"
          value={n1}
          onChange={(e) => {
            setN1(e.target.value);
          }}
        />
        <input
          type="text"
          value={n2}
          onChange={(e) => {
            setN2(e.target.value);
          }}
        />
        <div>
          <h2>name: {name}</h2>
          <h2>password: {pwd}</h2>
        </div>
        <div>
          <span>{n1}</span>
          <span>+</span>
          <span>{n1}</span>
          <span>=</span>
          <span>{value}</span>
          <span className="inline-block ml-3" onClick={() => {}}>
            add
          </span>
        </div>
      </div>
      <WikiApp />
      {/* <ApiApp />  */}
      {/* <DebounceCustomHook /> */}
    </>
  );
};

export default FirstComponent;

  
