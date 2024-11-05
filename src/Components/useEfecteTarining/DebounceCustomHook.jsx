import  { useEffect, useState } from 'react'

const DebounceCustomHook = () => {
    const [query , setQuery] = useState('');
    const debounce = customDebounce(query ,1000);
    useEffect(()=>{
        // logic 
        console.log('data ...' + debounce);
    },[debounce]);
    return (
        <input
          type="text"
          value={query}
          onChange={ (e)=>{
            setQuery(e.target.value);
        }}
          placeholder="ابحث هنا..."
        />
      );
};

function customDebounce ( value , delay){
    const [query , setQuery] = useState('');
    useEffect(()=>{
        const time = setTimeout(()=>{
            setQuery(value)
        }, delay);

        return ()=>{
            clearTimeout(time);
        }
        
    } ,[value , delay]);
    return query ;
};

export default DebounceCustomHook
