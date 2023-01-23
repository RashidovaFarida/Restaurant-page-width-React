import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {t} from 'i18next'

 function SliderPersonal ( {dataAbout , cardIndexAbout }) {
 
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
            {dataAbout[cardIndexAbout].map((fd,i)=>(
                <div className=" sliderPersonalCard w-auto h-auto" key={i} >
                   <div className="imgPersonalCon ">
                    <img  className="imgPersonals" src={fd.img} alt="" />
                    <div className="socialMediaPersonal d-flex flex-column alignitems-center justify-content-evenly">
                      <Link to='#' ><i className="fa-brands fa-instagram" ></i></Link>
                      <Link to='#'><i className="fa-brands fa-facebook" ></i></Link>
                      <Link to='#'><i className="fa-brands fa-twitter" ></i></Link>
                      <Link to='#'><i className="fa-brands fa-linkedin-in" ></i></Link>
                    </div>
                    <div className="  textPersonal d-flex align-items-center justify-content-evenly flex-column">
                        <h4 className="color-w text-perosonal ">{fd.name}</h4>
                        <p className=" color-main2 text-perosonal">{t(`portfolioDetail.${i+1}`)}</p>
                    </div>
                    </div>
                    
                </div>
            ))}
        </Slider>
      </div>
    );
  }
  export default SliderPersonal