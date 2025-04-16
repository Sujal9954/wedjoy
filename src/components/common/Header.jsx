import React from 'react'
import "../common/WedJoy.css"; 
import backgroundImage from "../../assets/pexels-carolina-basi-911290106-30892419.jpg";


export const Header = () => {
  return (
    <div>
        <header className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-content">
                    <h1>Plan your forever, better.</h1>
                    <p>
                        Design a personalized website, create an all-in-one registry, and
                        experience wedding planning the way it should be.
                    </p>
                    <div className="hero-buttons">
                        <button href="#vendors" className="get-started">Get Started</button>
                        <button className="find-event  ">Find an Event</button>
                    </div>
                </div>
            </header>
    </div>
  )
}
