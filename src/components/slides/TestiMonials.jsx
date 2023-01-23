import React from 'react'
import Slider from "react-slick";
import HomeSec from '../../data/homeData';
import testiMonials from '../../img/home/testimonials-shape.webp'
import "slick-carousel/slick/slick.css"; 
import { t } from "i18next";

import "slick-carousel/slick/slick-theme.css";
const Testimonials=( {details})=> {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='mt-5'>
          <div>
        <Slider {...settings}>
           {HomeSec[8].map((fd,i)=>(
             <div key={i} className=' cardSliderTesti d-flex flex-column pt-5 ps-3 justify-content-evenly'>
             <div className='d-flex mt-3 justify-content-evenly w-50 '>
                 <img className='testiImg' src={fd.img} alt="" />
                 <div className='ps-2 '>
                     <h5 className='color-w'>{fd.name}</h5>
                     <p className='color-g'>{fd.work}</p>
                 </div>
             </div>
                 <img className='testiMonials2 '  src={testiMonials} alt="" />
             <p className='color-w pt-3 '>
             {t(`testimonialsDetails.${i+1}`)}
             </p>
         </div>
           ))}
        </Slider>
          </div>
      </div>
    );
  }

export default Testimonials