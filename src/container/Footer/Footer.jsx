import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headText'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>

      <div className='app__footer-links_image'>
        <img src={images.gericht} alt="gericht" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="spoon" style={{ margin:"1rem 0" }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headText'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am -12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00am -11:00 pm</p>
      </div>

    </div>
    
    <dir className="app__footer-copyRight">
      <p className='p__opensans' style={{color:"#AAAAAA"}}>2021 Gerícht. All Rights reserved.</p>
    </dir>
  </div>

);

export default Footer;
