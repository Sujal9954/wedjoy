import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../common/WedJoy.css"
import logo from "../../assets/img/wedjoy_logo.png"

export const Navbar = () => {

    const navigate = useNavigate()

  return (
    <>
     <nav className="navbar">
                    <div  className="navbar-left flex items-center space-x-5">
                        <img onClick={()=>{(navigate("/"),scrollTo(0,0))}} className="h-10 w-30 hover:scale-105 transition-all" src={logo} alt="" />
                        {/* <span className="logo">Wed Joy</span> */}
                        <div className="nav-links">
                            <div className="dropdown">
                                <button className="dropbtn">Plan & Invite ▾</button>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn">Registry ▾</button>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn">Expert Advice ▾</button>
                            </div>
                            <div className="dropdown ">
                                <button className="dropbtn "><Link to={'/contact'}>Contact Us</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-right">
                        <Link to="/login"><button className="login-btn">Log in</button></Link>
                        
                        <button className="get-started-btn ">Get Started</button>
                    </div>
                </nav>
    
    </>
  )
}
