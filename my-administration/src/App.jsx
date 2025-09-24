import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from './pages/Master';
import CreateUser from './pages/user/CreateUser';
import ManageUser from './pages/user/ManageUser';
import CreateCategory from './pages/category/CreateCategory';
import ManageCategory from './pages/category/ManageCategory';
const App = () => {
  return (
    <div>
      <BrowserRouter>
 
        <Routes>
          <Route path="/" element={<Master />} />
          <Route path="/add-user" element={<CreateUser/>} />
          <Route path="/manage-user" element={<ManageUser />} />
          <Route path="/add-cat" element={<CreateCategory />} />
          <Route path="/manage-cat" element={<ManageCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;