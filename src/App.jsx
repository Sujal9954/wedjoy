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
import { AdminSidebar } from './components/admin/AdminSidebar'
import { Footer } from './components/common/Footer'
import { Header } from './components/common/Header'
import { Navbar } from './components/common/Navbar'
import { Features } from './components/common/Features'
import { VenderMenu } from './components/common/VenderMenu'
import Banner from './components/common/Banner'
import { Vendors } from './components/common/Vendors'
import { ContactUs } from './components/common/ContactUs'
import Plan from './components/common/Plan'
import Register from './components/common/Register'
import PrivateRoutes from './components/hooks/PrivateRoutes'
import Venue from './components/common/Venue'


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
      {/* <body className='layout-fixed sidebar-expand-lg bg-body-tertiary app-loaded sidebar-open'> */}
      {/* <div className="app-wrapper"> */}
      <Navbar/>
      <Routes>
            <Route path="/login" element ={<Login/>}></Route>
            <Route path="/" element ={<WedJoy/>}></Route>
            <Route path="/signup" element ={<Signup/>}></Route>
            <Route path="/user" element = {<UserSidebar/>}></Route>
            <Route path="/profile" element ={<UserProfilke/>}></Route>
            <Route path="/form" element ={<UserForm/>}></Route>
            <Route path='/admin' element={<AdminSidebar/>}></Route>
            <Route path='/header' element={<Header />} />
            <Route path='/features' element={<Features />} />
            <Route path='/vendormenu' element={<VenderMenu />} />
            <Route path='/banner' element={<Banner />} />
            <Route path='/vendors' element={<Vendors />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/venue' element={<Venue />} />
            
            <Route element={<PrivateRoutes></PrivateRoutes>}>

            <Route path='/register' element={<Register/>} />
            <Route path='/plan' element={<Plan/>} />
            </Route>

      </Routes>
        <Footer />
   </div>
  //  </body>
      // </div>
    
  )
}

export default App
