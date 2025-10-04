import React, { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

// Create the context
const UserContext = createContext();

function UseContextp() {
  const [user, setUser] = useState("Linus");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h2>Component 2</h2>
      <Component3 />
    </>
  );
}

function Component3() {
  // Access context value here
  const user = useContext(UserContext);

  return (
    <>
      <h3>Component 3</h3>
      <h4>{`Hello ${user} again!`}</h4>
    </>
  );
}

// Render it
createRoot(document.getElementById('root')).render(<UseContextp />);

export default UseContextp;
