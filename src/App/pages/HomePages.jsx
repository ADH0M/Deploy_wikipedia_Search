import { useEffect, useState } from "react";
import axios from "../Api/wikipadi";
import { Outlet } from "react-router";

const HomePages = () => {
  const [search, setSearch] = useState("javascript");
  const [result, setResult] = useState({});

  const mydb =myDebounce(search ,1200)
  useEffect(() => {
    const wikiApi = async () => {
      const res = await axios.get("api.php", {
        params: {
          action: "query",
          origin: "*",
          format: "json",
          list: "search",
          srsearch: mydb,
        },
      });
      setResult(res.data.query);
    };
    const debounce = setTimeout(() => {
      if (search.length) {
        wikiApi();
      }
    }, 1200);
    return ()=>{
      clearTimeout(debounce)
    }
  }, [mydb]);

  return (
    <div>
      <Outlet />
      <div className="flex w-full justify-center ">
        <label htmlFor="search">
          search
          <input
            type="text"
            id="search"
            className="border m-2 p-2"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>name </th>
            <th>content </th>
          </tr>
        </thead>
        <tbody>
          {result?.search?.map((itme, index) => (
            <tr key={index + "wikiSearch"}>
              <td>{itme.title}</td>
              <td dangerouslySetInnerHTML={{ __html: itme.snippet }}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const myDebounce = (value ,delay)=>{
  const [data , setData] = useState('');
  useEffect(()=>{
    const debounceTime = setTimeout(()=>{
        setData(value)
    } , delay);

    return ()=>{
      clearTimeout(debounceTime)
    }
  } ,[value ,delay]);
  return data
}
export default HomePages;
