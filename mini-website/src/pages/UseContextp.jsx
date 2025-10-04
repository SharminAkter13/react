import React, { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

// Create the context
const UserContext = createContext();

function UseContextp() {
  const [user, setUser] = useState("Linus");

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h3>Component 3</h3>
      <h4>{`Hello ${user} again!`}</h4>

      {/* Input to update user name */}
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter new name"
        style={{ marginTop: '10px', padding: '5px' }}
      />
    </>
  );
}

createRoot(document.getElementById('root')).render(<UseContextp />);

export default UseContextp;
