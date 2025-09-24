import React from 'react';
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-primary elevation-4">
          {/* Brand Logo */}
          <a href="../../index3.html" className="brand-link">
            <img
              src="admin/dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-bold">Talentstream</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="admin/dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block font-weight-bold">
                  Talentstream
                </a>
              </div>
            </div>
            
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                <li className="nav-item">
                  <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th-large" />
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                
                </li>
                
               
                

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-user" />

                    <p>
                      User
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/add-user" className="nav-link">
                        <i className="nav-icon fas fa-user" />

                        <p>Create User</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/manage-user" className="nav-link">
                       <i className="nav-icon fas fa-user-cog" />
                        <p>Manage User</p>
                      </Link>
                    </li>
                  
                  </ul>
                </li>
                 <li className="nav-item">
                  <a href="#" className="nav-link">
                   <i className="nav-icon fas fa-list" />
                    <p>
                      Category
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/add-cat" className="nav-link">
                        <i className="nav-icon fas fa-tag" />
                        <p>Create Category</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/manage-cat" className="nav-link">
                        <i className="nav-icon fas fa-folder-plus" />
                        <p>Manage Category</p>
                      </Link>
                    </li>


                  
                  </ul>
                </li>
                  <li className="nav-item">
                  <a href="#" className="nav-link">
                   <i className="nav-icon fas fa-list" />
                    <p>
                      Profile
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/view-profile" className="nav-link">
                        <i className="nav-icon fas fa-tag" />
                        <p>View Profile</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/edit-profile" className="nav-link">
                        <i className="nav-icon fas fa-folder-plus" />
                        <p>Edit Profile</p>
                      </Link>
                    </li>


                  
                  </ul>
                </li>
              
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
       </div>
    );
};

export default Sidebar;