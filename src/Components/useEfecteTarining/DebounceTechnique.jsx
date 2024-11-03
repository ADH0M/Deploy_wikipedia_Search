// debounce use useCallback and lodash
import _, { debounce } from 'lodash';
import { useCallback, useState } from 'react';

const DebounceTechnique = () => {
    const [term , setTerm] = useState('')
    const search = (value)=>{
        console.log(` the value is ${value}`);
    };

    const debounce = useCallback(_.debounce(search , 1000),[]);

  return (
    <div>
        <input type="text" value={term}  onChange={(e)=>{
            setTerm(e.target.value);
            debounce(e.target.value);
        }}/>
    </div>
  )
}

export default DebounceTechnique
