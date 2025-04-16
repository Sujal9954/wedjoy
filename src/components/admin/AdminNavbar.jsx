
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Keep Link for proper routing

// Assuming the image is in the public folder
import userImage from '../../assets/img/user2-160x160.jpg'; // Correctly import the image

export const AdminNavbar = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevent default behavior (which might cause a redirect)
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="app-header navbar navbar-expand bg-body">
      <div className="container-fluid">
        <ul className="navbar-nav">
          {/* Other navbar items */}
        </ul>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown user-menu">
            {/* Clicking on the user image toggles the dropdown */}
            <Link
              to="/profile" // This keeps the navigation to the profile page
              className="nav-link dropdown-toggle"
              onClick={toggleDropdown} // Toggle dropdown visibility
            >
              <img
                src="/assets/img/avatar.png" // Assuming avatar image in public folder
                className="user-image rounded-circle shadow"
                alt="User Image"
              />
              <span className="d-none d-md-inline">Baba Saheb</span>
            </Link>

            {/* Conditional rendering of the dropdown */}
            {dropdownOpen && (
              <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <li className="user-header text-bg-primary">
                  {/* Corrected Image Path */}
                  <img
                    src={userImage} // Correctly imported image
                    className="rounded-circle shadow"
                    alt="User Image"
                  />
                  <p>
                    Alexander Pierce - Web Developer
                    <small>Member since Nov. 2023</small>
                  </p>
                </li>

                <li className="user-body">
                  <div className="row">
                    <div className="col-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div className="col-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div className="col-4 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </div>
                </li>

                {/* Profile and Sign out buttons */}
                <li className="user-footer">
                  <Link
                    to="/profile" // Clicking this should navigate to the profile page
                    className="btn btn-default btn-flat"
                  >
                    Profile
                  </Link>
                  <a href="#" className="btn btn-default btn-flat float-end">
                    Sign out
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
