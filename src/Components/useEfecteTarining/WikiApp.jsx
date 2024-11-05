import { useEffect, useState, useCallback } from "react";
import axios from "../../api/udime";
import PrevState from "./PrevState";

const WikiApp = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [debounceTerm, setDebounceTerm] = useState(term);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceTerm(term);
    }, 1200);
    
    return () => {
      clearTimeout(timeout);
    };
  }, [term]);

  const search = useCallback(async () => {
    if (!debounceTerm) return; // تجنب البحث في حالة عدم وجود مصطلح
    const res = await axios.get("api.php", {
      params: {
        action: "query",
        origin: "*",
        srsearch: debounceTerm,
        format: "json",
        list: "search",
      },
    });
    setResult(res.data.query.search || []);
  }, [debounceTerm]);

  useEffect(() => {
    search();
  }, [debounceTerm, search]);

  const table = result.map((item) => (
    <div key={item.title}>
      <span>{item.title}</span>
      <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
    </div>
  ));

  return (
    <div className="w-full h-96 bg-gray-800 text-gray-100 border flex justify-center items-center flex-col">
      <label htmlFor="">
        <input
          className="text-orange-950"
          type="text"
          placeholder="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>search</button>
      </label>
      <div>{table}</div>
      <PrevState/>
    </div>
  );
};

export default WikiApp;
