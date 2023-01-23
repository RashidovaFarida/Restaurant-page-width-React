import React from 'react';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import PlayIcon from '../img/home/video-play.svg'
import { useState } from 'react';
import Modal from '../components/PlayVideo/Modal';
import Testimonials from '../components/slides/TestiMonials';
import RezervForm from '../components/RezervForm';

 const Rezervation = () => {
  // Play Button popUp
 const [modal, setModal]= useState(false);
 
  return (
    <section className='rezervation'>
      <div className='introRezerv d-flex align-items-center justify-content-evenly flex-column '>
      <div>
        <h2 className="">{t('nav.7')}</h2>
        <div className='d-flex  '>
          <Link to='/' className="color-main2">{t(`aboutFirst.2`)} &nbsp;  </Link>
          <p> / {t('nav.7')}</p>
        </div>
      </div>
    </div>
    <div className='rezerv'>
    <div className='testimonials-area  reserve-area '>
      <div className="container">
        <div className="row">
          <div data-aos="fade-up" className=' testimonialsPart2 col-sm-12 col-md-12 col-xl-6 col-xll-6  '>
            <div className='testimonial-bg-video-icon d-flex align-items-center justify-content-center'>
              <button onClick={()=> setModal(true)} className=' playIconBg border-0 d-flex ps-2 align-items-center justify-content-center'>
              <img src={PlayIcon} className='playIcon' alt="" />
              </button>
              <div className='playIconAnimation'> </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-12 col-xl-6 col-xll-6'>
          <RezervForm />
          </div>
        </div>
      </div>
      <Modal   open={modal} onClose={()=> setModal( false) } />
    </div>
    </div>
    </section>
  )
}
export default Rezervation