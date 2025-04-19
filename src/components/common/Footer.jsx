// Footer.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/img/wedjoy_logo.png"
// import "../common/WedJoy.css"; 

export const Footer = () => {
    const navigate = useNavigate()

    return (
       <div>
        
              <footer className="bg-gray-900 text-white text-sm">
                <div className=" mx-auto px-6 py-8">
                  {/* Top Section */}
                  <div className="flex flex-wrap justify-between items-center border-b border-gray-700 pb-6">
                    <div className="space-x-6">
                      {/* <a href="#" className="text-white text-lg no-underline hover:text-gray-400">WEDJOY</a> */}
                      <img onClick={()=>{(navigate("/"),scrollTo(0,0))}} className="h-10 w-30 hover:scale-105 transition-all" src={logo} alt="" />
                      
                    </div>
          
                    <div className="space-x-6">
                      <button onClick={()=>{navigate("/login")}} className="bg-white text-gray-900 font-semibold px-4 py-2 rounded hover:!bg-gray-300">Get Started</button>
                      <Link to={"/login"} className="text-white hover:text-gray-400">Log in</Link>
                    </div>
                  </div>
          
                  {/* Middle Links */}
                  <div className="flex flex-wrap justify-center gap-6 text-gray-400 mt-6">
                    <a href="#" className="text-white text-lg no-underline hover:!text-gray-300">Shipping</a>
                    <a href="#" className="text-white text-lg no-underline hover:!text-gray-300">Returns</a>
                    <a href="#" className="text-white text-lg no-underline hover:!text-gray-300">Newsroom</a>
                    <a href="#" className="text-white text-lg no-underline hover:!text-gray-300">Careers</a>
                    <a href="#" className="text-white text-lg no-underline hover:!text-gray-300">About Joy</a>
                    <a href="#" className="text-white text-lg no-underline hover:!text-gray-300">Contact Us</a>
                  </div>

                  {/* Social Media & Branding */}
                  <div className="flex justify-center items-center gap-6 mt-6">
                    <a href="#"><i className="fab fa-instagram text-xl"></i></a>
                    <a href="#"><i className="fab fa-pinterest text-xl"></i></a>
                    <a href="#"><i className="fab fa-facebook text-xl"></i></a>
                    <a href="#"><i className="fab fa-twitter text-xl"></i></a>
                    <span className="text-gray-400">wedjoy</span>
                    <span className="font-serif text-3xl">Joy</span>
                  </div>
          
                  {/* Bottom Section */}
                  <div className="text-center text-gray-500 text-xs mt-6 border-t border-gray-700 pt-4">
                    <p>© 2025 wedJoy. All rights reserved.</p>
                    <div className="flex justify-center gap-4 mt-2">
                      <a href="#" className="hover:text-gray-300">Terms & Privacy</a>
                      <a href="#" className="hover:text-gray-300">California Privacy Notice</a>
                      <a href="#" className="hover:text-gray-300">Do not share my personal information</a>
                    </div>
                  </div>
                </div>
              </footer>
              </div>
    );
};
