import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Checkout() {
  const [color, setColor] = useState("red");
  const [chkout, setchkout] =useState("Checkout");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <h1>This is a {chkout} Page</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
       
       <button
        type='button'
        onClick={() => setchkout("Checkout details")} >
        
       </button>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <Checkout />
);
export default Checkout;