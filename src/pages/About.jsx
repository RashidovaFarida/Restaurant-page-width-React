import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import banner from '../img/about/page-banner-shape-1.webp'
import reserve1 from '../img/home/reserve-shape-2.png';
import reserve2 from '../img/home/reserve-shape-3.png';
import reserve3 from '../img/home/reserve-shape-4.png';
import reserve4 from '../img/home/reserve-shape-5.png';
import homeSec3Img1 from '../img/home/about-img-1.png';
import HomeSec from '../data/homeData';
import { ourService } from '../data/aboutData';
import {SilderTeam}    from '../data/aboutData'
import SliderPersonal from '../components/slides/SliderPersonal';
import  ShapePersonal from '../img/home/restaurant-img-shape-1.webp';
import OdmeraArea from '../components/OdmeraArea';
import locationUs from '../img/home/location-map-img.webp'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [name , setName ]=useState('')
  const [nameError , setNameError ]=useState('')

  const [phone , setPhone ]=useState('')
  const [phoneError , setPhoneError ]=useState('')


  const [date , setDate] =useState('')
  const [dateError, setDateError] =useState('')

  const [person , setPerson] =useState('')
  const [personError, setPersonError] =useState('')

  const [clock , setClock] =useState('')
  const [clockError, setClockError] =useState('')




  

  const handleNameChange=(e)=>{
    
    setNameError('')
    setName(e.target.value)
  }

  const handlePhoneChange=(e)=>{
    
    setPhoneError('')
    setPhone(e.target.value)
  }
  const handlePersonChange=(e)=>{
    
    setPersonError('')
    setPerson(e.target.value)
  }
  const handleDateChange=(e)=>{
    
    setDateError('')
    setDate(e.target.value)
  }

  const handleClockChange=(e)=>{
    
    setClockError('')
    setClock(e.target.value)
  }

    const handleBtn=(e)=>{
        e.preventDefault();
        
          if(name !==''){
            if(name && phone && clock && date && person !==''){
              alert(t(`errormsg.12`))
            }
          }
          else(
            setNameError(t(`errormsg.1`))
          )
  
  
          if(phone ===''){
  
            setPhoneError(t(`errormsg.3`))
          }
  
  
          if(date ===''){
  
            setDateError(t(`errormsg.4`))
          }

  
          if(clock ===''){
  
            setClockError(t(`errormsg.5`))
          }
    
          if (person ===''){
            setPersonError(t(`errormsg.11`))
          }
        
    }
  return (
    <>
    {/* about first section */}
    <section className='about-area d-flex align-items-center justify-content-evenly flex-column '>
      <div>
        <h2>{t(`aboutFirst.1`)}</h2>
        <div className='d-flex  '>
          <Link to='/'>{t(`aboutFirst.2`)} &nbsp;  </Link>
          <p> / {t(`aboutFirst.1`)}</p>
        </div>
      </div>
      <img src={banner} alt="" />
    </section>
    {/* about us */}
    <section className="SecAbout2 about-us ">
      <img src={reserve1} className='reserve1 position-r' alt="" />
      {/* About us Animation desing */}
      <img src={reserve2} className='reserve2 position-r' alt="" />
      <img src={reserve3} className='reserve3 position-r' alt="" />
      <img src={reserve4} className='reserve4 position-r' alt="" />
      <div className="container">
        <div className="row">
          <div className=' col-sm-12 col-md-12 col-xl-6 col-xxl-6' >
          {/* About us part of 1 - image */}
            <img src={homeSec3Img1} alt="" className='homeSec3Img1'  data-aos="fade-up"/>
          </div>
          <div className=' aboutUsPart2 col-sm-12 col-md-12 col-xl-6 col-xxl-6' data-aos="fade-up">
          {/* About us part of 2 - text */}
           <div >
           <p className='color-main2'>{t(`aboutUs.1`)}</p>
            <h4 className='color=b '>{t(`aboutUs.2`)}</h4>
            <p className='color-g pt-2'>{t(`aboutUs.3`)}</p>
           </div>
           {/* About us part of 2 - card */}

           <div className='aboutUs-card'>
            <div className="row">
            {HomeSec[1].map((fd, i) => (
             <div className="col-sm-6 col-md-6 col-xl-6 col-xxl-6  " key={  i} >
             <div className="card mt-3 cardSecAbout-sec2 "  >
             <div className="card-body">
              {/* image and title */}
               <div className=' container-card d-flex justify-content-evenly'>
               <img src={fd.icon}  alt="" />
               <h5 className="card-subtitle color-b mt-2 ms-2">
               {t(`aboutUsCard.${i+1}`)}
               </h5>
               </div>
               {/* details  */}
                 <p className="card-text mt-3  pt-2 color-g">{fd.details}</p>

             </div>
               </div>
             </div>
        ))}
            </div>
           </div>
           {/* Card list text */}
           <p className='circule-right mt-3 color-g '>
            <i className="fa-sharp fa-solid fa-circle-right color-main2"></i>  {t(`aboutUs1.1`)} </p>
           <p className='circule-right color-g '>
            <i className="fa-sharp fa-solid fa-circle-right color-main2"></i> {t(`aboutUs1.2`)} </p>
           <button className='bookBtn btn'>{t(`aboutUs1.3`)}</button>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </section>
    <section className=" our-service discover-area pb-3 h-60">
      <div className="container">
        <div className='pt-5 d-flex align-items-center justify-content-evenly flex-column'>
          <p className='color-main2'>{t(`ourService.1`)}</p>
          <h1 className='color-b'>{t(`ourService.2`)}</h1>
          </div>
        <div className="row pt-5 pb-3 " >
        {ourService.map((fd, i) => (
             <div className="col-sm-12 col-md-4 col-xl-4 col-xxl-4 "  key={i}>
             <div className="card "  >
             <div className="card-body  " data-aos="fade-right">
               <img src={fd.icon}  alt="" className='aboutIcon1' />
               <img src={fd.iconH} className='aboutIcon2' alt="" />
               <h5 className="card-subtitle    color-b mt-2">
               {t(`discoverAreaBtn.${i+1}`)}
                 </h5>
                 <p className="card-text mt-3 color-g">{t(`discoverAreaDetails.${i+1}`)}</p>
               <button className='btn BtnDiscover color-b'>{t(`discoverAreaBtn.${i+1}`)}</button>
             </div>
               </div>
             </div>
        ))}
        </div>
      </div>
    </section>
    {/*  Team*/}
    <section className='pb-5 resturant-team teamBgColor restaurant-area'>
        <div className='desingLine'></div>
        <img className="shapePersonal" src={ShapePersonal} alt="" />
      <div className="container">
      <div className='d-flex align-items-center justify-content-center pt-3  flex-column'>
        <p className='color-main2 '>{t(`portfolioTitle.1`)}</p>
        <h3 className='color-b'>{t(`portfolioTitle.2`)}</h3>
      </div>
      <div className='personal mt-3'>
        <SliderPersonal dataAbout={SilderTeam} cardIndexAbout={0} />
      </div>
      </div>
    </section>
    {/* Reserve section */}
    <section className='aboutReserve'>
      <div className="container ">
      <div className='d-flex flex-column align-items-center pt-4'>
        <p className='color-main2'>{t(`reserve.1`)}</p>
        <h3 className='color-w'> {t(`reserve.2`)}</h3>
      </div>
      <form onSubmit={handleBtn} className=' mt-4 '>
        <div className="row">
        <div className="col-sm-6  col-md-6 col-xl-6 col-xxl-6 d-flex flex-column ">
          <input onChange={handleNameChange} type="text" name="" id="" placeholder={t(`reserve.9`)} />
          {nameError && <div className='error-msg'>{nameError}</div>}
          <select value={person} onChange={handlePersonChange} className='mt-2' name="person" id="person">
                  <option value="One">{t(`reserve.3`)}</option>
                  <option value="Two">{t(`reserve.4`)}</option>
                  <option value="Three">{t(`reserve.5`)}</option>
                  <option value="Four">{t(`reserve.6`)}</option>
                  <option value="Five">{t(`reserve.7`)}</option>
                  <option value="Six">{t(`reserve.8`)}</option>
          </select>
          {personError && <div className='error-msg'>{personError}</div>}
          <select onChange={handleClockChange} className='mt-2' name="time" id="">
                  <option value="time">10:00 - 12:00</option>
                  <option value="time">12:00 - 14:00</option>
                  <option value="time">14:00 - 16:00</option>
                  <option value="time">16:00 - 18:00</option>
                  <option value="time">18:00 - 20:00</option>
                  <option value="time">20:00 - 22:00</option>
          </select>
         {clockError && <div className='error-msg'>{clockError}</div>}
        </div>
        <div className="col-sm-6 col-md-6 col-xl-6 col-xxl-6 d-flex flex-column"> 
        <input type="text" onChange={handlePhoneChange} placeholder={t(`reserve.10`)}  />
        {phoneError && <div className='error-msg'>{phoneError}</div>}
        <input className='mt-2' type="date" onChange={handleDateChange} />
        {dateError && <div className='error-msg'>{dateError}</div>}
        <input className='mt-2'type="email" placeholder='E-poct' />
        </div>
      <button className='mt-3 bookBtn mb-5'>{t(`reserve.11`)}</button>
      </div>
      </form>
      </div>
    </section>
    {/* CountUp */}
    <section className='about-odmera' >
      <OdmeraArea /> 
    </section>
    {/* Location */}
    <section className='locationInAbout'>
      <div className='pt-3 location-our-restorant'>
      <div className="container">
        <div className="row">
          <div  data-aos="zoom-in" className=" ps-3 pe-3  location-text d-flex align-items-start justify-content-evenly flex-column col-sm-12 col-md-12 col-xl-6 col-xxl-6">
            <p className='color-main2'>{t(`location.1`)}</p>
            <h3 className='color-w'>{t(`location.2`)}</h3>
            <p className='color-g'>{t(`location.3`)}</p>
            <h6 className='color-w'>{t(`location.4`)}</h6>
              <ul className=' color-main2 d-flex justify-content-between' >
                <div> 
                  <li><i className="fa-solid fa-circle-check"></i> {t(`location.5`)}</li>
                  <li><i className="fa-solid fa-circle-check"></i> {t(`location.6`)}</li>
                </div>
                <div>
                  <li><i className="fa-solid fa-circle-check"></i> {t(`location.7`)}</li>
                  <li><i className="fa-solid fa-circle-check"></i> {t(`location.8`)}</li>
                </div>
                <div>
                  <li><i className="fa-solid fa-circle-check"></i> {t(`location.9`)}</li>
                </div>
              </ul>
          </div>
          <div data-aos="zoom-in" className=" map pt-5 col-sm-12 col-md-12 col-xl-6 col-xxl-6">
            <p className='color-main2 location1 locations   '><i className="fa-solid fa-location-dot"></i></p>
            <p className='color-main2 color-main2 location2 locations'><i className="fa-solid fa-location-dot"></i></p>
            <p className='color-main2 location3 locations'><i className="fa-solid fa-location-dot"></i></p>
            <p className='color-main2 location4 locations'><i className="fa-solid fa-location-dot"></i></p>
            <img src={locationUs} className='locationUsMap' alt="" />
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default About