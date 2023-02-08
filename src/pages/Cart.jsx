import React from 'react';
import { useCart } from 'react-use-cart';
import emptyImg from '../img/b.gif';
import { useTranslation } from 'react-i18next';
 const Cart=()=> {
 const { t } = useTranslation();

  const{
    cartTotal, 
    emptyCart,
    isEmpty,
    updateItemQuantity,
    removeItem,
    items
  }=useCart();
  
  if(isEmpty) return <div className=" flex-column emptyCart  d-flex justify-content-center  align-items-center">
  
  <img src={emptyImg} width="500"alt="" />

  <h3>{t(`eptyCart.1`)}</h3>
  </div>
    
    const getEmail = localStorage.getItem("username");
    const getPassword = localStorage.getItem("password");

const handleClick = () => {
  if (getEmail && getPassword) {
    window.location.assign("/pay");

  } else {
    window.location.assign("/logIn");
  }
};

    return (
     <section className='cart d-flex   align-items-center flex-column pt-3'>
       <div className="container">
       <table className="table ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{t(`eptyCart.2`)}</th>
      <th scope="col">{t(`eptyCart.3`)}</th>
      <th scope="col">{t(`eptyCart.4`)}</th>
      <th scope="col">{t(`eptyCart.5`)}</th>
      <th scope="col">{t(`eptyCart.6`)}</th>
    </tr>
  </thead>
  <tbody>
    {items.map((fdItem, i)=>{
        return(
            <tr key={fdItem.id}>
                <th scope='row'>{i+1}</th>
                <td><img src={fdItem.img} width='120' alt="" /></td>
                <td>{t(`titleFilter.${fdItem.id}`)}</td>
                <td>{fdItem.price*fdItem.quantity}$</td>
                <td>
                    <button className='btn ' onClick={()=>updateItemQuantity(fdItem.id , fdItem.quantity-1)}>-</button>
                    <span className='mx-2'>{fdItem.quantity}</span>
                    <button className='btn'onClick={()=>updateItemQuantity(fdItem.id , fdItem.quantity+1)}>+</button>
                </td>
                <td>
                    <button className='btn ' onClick={()=>removeItem(fdItem.id)}><i className="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
        )
    })}
  </tbody>
</table> 
    <div>
        <p >{t(`eptyCart.7`)}: {cartTotal}$</p>
    </div>
       <div className='d-flex justify-content-between mt-5 mb-5'>
        <button className='clear bookBtn radius-0 ' onClick={()=>emptyCart()}> {t(`eptyCart.8`)}</button>
        <button className='pay bookBtn radius-0 ' onClick={handleClick}> {t(`eptyCart.9`)}</button>
         </div>
       </div>
     </section>
    )
  }


export default Cart