import React from 'react';
import logo1 from '../img/home/logo-1.png'
import { Link } from 'react-router-dom';
import reserve1 from '../img/home/reserve-shape-2.png';
import reserve3 from '../img/home/reserve-shape-4.png';
import '../components/ModeBtn'
import { useTranslation } from 'react-i18next';




 const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='footer w-100  '>
      <div className="container">
      <img src={reserve1} className='size reserve1 position-r' alt="" />
      <img src={reserve3} className='size reserve3 position-r' alt="" />


        <div className="row ">
          <div className="part1 d-flex align-items-center justify-content-between flex-column col-sm-12 col-md-6 col-xl-3 col-xxl-3">
            <img src={logo1} alt="" />
            <p>{t(`footer.1`)}</p>
            <div className='footer-social-con d-flex align-items-center justify-content-evenly'>
            <Link className='footer-social-media' to='#'><i className="fa-brands fa-instagram"></i></Link>
            <Link className='footer-social-media' to='#'><i className="fa-brands fa-facebook"></i></Link>
            <Link className='footer-social-media' to='#'> <i className="fa-brands fa-twitter"></i></Link>
            <Link className='footer-social-media'to='#'><i className="fa-brands fa-linkedin-in"></i></Link>
            </div>
          </div>
          <div className=" part2 col-sm-12 col-md-6 col-xl-3 col-xxl-3">
            <h5>{t(`footer.2`)}</h5>
           <ul className='pt-3'>
           <li><Link to='#'> <i className=" right fa-solid fa-right-long"></i> &nbsp; About us</Link></li>
           <li> <Link to='#'><i className=" right fa-solid fa-right-long"></i> &nbsp;  Latest Blog</Link></li>
           <li> <Link to='#'><i className=" right fa-solid fa-right-long"></i> &nbsp;  Book A Table</Link></li>
           <li> <Link to='#'><i className=" right fa-solid fa-right-long"></i> &nbsp;  Contact Us</Link></li>
           <li> <Link to='#'><i className=" right fa-solid fa-right-long"></i> &nbsp;  Our Team</Link></li>
           </ul>
          </div>
          <div className="  col-sm-12 col-md-6 col-xl-3 col-xxl-3">
            <h5>{t(`footer.3`)}</h5>
            <div  className=' part3 pt-3 d-flex align-items-center justify-content-between flex-column' >
              <div className=' part3Text d-flex align-items-center justify-content-between ' >
                <p>{t(`footer.4`)}</p>
                <p>08:00 AM – 12:00 PM</p>
                </div>
                <div className='part3Text d-flex align-items-center justify-content-between ' >
                <p>{t(`footer.5`)}</p>
                <p>09:00 AM – 12:00 PM</p>
                </div>
                <div className='part3Text d-flex align-items-center justify-content-between ' >
                <p>{t(`footer.6`)}</p>
                <p>10:00 AM – 12:00 PM</p>
                </div>
                <div className='part3Text d-flex align-items-center justify-content-between ' >
                <p>{t(`footer.7`)}</p>
                <p>09:00 AM – 12:00 PM</p>
                </div>
                <div className=' part3Text d-flex align-items-center justify-content-between ' >
                <p>{t(`footer.8`)}</p>
                <p>{t(`footer.9`)}</p>
                </div>
                
            </div>
            
          </div>
          <div className="  part4 col-sm-12 col-md-6 col-xl-3 col-xxl-3">
            <h5 className='ps-3'>{t(`footer.10`)}</h5>
            <div className='pt-3'>
              <p>(800) 216 2020</p>
              <p>hello@ruzo.com</p>
              <p className='max-width-50'>No. 12, Ribon Building, Walse street, Australia</p>
              </div>
            
          </div>

        </div>
      </div>
    </footer>
  )
}
export default Footer