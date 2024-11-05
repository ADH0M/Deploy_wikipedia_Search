import { forwardRef, useRef } from 'react';

const MyInput = forwardRef(({ type,value ,onChange}, ref) => {
    console.log(value,onChange);
    
  return <input type={`${type}`} ref={ref} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput value='all data' type='password' onChange='no change'  ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
