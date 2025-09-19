import React, { useState } from "react";
import TableData from "./TableData";
import Forms from "./Forms";

const App = () => {
  const [rows, setRows] = useState([]);
  const handleAddRow = (newRow) => {
    setRows([...rows, newRow]);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Please Fill-up the Form</h2>
      <Forms onAdd={handleAddRow} />

      <h2 className="mt-4">Forms Data</h2>
      <TableData rows={rows} />
    </div>
  );
};

export default App;
