import React from 'react'
import './footer.css'
import facebook from '../../assets/icon-facebook.svg'
import Logo from '../../assets/logo.svg'
import youtube from '../../assets/icon-youtube.svg'
import twitter from '../../assets/icon-twitter.svg'
import piInterest from '../../assets/icon-pinterest.svg'
import instagram from '../../assets/icon-instagram.svg'


const footer = () => {
  return (
    <div className='eazi__footer section__padding'>
      <div className='eazi__footer-container'>
        <div className='eazi__footer-container_item'>
          <img src={Logo} alt='logo' className='logo'/>
          <div className='eazi__footer-container_item-socials'>
            <a href='#'><img src={facebook} alt='facebook icon'/></a>
            <a href='#'><img src={youtube} alt='youtube icon'/></a>
            <a href='#'><img src={twitter} alt='twitter icon'/></a>
            <a href='#'><img src={piInterest} alt='pi interest icon'/></a>
            <a href='#'><img src={instagram} alt='instagram icon'/></a>
          </div>
        </div>
        <div className='eazi__footer-container_item'>
          <p className='p__text'>About Us</p>
          <p className='p__text'>Contact</p>
          <p className='p__text'>Blog</p>
        </div>
        <div className='eazi__footer-container_item'>
          <p className='p__text'>Career</p>
          <p className='p__text'>Support</p>
          <p className='p__text'>Privacy Policy</p>
        </div>

      </div>
      <div className='eazi__footer-cta'>
      <p className='cta__button'>Request invite</p>
        <p className='p__text'>  © Easybank. All Rights Reserved</p>
      </div>

    </div>
  )
}

export default footer