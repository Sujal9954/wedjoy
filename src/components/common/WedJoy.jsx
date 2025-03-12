import React from 'react';
import "../common/WedJoy.css"; 
import backgroundImage from "../../assets/pexels-carolina-basi-911290106-30892419.jpg"
export const WedJoy = () => {
    return (
        <div className="homepage">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <span className="logo">Joy</span>
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
                    </div>
                </div>
                <div className="navbar-right">
                    <button className="login-btn">Log in</button>
                    <button className="get-started-btn">Get Started</button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero" style={{ backgroundImage:`url(${backgroundImage})`}}>
                <div className="hero-content">
                    <h1>Plan your forever, better.</h1>
                    <p>
                        Design a personalized website,
                         create an all-in-one registry, and
                        experience wedding planning the way it should be.
                    </p>
                    <div className="hero-buttons">
                        <button className="get-started">Get Started</button>
                        <button className="find-event">Find an Event</button>
                    </div>
                </div>
            </header>
        </div>
    );
};
