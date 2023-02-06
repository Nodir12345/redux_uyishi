import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'


export const Header=() =>{
  return ( <>
  <header>
    <div className="container">
      <div className="header">
      <Link to="/" className='header_logo'><img className='header_img_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Facebook_Home_logo.svg/1024px-Facebook_Home_logo.svg.png" alt="j" /></Link>
        <ul className='header_block'>
        
        <li className='header_item'>Women</li>
        <li className='header_item'>Kids</li>
        <li className='header_item'>Customize</li>
        <li className='header_item'>Customize</li>
        
        </ul>
        <div className='header_box_img'>
        
        </div>
      </div>
    </div>
  </header>
  </>
    
  )
}
 