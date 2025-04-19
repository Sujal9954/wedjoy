import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../common/WedJoy.css"
import logo from "../../assets/img/wedjoy_logo.png"
import { Bounce, toast, ToastContainer } from 'react-toastify'


export const Navbar = () => {
    const logoutSuccess =()=>toast("Logout successfull")
    const logoutUser=()=>{
        localStorage.removeItem("id");
        localStorage.removeItem("role");
        localStorage.removeItem("name");
        sessionStorage.clear();
        logoutSuccess()
        navigate('/')

    
      }
    const navigate = useNavigate()

  return (
    <>
    <ToastContainer
            position="top-center"
            autoClose={600}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
            />
     <nav className="navbar select-none cursor-pointer">
                    <div  className="navbar-left flex items-center space-x-5">
                        <img onClick={()=>{(navigate("/"),scrollTo(0,0))}} className="h-10 w-30 hover:scale-105 transition-all" src={logo} alt="" />
                        {/* <span className="logo">Wed Joy</span> */}
                        <div className="nav-links">
                            <div className="dropdown"onClick={() => navigate('/plan')}>
                                <button className="dropbtn">Plan & Invite </button>
                            </div>
                            <div className="dropdown"onClick={() => navigate('/register')}>
                                <button className="dropbtn">Registry </button>
                            </div>
                            <div className="dropdown"onClick={() => navigate('/contact')}>
                                <button className="dropbtn">Contact Us</button>
                            </div>
                           
                        </div>
                    </div>
                    <div className="navbar-right flex items-center gap-4">
  <Link to="/login">
    <button className="login-btn">Log in</button>
  </Link>
  <button className="get-started-btn">Get Started</button>
  <div className='flex items-center gap-2 group relative'>
    <div className='border-2 rounded-full w-9 h-9 flex items-center justify-center bg-gray-200 select-none cursor-pointer'>
      👤
    </div>
    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
      <div className='min-w-40 bg-black text-white rounded flex flex-col gap-4 p-3'>
        <p onClick={() => navigate('profile')} className='hover:text-gray-400 select-none cursor-pointer hr-15'>My Profile</p>
        {/* <p onClick={() => navigate('mybooking')} className='hover:text-gray-300 select-none cursor-pointer'>My Booking</p> */}
       <p onClick={logoutUser} className='text-white hover:text-gray-400 select-none cursor-pointer hue-rotate-15'>Logout</p>
      </div>
    </div>
  </div>
</div>


                </nav>
    
    </>
  )
}
