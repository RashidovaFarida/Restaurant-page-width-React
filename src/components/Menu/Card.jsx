import React from 'react';
import { motion } from "framer-motion";
import { t } from 'i18next';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

import comments from "../../data/menuData.json"
// import { connect } from 'react-redux';
// import { addToWishList } from '../../actions/wishListActions';

const Card = ({img,title,price,price1,menu,id,item}) => {
const {addItem}=useCart()

const handleAddToCart = () => {
  addItem({
    id: menu.id,
    name: menu.name,
    price: menu.price,
    quantity: menu.img
  });
};
const [products, setProducts] = useState([]);
useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3004/comments');
    const data = await response.json();
    setProducts(data);
  };
  fetchProducts();
}, []);
// ////////////////////////////////////////////////////////////////

const addToWishlist = (item) => {
  localStorage.setItem('wishlist', JSON.stringify([...JSON.parse(localStorage.getItem('wishlist') || '[]'), item]));
  alert(
 
  `${item.title} has been added to your wishlist!;`

  )
};



  return (
<>
  <motion.div id={id} key={id} className=" cardMain col-sm-12 col-md-4 col-xl-3 col-xxl-3" initial={{opacity:0}} exit={{opacity:0}}
    animate={{ opacity: 100 }} transition={{duration: 0.5}}>
    <div className="card ">
      <div className="image d-flex  justify-content-center align-items-center">
        <img src={img} alt="" />
      </div>
      <div className="content ">
        <div className='d-flex justify-content-between'>
          <h5 className='price'>{price1}: <i> {price}$ </i></h5>
          <button className='btn addBtn radius-0' onClick={()=>{addItem(menu)}}>{t(`menuTabSilderAddBtn.1`)}</button>
        </div>
      </div>
      <div className='title'>
        <h5 className='menuTitle'>{t(`titleFilter.${title}`)}</h5>
      </div>
      <div className='d-flex w-100 justify-content-between'>
      <button onClick={() => addToWishlist(item)} className='btn  like'> <i class="fa-regular fa-heart"></i></button>
      <Link to={`/comments/${id}`}  className='color-main2 details pt-2' >Details</Link>
      </div>
    </div>
  </motion.div>
</>
)
}

export default Card