import React from 'react'
import "../common/WedJoy.css"
import Banner from './Banner'
import { VenderMenu } from './VenderMenu'
import { useNavigate } from 'react-router-dom'

export const Features = () => {
    const navigate = useNavigate();

  return (
    <div >
        <br /><br />
       
           <section className="features">
            
{/*             
           <div className="feature hover:translate-y-[-10px] transition-all duration-500" onClick={() => navigate("/plan")}
>
                    <h2>Plan Your Dream Wedding, Stress-Free</h2>
                    <p>From setting your budget to sending invitations, get expert guidance, smart tools, and seamless guest management to make wedding planning effortless and joyful.</p>
                </div> */}
                <div className="feature hover:translate-y-[-10px] transition-all duration-500"onClick={() => navigate(("/register"),(scrollTo(0,0)))}>
                    <h2>All-in-One Registry</h2>
                    <p>Manage gifts and registry items with ease. Also, let us know your approximate guest count for better planning.</p>
                </div>
                {/* <div className="feature hover:translate-y-[-10px] transition-all duration-500"onClick={() => (navigate("/venue"),(scrollTo(0,0)))}>
                    <h2>Find Your Dream Wedding Venue</h2>
                    <p>Explore breathtaking venues that set the perfect stage for your special day, from elegant ballrooms to picturesque outdoor settings.</p>
            </div> */}
                <div className="feature hover:translate-y-[-10px] transition-all duration-500" onClick={() => (navigate("/packages"), scrollTo(0, 0))}>
    <h2>Exclusive Wedding Packages</h2>
    <p>Discover custom wedding packages designed to make your special day unforgettable, including decor, catering, and more.</p>
</div>

<div className="feature hover:translate-y-[-10px] transition-all duration-500" onClick={() => (navigate("/booking"), scrollTo(0, 0))}>
    <h2>Finalize Your Wedding Booking</h2>
    <p>Confirm your wedding details before proceeding to secure your booking.</p>
</div>

            </section>
            <div>
                <br />
                <VenderMenu />
                <Banner />
                <br />
            {/* Testimonials */}
            <br /> <br />
            <section className="testimonials">
                <h2>What Couples Are Saying</h2>
                <div className="testimonial">
                    <p>"WedJoy made our wedding planning so much easier!" - Emily & Mark</p>
                </div>
                <div className="testimonial">
                    <p>"Everything we needed in one place. Highly recommend!" - Sarah & James</p>
                </div>
                <div className="testimonial">
                    <p>"This was the best decision we made for our event!" - Alex & Jordan</p>
                    
                </div>
            </section>
            <br /><br />
            </div>

    </div>
  )
}
