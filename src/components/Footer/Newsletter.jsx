import React from 'react';

import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newaLetter'>
    <div className='app__newaLetter-heading'>
      <SubHeading title="Newsletter"/>
      <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='app__newaLetter-input flex__center'>
      <input type="email" placeholder='Enter Email Address' className='p__cormorant'/>
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
