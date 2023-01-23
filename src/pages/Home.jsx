import React from 'react';
import bannerOne from '../img/home/banner-img-2.png';
import bannerTwo from '../img/home/banner-shape-1.png';
import bannerThree from '../img/home/banner-shape-2.png';
import bannerFour from '../img/home/banner-shape-3.png';
import bannerFive from '../img/home/banner-shape-4.png';
import bannerSix from '../img/home/banner-shape-5.png';
import HomeSec from '../data/homeData';
import reserve1 from '../img/home/reserve-shape-2.png';
import reserve2 from '../img/home/reserve-shape-3.png';
import reserve3 from '../img/home/reserve-shape-4.png';
import reserve4 from '../img/home/reserve-shape-5.png';
import homeSec3Img1 from '../img/home/about-img-1.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect,useState } from 'react';
import MenuTabSlide from '../components/slides/MenuTabSlide';
import MenuTabSlide2 from '../components/slides/MenuTabSlide';
import MenuTabSlide3 from '../components/slides/MenuTabSlide';
import MenuTabSlide4 from '../components/slides/MenuTabSlide';
import MenuTabSlide5 from '../components/slides/MenuTabSlide';
import Testimonials from '../components/slides/TestiMonials';
import PlayIcon from '../img/home/video-play.svg'
import Modal from '../components/PlayVideo/Modal';
import SliderPersonal from '../components/slides/SliderPersonal';
import  ShapePersonal from '../img/home/restaurant-img-shape-1.webp';
import reserveShape from '../img/home/reserve-shape-1.webp'
import reserveImg from '../img/home/reserve-img-1.webp'
import locationUs from '../img/home/location-map-img.webp'
import { Link } from 'react-router-dom';
import OdmeraArea from '../components/OdmeraArea';
import '../components/MultiLangBtn';
import '../Languages/i18n.jsx';
import {useTranslation} from "react-i18next";
import { DiscoverArea } from '../components/Home/DiscoverArea';
import { motion } from "framer-motion";
import RezervForm from '../components/RezervForm';


const Home = () => {
 useEffect(()=>{
    AOS.init({duration:2000})
},)
// button Menu Tab
const [active, setActive]= useState("Btn1");
  
//active Menu Tab Btn in Home sec4
const [activeBtn, setAvtiveBtn] = useState(1);
const activeButton = (index) =>{
  setAvtiveBtn(index);
}

// Play Button popUp
const [modal, setModal]= useState(false);
// light dark btn
 const { t } = useTranslation();
      

  return (
    <main className='homeMain'>
    {/* Home Section 1 */}
    <section  className='SecHom1 w-100 '>
      {/* Home Section 1 Animation image */}
      <img src={bannerTwo} className='banner1  position-a' alt="" />
      <img src={bannerThree} className='banner2  position-a' alt="" />
      <img src={bannerFive} className='banner4  position-a' alt="" />
      <img src={bannerSix} className='banner5  position-a' alt="" />

      <img src={bannerFour} className='banner3  position-a' alt="" />
      <div className="container">
      <div className="row">
      <div className='col-sm-12 col-md-6 col-xl-6 col-xxl-6 textHomeSec1 pt-5  '>
        <p>{t('homeSec1.1')}</p>
        <h1>{t('homeSec1.2')}</h1>
        <p className='grey pt-3'>{t('homeSec1.3')}</p>
        <motion.button whileFocus={{ scale: 1.2 }} className='btnRead btn mt-5 '>{t('homeSec1.4')}</motion.button>
      </div>
      <div className='col-sm-12 col-md-6 col-xl-6 col-xxl-6'>
        <img src={bannerOne}  id="banner6" alt="" />
      </div>
      </div>
      </div>
      
    </section>
    {/* Home Section 2 - Dicover Area*/}
    <section className="discover-area pb-3 h-60">
      <div className="container">
        <div className="row pt-5  " >
        {HomeSec[0].map((fd, i) => (
             <DiscoverArea icon={fd.icon} title={t(`discoverAreaTitle.${i+1}`)} details={t(`discoverAreaDetails.${i+1}`)} more={t(`discoverAreaBtn.${i+1}`)} key={i} />
        ))}
        </div>
      </div>
    </section>
    {/* Home Section 3 -About us*/}
    <section className="SecHome3 about-us  ">
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
            <h4 className='color-w '> {t(`aboutUs.2`)}</h4>
            <p className='color-g pt-2'>{t(`aboutUs.3`)}
            </p>
           </div>
           {/* About us part of 2 - card */}

           <div className='aboutUs-card'>
            <div className="row">
            {HomeSec[1].map((fd, i) => (
             <div className="col-sm-6 col-md-6 col-xl-6 col-xxl-6  " key={  i} >
             <div className="card mt-3 bgcolorHome-aboutUs"  >
             <div className="card-body">
              {/* image and title */}
               <div className=' container-card d-flex justify-content-evenly'>
               <img src={fd.icon}  alt="" />
               <h5 className="card-subtitle color-w mt-2 ms-2">
               {t(`aboutUsCard.${i+1}`)}
               </h5>
               </div>
               {/* details  */}
                 <p className="card-text mt-3  pt-2 color-g">{t(`aboutUsCard1.${i+1}`)}</p>

             </div>
               </div>
             </div>
        ))}
            </div>
           </div>
           {/* Card list text */}
           <p className='circule-right mt-3 color-g '>
            <i className="fa-sharp fa-solid fa-circle-right color-main2"></i> {t(`aboutUs1.1`)}</p>
           <p className='circule-right color-g '>
            <i className="fa-sharp fa-solid fa-circle-right color-main2"></i> {t(`aboutUs1.2`)}
           </p>
           <button className='bookBtn btn'>{t(`aboutUs1.3`)}</button>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </section>
    {/* Home Section 4 - Menu tabs */}
    <section className='h-100 w-100 menu-tabs'>
      <div className="container">
        {/* Text*/}
      <div className='d-flex w-100 h-auto align-items-center pt-5 flex-column justif-content-center'>
        <p className='color-main2'>{t('menuTab.1')}</p>
        <h3 className='color-w'>{t('menuTab.2')}</h3>
      </div>
      {/* Button */}
      <div className='d-flex justify-content-between MenuTabBtnCon'>
        <div className=' btnMenuTab d-flex justify-content-between w-50 pt-3'>
        <button onClick={()=> {setActive('Btn1');activeButton(1)}}   className={`"btn color-w bg-gl button" ${activeBtn === 1 ? 'activeBtn':''} `}>{t('menuTab.3')}   </button>
        <button onClick={()=> {setActive('Btn2');activeButton(2)}}   className={`"btn color-w bg-gl button" ${activeBtn === 2 ? 'activeBtn':''} `}>{t('menuTab.4')}</button>
        <button onClick={()=> {setActive('Btn3');activeButton(3)}}   className={`"btn color-w bg-gl button" ${activeBtn === 3 ? 'activeBtn':''} `}>{t('menuTab.5')}</button>
        <button onClick={()=> {setActive('Btn4');activeButton(4)}}   className={`"btn color-w bg-gl button" ${activeBtn === 4 ? 'activeBtn':''} `}>{t('menuTab.6')}</button>
        <button onClick={()=> {setActive('Btn5');activeButton(5)}}   className={`"btn color-w bg-gl button" ${activeBtn === 5 ? 'activeBtn':''} `}>{t('menuTab.7')}</button>
        </div>
        <div className='pt-3'>
        <Link to="/menu"  className='btn color-w bg-main2 btnWiew'>{t('menuTab.8')}</Link>
        </div>
      </div>
      {/* Images  food */}
      <div className='menuTabSlider'>
        {active === "Btn1" && <MenuTabSlide  data={HomeSec} cardIndex={2}   />}
        {active === "Btn2" && <MenuTabSlide2  data={HomeSec} cardIndex={3} />}
        {active === "Btn3" && <MenuTabSlide3 data={HomeSec}  cardIndex={4}  />}
        {active === "Btn4" && <MenuTabSlide4 data={HomeSec}  cardIndex={5} />}
        {active === "Btn5" && <MenuTabSlide5  data={HomeSec} cardIndex={6}  />}

      </div>
      </div>
    </section>
    {/* Home Section 5- OdmeraArea */}
  <section>
    <OdmeraArea />
  </section>
    {/* Home Section 6 - testimonials-area */}
    <section className='testimonials-area  '>
      <div className="container  ">
        <div className="row">
          <div data-aos="fade-up" className=' testimonialsPart1  col-sm-12 col-md-12 col-xl-6 col-xll-6 '>
            <p className='color-main2'>{t(`testimonialsTitle.1`)}</p>
            <h2 className='color-w'>{t(`testimonialsTitle.2`)}</h2>
            < Testimonials/>
          </div>
          <div data-aos="fade-up" className=' testimonialsPart2 col-sm-12 col-md-12 col-xl-6 col-xll-6  '>
            <div className='testimonial-bg-video-icon d-flex align-items-center justify-content-center'>
              <button onClick={()=> setModal(true)} className=' playIconBg border-0 d-flex ps-2 align-items-center justify-content-center'>
              <img src={PlayIcon} className='playIcon' alt="" />
              </button>
              <div className='playIconAnimation'> </div>
            </div>
          </div>
        </div>
      </div>
      <Modal   open={modal} onClose={()=> setModal( false) } />
    </section>
    {/* Home Section 7 - portfolio slider */}
    <section className='pb-5 restaurant-area'>
        <div className='desingLine'></div>
        <img className="shapePersonal" src={ShapePersonal} alt="" />
      <div className="container">
      <div className='d-flex align-items-center justify-content-center pt-3  flex-column'>
        <p className='color-main2 '>{t(`portfolioTitle.1`)}</p>
        <h3 className='color-w'>{t(`portfolioTitle.2`)}</h3>
      </div>
      <div className='personal mt-3'>
        <SliderPersonal dataAbout={HomeSec} cardIndexAbout={9}/>
      </div>
      </div>
    </section>
    {/* Home Section 8 - */}
    <section className='reserve-area teamBgColor  w-100 h-100'>
    <img src={reserve1} className='reserve1 position-r' alt="" />
      <img src={reserve2} className=' reserve2 index2 position-r' alt="" />
      
      <div className="container">
        <div className="row">
          <div data-aos="fade-up" className="book-area-img d-flex col-sm-12 col-md-12 col-xl-6 col-xxl-6">
            <img src={reserveShape} className='reserveShape reserve' alt="" />
            <img src={reserveImg}  className=' reserveImg reserve' alt="" />
          </div>
            <div  className=' rezerv  col-sm-12 col-md-12 col-xl-6 col-xxl-6'>
              <div className="book-area-input-2" >

              <RezervForm />
             </div>
            </div>
          </div>
        
      </div>

    </section>
    {/* Home Section 9 -  */}
    <section className='pt-3 location-our-restorant'>
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
              <button className='radius-0 bg-main2 btn '>{t(`location.11`)}</button>
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
    </section>
    {/* Section 10  */}
    <section className='home-blog'>
      <div className="container">
        <div className='pt-5 d-flex align-items-center justify-content-center flex-column'>
        <p className='color-main2'>{t(`blog.1`)}</p>
        <h4 className='color-w'>{t(`blog.2`)}</h4>
        </div>
        <div className="container">
        <div className="row">

         {HomeSec[10].map((fd, i)=>(   
        <div key={i} className="col-sm-12 col-md-12 col-xl-4 col-xxl-4 mt-3 ">
        <div className="card" data-aos="fade-right">
         <img src={fd.img} id='blogImg' className="card-img-top" alt="..." />
         <div className="card-body">
          <div className='d-flex '>
            <p className='color-main2'>{t(`blogCardP.${i+1}`)}</p>
            </div>
         <Link to={`blog`}>
         <h6 className="card-title color-w">{t(`blogCardTitle.${i+1}`)}</h6>
         </Link>
         <Link to={`blog`} className="btn mt-2  radius-0 readBtn">{t(`blog.3`)}</Link>
        </div>
      </div>
  </div>
))}
</div>
        </div>
      </div>
    </section>
    </main>
    

  )
}
export default Home



