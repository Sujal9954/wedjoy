import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserSidebar } from './components/layouts/UserSidebar'
// import './App.css'
import'./assets/adminlte.css'
import './assets/adminlte.min.css'

import { Route, Routes, useLocation } from 'react-router-dom'
import { Login } from './components/common/Login'
import { Signup } from './components/common/Signup'
import { UserProfilke } from './components/user/UserProfilke'
import { UserForm } from './components/user/UserForm'
import axios from 'axios'
import { WedJoy } from './components/common/WedJoy'

function App() {
  
  axios.defaults.baseURL = "http://localhost:3000"

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);


  return (
    <div>
       {/* <div className={location.pathname === "/login" || location.pathname === "/signup" ? "" : "app-wrapper"}>    */}
      <Routes>
            <Route path="/login" element ={<Login/>}></Route>
            <Route path="/" element ={<WedJoy/>}></Route>
            <Route path="/signup" element ={<Signup/>}></Route>
            <Route path="/user" element = {<UserSidebar/>}>
              <Route path="profile" element ={<UserProfilke/>}></Route>
              <Route path="form" element ={<UserForm/>}></Route>
            

            </Route>
          </Routes>
      </div>
    
  )
}

export default App
