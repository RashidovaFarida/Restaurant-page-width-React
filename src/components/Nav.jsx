import React, { useState,useEffect } from 'react'
import {  NavLink ,Link} from 'react-router-dom';
import logo from "../img/home/logo-1.png"
import logoTwo from "../img/home/logo-2.png";
import {useTranslation} from "react-i18next";
import '../Languages/i18n'
import MultiLangBtn from './MultiLangBtn';
import { useCart } from 'react-use-cart';
import menuData from '../data/menuData.json'



    const Navbar =() =>{
      const search1=menuData.comments
    // sticky nav
      const [ sticky, setSticky] = useState(false);
      useEffect (()=>{
        const handleScroll = () => {
          setSticky(window.scrollY >= 200 );
          console.log(window.scrollY)
        };
        window.addEventListener("scroll", handleScroll);
        return()=> window.removeEventListener("scroll", handleScroll);
      });
      const { t} = useTranslation();
      
      // Add cart
      const {totalItems }=useCart()
     //LogOut 
        const handleClick=()=>{
         localStorage.clear();
      window.location.reload();
    }
    // User Name
    const getEmail=localStorage.getItem('username')
    const getPassword=localStorage.getItem('password')
    const getName=localStorage.getItem('name')
        return (
          <>
        <nav className={`${sticky ? "navbar sticky " : "navbar "} mainNav navbar-expand-lg ` }>
        <div className="container pt-2 mainNavContainer">
          < div className="navbar-brand " >
            <img  src={logo} className="logo1"  alt="" />
            <img  src={logoTwo} className="logo2"  alt="" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><i className="fa-solid fa-bars toggler-icon"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto   mb-lg-0 navContainer">
              <li className='nav-item navItem'>
                < NavLink  id='nav-link' exact className='nav-link' to='/'>{t('nav.1')}</NavLink>
              </li>
              <li className='nav-item navItem'>
                < NavLink  id='nav-link' className="nav-link" to="/about">{t('nav.2')}</NavLink>
              </li>
              <li className='nav-item navItem'>
                < NavLink  id='nav-link'   className="color-w nav-link"  to="/menu">{t('nav.3')}</NavLink>
              </li>
              <li className='nav-item navItem'>
                < NavLink id='nav-link'   className="nav-link"  to="/onlineshop">{t('nav.4')}</NavLink>
              </li>
              <li className='nav-item navItem'>
                < NavLink id='nav-link' className="nav-link"  to="/blog">{t('nav.5')}</NavLink>
              </li>
              <li className='nav-item navItem'>
              <NavLink  to='/rezerv'id='nav-link'  className="nav-link" >
              {t('nav.7')}</NavLink>
              </li>
              <li className='nav-item navItem'>
                < NavLink  id='nav-link' className="nav-link"  to="/contact">{t('nav.6')}</NavLink>
              </li>
             
              <li className='nav-item navItem'>
              <div className='cartItem d-flex align-items-center justify-content-center'>
                  <span >{totalItems}</span>
                </div>
              <NavLink  to='/cart' id='nav-link'  className="nav-link" >
              <i className="fa-sharp fa-solid fa-cart-shopping "></i>
              </NavLink>
              </li>
              <li className='nav-item navItem '>
              <NavLink to='/wishlist' className='btn nav-link like'><i class="fa-regular fa-heart"></i></NavLink>
              </li>
              <li className='nav-item navItem'>
              <NavLink to='/signIn' className='btn nav-link bookBtn'>{t('nav.8')}</NavLink>
              </li>
           <li className='nav-item navItem'>
            <MultiLangBtn />
           </li>
           <li className='nav-item navItem pt-3'>
         
           </li>
           <li className='nav-item navItem '>
           {
                  getEmail&&getPassword ? <> <NavLink to='/signIn' className='color-main2 pt-3'>{getName}</NavLink>
              <button  onClick={handleClick} id='nav-link'  className="nav-link sign-out ps-4" >
              <i className="fa-solid fa-right-from-bracket pe-5" /></button> </>: <p></p>
              }
           </li>
          </ul>
            
              
              
          </div>
        </div>
      </nav>
      </>
        )}
  
export default Navbar