import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 

import "slick-carousel/slick/slick-theme.css";
import { t } from "i18next";
import { useCart } from "react-use-cart";
function MenuTabSlide ({data ,cardIndex}){
  const {addItem}=useCart()

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}
    return (
        <div>
          <Slider {...settings}>
          {data[cardIndex].map((fd, i) => (
            <div className="card"  key={fd.id}>
            <button className='menuTabAddCart' onClick={()=>addItem(fd)}>{t('menuTabSilderAddBtn.1')}</button>
            <div className="card-body">
            <img src={fd.img} className="card-img-top" alt="..." />
            <div className="menuTabSiderText">
                <h6 className="pt-2 ps-2 color-w">{t(`titleFilter.${fd.id}`)}</h6>
                <p className="ps-2 color-main2">{fd.price}$</p>
            </div>
            </div>
          </div>
        ))}
          </Slider>
        </div>
      );
}



export default MenuTabSlide



