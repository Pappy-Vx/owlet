import React from 'react'
import './about.css'

import GIRL from '../../assets/girl.png'
import ENV from '../../assets/envelope.png'

const About = () => {
  return (
    <div className='about_wrapper'>
      <section id='about'  className='container about_container'>
      <h2>We're here to help</h2>

        <div className='about_detail'>
          <div className='about_detail-img'>
            <img src={GIRL} alt="" />

          </div>
          <div className='about_detail-content'>
            <h2>Our goal is to help you do 
            better with your brand and 
            sell more.</h2>
            <p>The world lives online now and just as we 
            have a market place in the real world, we 
            need a marketplace online. 

            Owletapp wants to bridge the gap 
            between competent and skilled technicians 
            and people looking for such skilled folks.

            Owletapp seeks to do this by bringing 
            sellers one step closer to buyers. 

            A marketplace where you can find 
            everything you need and so much more.

              It makes it easy for individuals to develop 
              a side hustle while continuing their day to 
              day lives. Students, parents, everyone can 
              use it to bring in a little income without 
              breaking their schedule. 

              We want to become the number marketplace
              for freelancers and for people looking to buy 
              anything online.</p>
            {/* <button className='about_btn'>Join Market</button> */}
          </div>
        </div>
      </section>
      <section className='container info_container'>
        <div className='info_box'>
          <div className='info_content'>
            <h2>Have you 
            downloaded
            our app yet?</h2>
            <p>Share your excitement 
            with us</p>
            <a href="mailto:helpdesk@theowlette.com">helpdesk@theowlette.com</a>
          </div>

        </div>
        <div className="info_img">
            <img src={ENV} alt="" />
          </div>
      </section>
      
    </div>
  )
}

export default About