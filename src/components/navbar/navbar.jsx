import React, {useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'


const navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const Menu = ()=>{
    return  <>
      <p><a href='#home'>Home</a></p>
          <p><a href='#weazi'>About</a></p>
          <p><a href='#possibilty'>Contact</a></p>
          <p><a href='#features'>Blog</a></p>
          <p><a href='#blog'>Careers</a></p>
    </>
  }
  



  return (
    <div className='eazi__navbar section__padding'>
      <div className='eazi__navbar-links'>
        <div className='eazi__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='eazi__navbar-links_container'>
          <Menu/>
        </div>
        <div className='eazi__navbar-btn'>
          <button  type='button' className='cta__button'>Request invite</button>
        </div>
      </div>
      
      <div className='eazi__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine className='eazi__navbar-menu_icon' color="#3b3b3b" size={35} onClick={()=>setToggleMenu(false)}/>
        :<RiMenu3Line className='eazi__navbar-menu_icon' color="#3b3b3b" size={35} onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='eazi__navbar-menu_container scale-up-center'>
            <div className='eazi__navbar-menu_container-links'>
              <Menu/>
              <div className='eazi__navbar-btn'>
                  <button  type='button' className='cta__button'>Request invite</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default navbar