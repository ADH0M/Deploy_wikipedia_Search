import { useCallback, useEffect, useState } from "react";
import axios from "../../api/udime";
import _ from 'lodash';

const ApiApp = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState(null); // تعديل هنا ليكون null

  const search = async (data) => {
    try {
      const res = await axios.get('api.php', {
        params: {
          action: "query",
          origin: "*",
          srsearch: data,
          format: "json",
          list: "search",
        },
      });
      setResult(res.data); // تأكد من تخزين البيانات فقط
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult(null); // إعادة تعيين النتائج عند حدوث خطأ
    }
  };

  const debounce = useCallback(_.debounce(search, 1000), []);

  const handleChange = (event) => {
    setTerm(event.target.value);
    debounce(event.target.value);
  };

  useEffect(() => {
    if (term) {
      debounce(term); // استخدم debounce مباشرة
    } else {
      setResult(null); // إعادة تعيين النتيجة إذا كان الإدخال فارغًا
    }
  }, [term, debounce]);

  return (
    <div className="w-full h-96 bg-gray-800 text-gray-100 border flex justify-center items-center flex-col">
      <label>
        <input
          className="text-orange-950"
          type="text"
          placeholder="search"
          onChange={handleChange}
          value={term}
        />
        <button onClick={() => search(term)}>Search</button> {/* وظيفة زر البحث */}
      </label>
      <div>
        {result && result.query && result.query.search && result.query.search.map(item => (
          <div key={item.pageid}>{item.title} <span dangerouslySetInnerHTML={{__html:item.snippet}}></span></div> // عرض النتائج
        ))}
      </div>
    </div>
  );
};

export default ApiApp;
