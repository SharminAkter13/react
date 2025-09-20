import React, { useState } from "react";
import TableData from "./TableData";
import Forms from "./Forms";
import InternalCss from "./InternalCss";

const App = () => {
  const [rows, setRows] = useState([]);
  const handleAddRow = (newRow) => {
    setRows([...rows, newRow]);
  };

  return (
    <div className="container mt-4">
      <div>
      <h2 className="mb-3">Please Fill-up the Form</h2>
      <Forms onAdd={handleAddRow} />
      </div>
      <div>
      <h2 className="mt-4">Forms Data</h2>
      <TableData rows={rows} />
      </div>
      <InternalCss/>
      
    </div>
  );
};

export default App;
