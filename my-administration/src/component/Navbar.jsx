import React from 'react';

const Navbar = () => {
    return (
           <div id="app">
  <nav id="navbar-main" className="navbar is-fixed-top">
    <div className="navbar-brand">
      <Link to="" className="navbar-item mobile-aside-button">
        <span className="icon"><i className="mdi mdi-forwardburger mdi-24px" /></span>
      </Link>
      <div className="navbar-item">
        <div className="control"><input placeholder="Search everywhere..." className="input" /></div>
      </div>
    </div>
    <div className="navbar-brand is-right">
      <Link to="" className="navbar-item --jb-navbar-menu-toggle" data-target="navbar-menu">
        <span className="icon"><i className="mdi mdi-dots-vertical mdi-24px" /></span>
      </Link>
    </div>
    <div className="navbar-menu" id="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item dropdown has-divider">
          <a className="navbar-link">
            <span className="icon"><i className="mdi mdi-menu" /></span>
            <span>Sample Menu</span>
            <span className="icon">
              <i className="mdi mdi-chevron-down" />
            </span>
          </a>
          <div className="navbar-dropdown">
            <a href="profile.html" className="navbar-item">
              <span className="icon"><i className="mdi mdi-account" /></span>
              <span>My Profile</span>
            </a>
            <a className="navbar-item">
              <span className="icon"><i className="mdi mdi-settings" /></span>
              <span>Settings</span>
            </a>
            <a className="navbar-item">
              <span className="icon"><i className="mdi mdi-email" /></span>
              <span>Messages</span>
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item">
              <span className="icon"><i className="mdi mdi-logout" /></span>
              <span>Log Out</span>
            </a>
          </div>
        </div>
        <div className="navbar-item dropdown has-divider has-user-avatar">
          <Link to="" className="navbar-link">
            <div className="user-avatar">
              <img src="https://avatars.dicebear.com/v2/initials/john-doe.svg" alt="John Doe" className="rounded-full" />
            </div>
            <div className="is-user-name"><span>John Doe</span></div>
            <span className="icon"><i className="mdi mdi-chevron-down" /></span>
          </Link>
          <div className="navbar-dropdown">
            <Link to="" href="profile.html" className="navbar-item">
              <span className="icon"><i className="mdi mdi-account" /></span>
              <span>My Profile</span>
            </Link>
            <Link to="" className="navbar-item">
              <span className="icon"><i className="mdi mdi-settings" /></span>
              <span>Settings</span>
            </Link>
            <Link to="" className="navbar-item">
              <span className="icon"><i className="mdi mdi-email" /></span>
              <span>Messages</span>
            </Link>
            <hr className="navbar-divider" />
            <Link to="" className="navbar-item">
              <span className="icon"><i className="mdi mdi-logout" /></span>
              <span>Log Out</span>
            </Link>
          </div>
        </div>
        <Link to="" href="https://justboil.me/tailwind-admin-templates" className="navbar-item has-divider desktop-icon-only">
          <span className="icon"><i className="mdi mdi-help-circle-outline" /></span>
          <span>About</span>
        </Link>
        <Link to="" href="https://github.com/justboil/admin-one-tailwind" className="navbar-item has-divider desktop-icon-only">
          <span className="icon"><i className="mdi mdi-github-circle" /></span>
          <span>GitHub</span>
        </Link>
        <Link to="" title="Log out" className="navbar-item desktop-icon-only">
          <span className="icon"><i className="mdi mdi-logout" /></span>
          <span>Log out</span>
        </Link>
      </div>
    </div>
  </nav>
</div>

    );
};

export default Navbar;