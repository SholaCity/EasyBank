import React from 'react'
import './header.css'
import banner from '../../assets/image-mockups.png';


const header = () => {
  return (
    <div className='eazi__header section__padding'>
      <div className='eazi__header-text'>
        <h1>  Next generation digital banking</h1>
        <p className='p__text'> Take your financial life online. Your Easybank account will be a one-stop-shop 
          for spending, saving, budgeting, investing, and much more.</p>
        <button className='cta__button'>Request invite</button>
      </div>
      <img src={banner} alt='banner image' className='eazi__header-banner_image'/>

    </div>
  )
}

export default header