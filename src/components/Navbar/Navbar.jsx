import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';
import images from '../../constants/images'

const Navbar = () => {
  const [toggleMenu,setRoggleMenu] = useState(false)
  
  function dl(){
    setRoggleMenu(false)
  }
  return (
    <nav className='app__navbar unselectable'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="LOGO" />
      </div>
      <ul className='app__navbar-links'>
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div/>
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} cursor="pointer" onClick={()=>setRoggleMenu(true)}/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={()=>setRoggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links' onClick={()=>{dl()}}>
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#menu">Menu</a></li>
              <li className="p__opensans"><a href="#awards">Awards</a></li>
              <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar;
