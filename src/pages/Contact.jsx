import React from 'react'
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import { contact } from '../data/contact'

export const Contact = () => {
  
  return (
    <div className='contact'>
      <div className='introContact d-flex align-items-center justify-content-evenly flex-column '>
      <div>
        <h2>{t('nav.6')}</h2>
        <div className='d-flex  '>
          <Link to='/' className="color-main2">{t(`aboutFirst.2`)} &nbsp;  </Link>
          <p> / {t('nav.6')}</p>
        </div>
      </div>
    </div>
    <div className='contactInput'>
      <div className="container">
        <div className="row">
          <div className=" col-sm-12 col-md-6 col-xl-6 col-xxl-6">
            <h3 className='pt-5 pb-3'>{t(`contact.1`)}</h3>
            <form>
              <div className="row">
                <div className='col-md-6 pt-2' >
                <input type="text" placeholder={t(`reserve.9`)} />
                </div>
                <div className='col-md-6 pt-2'>
                <input type="text" placeholder='E-mail' />
                </div>
                <div className='col-md-6 pt-2'>
                <input type="text" placeholder={t(`reserve.10`)}   />
                </div>
                <div className='col-md-6 pt-2'>
                <input type="text" placeholder={t(`contact.8`)} />
                </div>
                
              </div>
              <textarea placeholder={t(`contact.9`)}  className='mt-2' name="msg" id="msg" cols="30" rows="10"></textarea>
              <div  className=' privacyPolicy  d-flex'>
              <input type="checkbox" id='PrivacyPolicy' />
              <label className='ps-2 pt-2' htmlFor="PrivacyPolicy">{t(`contact.4`)} <Link to='#'>{t(`contact.5`)}</Link>{t(`contact.7`)} <Link to='#'>{t(`contact.6`)}</Link></label>
              </div>
              <button className='bookBtn border-0'>{t(`contact.10`)} </button>
           
              
            </form>
          </div>
          <div className="pt-5 ps-5 textContact col-md-6 col-xl-6 col-xxl-6 d-flex justify-content-evenly flex-column">
            <p className='pt-2'>{t(`contact.2`)}</p>
            <h4 >{t(`contact.3`)}</h4>
            <h6>Minus id quod maxime placeat facere possimus, luptas assumenda est, omnis dolor repellendus emporibus.</h6>
            {
              contact.map((fd)=>{
              return  (
              <div key={fd.id} className='d-flex contactCard '>
                   <div className='contactCardIcon mt-2 d-flex align-items-center justify-content-center'>
                   <p>{fd.icon}</p>
                   </div>
                  <div className='contactCardText  ps-2 '>
                    <h6>{t(`contactCard.${fd.key}`)}</h6>
                    <p >{fd.details}</p>
                  </div>
                  
                </div>)
              })
            }
          </div>
        </div>
      </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.2624592479683!2d-73.93527536277062!3d40.646144541768756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ca10f4880bf%3A0xd4444480783bc914!2zNDU3OCBCZXZlcmxleSBSZCwgQnJvb2tseW4sIE5ZIDExMjAzLCBBbWVyaWthIEJpcmzJmcWfbWnFnyDFnnRhdGxhcsSx!5e0!3m2!1saz!2s!4v1673632469310!5m2!1saz!2s" 
   width='1347' height='400' referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}


export default Contact