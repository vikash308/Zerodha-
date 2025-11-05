import React, { useState } from "react";
import { Link } from "react-router-dom";


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const name = localStorage.getItem("name") || "User";
  let url = process.env.FRONTEND_URL;

  const handleMenuClick = (index) => setSelectedMenu(index);
  const handleProfileClick = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.href = `${url}/login`;
  };

  const menuClass = "nav-link";
  const activeMenuClass = "nav-link active fw-bold text-primary";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 shadow-sm">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src="logo.png" alt="logo" width="40" className="me-2" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center links">
          <li className="nav-item">
            <Link
              to="/"
              className={selectedMenu === 0 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(0)}
            >
              Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/orders"
              className={selectedMenu === 1 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(1)}
            >
              Orders
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/holdings"
              className={selectedMenu === 2 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(2)}
            >
              Holdings
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/positions"
              className={selectedMenu === 3 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(3)}
            >
              Positions
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/funds"
              className={selectedMenu === 4 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(4)}
            >
              Funds
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/apps"
              className={selectedMenu === 5 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(5)}
            >
              Apps
            </Link>
          </li>
        </ul>

        {/* Profile Dropdown */}
        <div className="dropdown ">
          <button
            className="btn btn-secondary d-flex align-items-center logout-btn"
            onClick={handleProfileClick}
          >
            <div
              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2 "
              style={{ width: "32px", height: "32px" }}
            >
              {name.charAt(0).toUpperCase()}
            </div>
            <span>{name}</span>
          </button>

          {isProfileDropdownOpen && (
            <ul
              className="dropdown-menu dropdown-menu-end show mt-2"
              style={{ position: "absolute", right: 0 }}
            >
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/settings">
                  Settings
                </Link>
              </li>
              <li>
                <button className="dropdown-item text-danger" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
