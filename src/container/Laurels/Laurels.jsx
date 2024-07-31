import React from 'react';
import { SubHeading } from '../../components';
import { images,data } from '../../constants';

import './Laurels.css';

const AwardCard = ({award:{imgUrl,title,subtitle}})=>{
  return (
    <div className="app__laurels-awards_card">
      <img src={imgUrl} alt="images" />
      <div className='app__laurels-awards_card-content'>
        <p className='p__cormorant' style={{color:"#DCCA87"}}>{title}</p>
        <p className='p__opensans' style={{color:"#AAAAAA"}}>{subtitle}</p>
      </div>
    </div>
  )
}

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title={"Awards & recognition"}/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>

      <div className='app__laurels-awards'>
        {data.awards.map((award)=><AwardCard award={award} key={award.title}/>)}
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="Laurels" />
    </div>
  </div>
);

export default Laurels;
