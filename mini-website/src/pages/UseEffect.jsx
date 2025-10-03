import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function UseEffect() {
  const[count, setCount] = useState(0);


  useEffect(() =>{
    setTimeout(() => {
        setCount((count) => count + 1);
    },1000);
  },[]);
  

  

  return <h1>I've rendered {count} times !!!</h1>
}

  createRoot(document.getElementById("root")).render(
    <useEffect/>
);

export default UseEffect;
