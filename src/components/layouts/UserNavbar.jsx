// import React from 'react'
// import { Link } from 'react-router-dom'

// export const UserNavbar = () => {
//   return (
//     <nav className="app-header navbar navbar-expand bg-body">
      
//       <div className="container-fluid">
        
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a
//               className="nav-link"
//               data-lte-toggle="sidebar"
//               href="#"
//               role="button"
//             >
//               <i className="bi bi-list" />
//             </a>
//           </li>
//           <li className="nav-item d-none d-md-block">
//             <a href="#" className="nav-link">
//               Home
//             </a>
//           </li>
//           <li className="nav-item d-none d-md-block">
//             <a href="#" className="nav-link">
//               Contact
//             </a>
//           </li>
//         </ul>

//         <ul className="navbar-nav ms-auto">
          
//           <li className="nav-item">
//             <a
//               className="nav-link"
//               data-widget="navbar-search"
//               href="#"
//               role="button"
//             >
//               <i className="bi bi-search" />
//             </a>
//           </li>
          
        
//           <li className="nav-item dropdown">
//             <a className="nav-link" data-bs-toggle="dropdown" href="#">
//               <i className="bi bi-chat-text" />
//               <span className="navbar-badge badge text-bg-danger">3</span>
//             </a>
//             <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
//               <a href="#" className="dropdown-item">
//                 <div className="d-flex">
//                   <div className="flex-shrink-0">
//                     <img
//                       src="../../src/assets/img/user1-128x128.jpg"
//                       alt="User Avatar"
//                       className="img-size-50 rounded-circle me-3"
//                     />
//                   </div>
//                   <div className="flex-grow-1">
//                     <h3 className="dropdown-item-title">
//                       Brad Diesel
//                       <span className="float-end fs-7 text-danger">
//                         <i className="bi bi-star-fill" />
//                       </span>
//                     </h3>
//                     <p className="fs-7">Call me whenever you can...</p>
//                     <p className="fs-7 text-secondary">
//                       <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
//                     </p>
//                   </div>
//                 </div>
                
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
            
//                 <div className="d-flex">
//                   <div className="flex-shrink-0">
//                     <img
//                       src="../../src/assets/img/user8-128x128.jpg"
//                       alt="User Avatar"
//                       className="img-size-50 rounded-circle me-3"
//                     />
//                   </div>
//                   <div className="flex-grow-1">
//                     <h3 className="dropdown-item-title">
//                       John Pierce
//                       <span className="float-end fs-7 text-secondary">
//                         <i className="bi bi-star-fill" />
//                       </span>
//                     </h3>
//                     <p className="fs-7">I got your message bro</p>
//                     <p className="fs-7 text-secondary">
//                       <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
//                     </p>
//                   </div>
//                 </div>
            
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
                
//                 <div className="d-flex">
//                   <div className="flex-shrink-0">
//                     <img
//                       src="../../src/assets/img/user3-128x128.jpg"
//                       alt="User Avatar"
//                       className="img-size-50 rounded-circle me-3"
//                     />
//                   </div>
//                   <div className="flex-grow-1">
//                     <h3 className="dropdown-item-title">
//                       Nora Silvester
//                       <span className="float-end fs-7 text-warning">
//                         <i className="bi bi-star-fill" />
//                       </span>
//                     </h3>
//                     <p className="fs-7">The subject goes here</p>
//                     <p className="fs-7 text-secondary">
//                       <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
//                     </p>
//                   </div>
//                 </div>
                
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item dropdown-footer">
//                 See All Messages
//               </a>
//             </div>
//           </li>
        
//           <li className="nav-item dropdown">
//             <a className="nav-link" data-bs-toggle="dropdown" href="#">
//               <i className="bi bi-bell-fill" />
//               <span className="navbar-badge badge text-bg-warning">15</span>
//             </a>
//             <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
//               <span className="dropdown-item dropdown-header">
//                 15 Notifications
//               </span>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
//                 <i className="bi bi-envelope me-2" /> 4 new messages
//                 <span className="float-end text-secondary fs-7">3 mins</span>
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
//                 <i className="bi bi-people-fill me-2" /> 8 friend requests
//                 <span className="float-end text-secondary fs-7">12 hours</span>
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
//                 <i className="bi bi-file-earmark-fill me-2" /> 3 new reports
//                 <span className="float-end text-secondary fs-7">2 days</span>
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item dropdown-footer">
//                 {" "}
//                 See All Notifications{" "}
//               </a>
//             </div>
//           </li>
    
//           <li className="nav-item">
//             <a className="nav-link" href="#" data-lte-toggle="fullscreen">
//               <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen" />
//               <i
//                 data-lte-icon="minimize"
//                 className="bi bi-fullscreen-exit"
//                 style={{ display: "none" }}
//               />
//             </a>
//           </li>
    
//           <li className="nav-item dropdown user-menu">
//             <Link
//               to={"/profile"}
//               className="nav-link dropdown-toggle"
//               data-bs-toggle="dropdown"
//             >
//               <img
//                 src="/assets/img/avatar.png"
//                 className="user-image rounded-circle shadow"
//                 alt="User Image"
//               />
//               <span className="d-none d-md-inline">Baba Saheb Ambedkar</span>
//             </Link>
//             <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
    
//               <li className="user-header text-bg-primary">
//                 <img
//                   src="../../src/assets/img/user2-160x160.jpg"
//                   className="rounded-circle shadow"
//                   alt="User Image"
//                 />
//                 <p>
//                   Alexander Pierce - Web Developer
//                   <small>Member since Nov. 2023</small>
//                 </p>
//               </li>
            
//               <li className="user-body">
                  
//                 <div className="row">
//                   <div className="col-4 text-center">
//                     <a href="#">Followers</a>
//                   </div>
//                   <div className="col-4 text-center">
//                     <a href="#">Sales</a>
//                   </div>
//                   <div className="col-4 text-center">
//                     <a href="#">Friends</a>
//                   </div>
//                 </div>
                
//               </li>
              
//               <li className="user-footer">
//                 <a href="#" className="btn btn-default btn-flat">
//                   Profile
//                 </a>
//                 <a href="#" className="btn btn-default btn-flat float-end">
//                   Sign out
//                 </a>
//               </li>
        
//             </ul>
//           </li>
    
//         </ul>

//       </div>
    
//     </nav>

//   )
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Keep Link for proper routing

// Assuming the image is in the public folder
import userImage from '../../assets/img/user2-160x160.jpg'; // Correctly import the image

export const UserNavbar = () => {
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
              <span className="d-none d-md-inline">Baba Saheb Ambedkar</span>
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
