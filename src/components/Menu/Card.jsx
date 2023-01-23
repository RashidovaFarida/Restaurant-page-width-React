import React from 'react';
import { motion } from "framer-motion";
import { t } from 'i18next';
import { useCart } from 'react-use-cart';


const Card = ({img,title,price,ing,price1,menu,id}) => {
const {addItem}=useCart()
return (
<>
  <motion.div id={id} className=" cardMain col-sm-12 col-md-3 col-xl-3 col-xxl-3" initial={{opacity:0}} exit={{opacity:0}}
    animate={{ opacity: 100 }} transition={{duration: 0.5}}>
    <div className="card ">
      <div className="image d-flex  justify-content-center align-items-center">
        <img src={img} alt="" />
      </div>
      <div className="content ">
        <h6>{ing}</h6>
        <p>Lorem ipsum is a placeholder text only used to demonstrate the visual form of a document or a typeface
          without relying on meaningful content.</p>
        <div className='d-flex justify-content-between'>
          <h5 className='price'>{price1}: <i> {price}$ </i></h5>
          <button className='btn addBtn radius-0' onClick={()=>addItem(menu)}>{t(`menuTabSilderAddBtn.1`)}</button>
        </div>
      </div>
      <div className='title'>
        <h5>{t(`titleFilter.${title}`)}</h5>
      </div>
    </div>
  </motion.div>
</>
)
}

export default Card