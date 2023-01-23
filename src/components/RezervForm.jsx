import React from 'react'
import { t } from 'i18next';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
const RezervForm = () => {

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
              alert('Successful Booking')
                
            }
            
          }
          else(
            setNameError(t(`errormsg.1`))
          )
  
  
          if(phone ==='')
          {
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
    <div data-aos="fade-up" className='rezverFrom   '>
          <div className='pt-3 ps-3'>
                <p className='color-main2'>{t(`reserve.1`)}</p>
                <h4 className='color-w'>{t(`reserve.2`)}</h4>
                </div>
          <form action="" onSubmit={handleBtn} className='  d-flex align-items-start justify-content-between flex-column'>
                  <input onChange={handleNameChange}  placeholder={t(`reserve.9`)} type="text" name="name" id="name" />
                  {nameError && <div className='error-msg'>{nameError}</div>}
                  <input onChange={handlePhoneChange}  placeholder={t(`reserve.10`)} type="text" name="phone" id="phone" />
                  {phoneError && <div className='error-msg'>{phoneError}</div>}
                  <select  value={person} name="person" onChange={handlePersonChange} id="person">
                    <option value="One">{t(`reserve.3`)}</option>
                    <option value="Two">{t(`reserve.4`)}</option>
                    <option value="Three">{t(`reserve.5`)}</option>
                    <option value="Four">{t(`reserve.6`)}</option>
                    <option value="Five">{t(`reserve.7`)}</option>
                    <option value="Six">{t(`reserve.8`)}</option>
                  </select>
                  {personError && <div className='error-msg'>{personError}</div>}
                  <input type="date" onChange={handleDateChange} />
                  {dateError && <div className='error-msg'>{dateError}</div>}
                  <select value={clock} name="time" id=""  onChange={handleClockChange}>
                    <option value="time 10-12">10:00 - 12:00</option>
                    <option value="time 12-14">12:00 - 14:00</option>
                    <option value="time 14-16">14:00 - 16:00</option>
                    <option value="time 16-18">16:00 - 18:00</option>
                    <option value="time 18-20">18:00 - 20:00</option>
                    <option value="time 20-22">20:00 - 22:00</option>
                  </select>
                  {clockError && <div className='error-msg'>{clockError}</div>}
                    <button className='color-w bookBtn ms-3 mt-3'>{t(`reserve.11`)}</button>
                  </form>
          </div>
  )
}

export default RezervForm