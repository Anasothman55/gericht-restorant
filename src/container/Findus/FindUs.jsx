import React from 'react';
import { SubHeading } from '../../components';
import { images,data } from '../../constants';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant mycustomh1' style={{marginBottom:"4rem"}}>Find Us</h1>

      <div className='mycustom'>
        <p className='p__opensans' style={{color:"#AAAAAA"}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style={{color:"#DCCA87",margin:"2rem 0 1rem 0"}}>Opening Hours</p>
        <p className='p__opensans' style={{marginBottom:"1rem"}}>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
        <button className='custom__button' style={{marginTop:"4rem"}}>Visit Us</button>
      </div>
    </div>
    
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="contact" />
    </div>
  </div>
);

export default FindUs;
