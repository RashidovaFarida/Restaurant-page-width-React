import React from 'react';
// import AOS from 'aos';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import 'aos/dist/aos.css';
import { useState } from 'react';
import { t } from 'i18next';



const OdmeraArea = () => {
    //ConuntUp
  const [counterOn , setCounterOn]= useState(false);
  return (
    
   <section className=' d-flex align-items-center justify-content-center w-100 odometer-area'>
    <div className=' odometer-2  w-100  d-flex align-items-center justify-content-center'>
      <div className="container">
        <div className="row">
          <div className='col-sm-12 col-md-6 col-xl-3 col-xxl-2 color-main2'>
           <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
           <h1 className='ps-2'>
            {counterOn && <CountUp start={100} end={287} duration={1} delay={0}/>}+</h1>
           <p>{t(`odmeraArea.1`)}</p>
           </ScrollTrigger>
          </div>
          <div className='col-sm-12 col-md-6 col-xl-3 col-xxl-3 color-main2'>
          <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <h1 className='ps-2'>
          {counterOn && <CountUp start={1} end={47} duration={1} delay={0}/>} +</h1>
          <p>{t(`odmeraArea.2`)}</p> 
          </ScrollTrigger> 
          </div>
          <div className='col-sm-12 col-md-6 col-xl-3 col-xxl-3 color-main2'>
          <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <h1 className='ps-2'>
          {counterOn && <CountUp start={1} end={70} duration={1} delay={0}/>} +</h1>
            <p>{t(`odmeraArea.3`)}</p>
            </ScrollTrigger>
          </div>
          <div className='col-sm-12 col-md-6 col-xl-3 col-xxl-3 color-main2'>
          <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <h1 className='ps-2'>
          {counterOn && <CountUp start={50} end={130} duration={1} delay={0}/>} +</h1>
            <p className=''>{t(`odmeraArea.4`)}</p>
            </ScrollTrigger>
          </div>
    
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default OdmeraArea
