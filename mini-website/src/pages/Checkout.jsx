import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Checkout() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <Checkout />
);
export default Checkout;