import React from 'react'
import './footer.css'
import logo2 from '../../assets/logo2.png'
import { FaAppStoreIos, FaFacebook, FaGooglePlay, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
    <div className="footer_content">
      <div className="info">
        {/* <h4>Created By</h4> */}
      <a href="/" className='nav-logo'><img src={logo2} alt="" /></a>
      <div className='hero_download'>
        <article className='download_box'>
          <a href="https://apps.apple.com/ng/app/the-owlet/id1578904643">
          <FaAppStoreIos className='download_icon' />
          <div>
          <small>Donwload on the</small>
          <p>App Store</p>
          </div>
          </a>
        </article>
        <article className='download_box' >
          <a href="https://play.google.com/store/apps/details?id=com.owlet.app">
          <FaGooglePlay className='download_icon' />
          <div>
          <small>Get it on</small>
          <p>Google Play</p>
          </div>

          </a>
        </article>
        </div>
      </div>
    <div className="footer_socials">
      <h3 className='comm'>Community</h3>
      <div className='footer_link'>
      <a href="https://twitter.com/owletapp" target='_blank' rel='noreferrer'><FaTwitter className='social_link'/></a>
    <a href="https://instagram.com/owletapp" target='_blank' rel='noreferrer'><FaInstagram className='social_link'/></a>
    <a href="https://www.youtube.com/channel/UCWimeDcakI6eHAxR3lLwuuA" target='_blank' rel='noreferrer'><FaYoutube className='social_link'/></a>
    <a href="https://web.facebook.com/profile.php?id=100082913933205" target='_blank' rel='noreferrer'><FaFacebook className='social_link'/></a>
      </div>
    <h3 className='cont'>Contact Us</h3>
    <p>Gill’s Mall, Okpara Ave, 
    400102, Enugu</p>
    <a href="mailto:helpdesk@theowlette.com">helpdesk@theowlette.com</a>
  </div>
    </div>

    <div className="footer__copyright">
      <small>Copyright &copy; Owletapp 2023. All rights reserved </small>
    </div>
  </footer>
  )
}

export default Footer