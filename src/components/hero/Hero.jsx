import React from 'react'
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa'
import './hero.css'
import ellipse from '../../assets/ellipse.png'
import hero from '../../assets/hero.svg'

const Hero = () => {
  return (
    <section id='hero' className=' hero_container'>
      <div className='hero_content'>
        <h1>Africa's First {' '}
        <span>Social Media </span> Marketplace</h1>
        <p>OwletApp is  finding new ways to connect
        individuals, businesses, and brands all 
        across Africa.</p>
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
      <div className='hero_images'>
        <div className="ellipse">
        <img src={ellipse} alt="" /> 
        </div>

      </div>
    </section>
  )
}

export default Hero