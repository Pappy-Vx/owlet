import React from 'react'
import './navbar.css'
 import {FaTimes, FaBars} from 'react-icons/fa'
import { useState } from 'react';
import logo from '../../assets/logo.svg'
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [activeNav, setActiveNav] = useState('#about')
  return (
    
    <nav className='navbar'>
        <a href="/" className='nav-logo'><img src={logo} alt="" /></a>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick= {() => setIsMobile(false)}>
        <a href="#about" onClick={() =>setActiveNav('#about') } className={activeNav === "#about" ? 'about active' : 'about '}><li>About us</li></a>
        <a href="#founders" onClick={() =>setActiveNav('#founders') } className={activeNav === "#founders" ? 'founders active' : 'founders'}><li>Founders Story</li></a>
        <a href="#works" onClick={() =>setActiveNav('#works') } className={activeNav === "#works" ? 'works active' : 'works '}><li>How it Works</li></a>
        <a href="#terms" onClick={() =>setActiveNav('#terms') } className={activeNav === "#terms" ? 'terms active' : 'terms'}><li>Terms & Conditions</li></a>
        <a href="#faq" onClick={() =>setActiveNav('#faq') } className={activeNav === "#faq" ? 'faq active' : 'faq '}><li>FAQs</li></a>
        </ul>
        {/* <button className='sign'>Sign in</button>
        <button className='login'>Login</button>    */}
        <button className='mobile-menu-icons' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
             <FaTimes/> 
            
        ): (
             <FaBars />
            
        )
        }
        </button> 
    </nav>
  )
}

export default Navbar