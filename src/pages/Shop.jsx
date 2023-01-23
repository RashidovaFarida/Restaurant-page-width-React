import {React, useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import shopProduct from '../data/shopProduct.json'
import { t } from 'i18next'
import ReactPaginate from 'react-paginate'
import { useCart } from 'react-use-cart'



const Shop = () => {
  let comments= shopProduct.comments
  const [items, setItems] = useState(comments);
  const [pageCount , setPageCount]=useState(0)
useEffect (() => {
   const getComments = async () => {
   const res= await fetch(
    'http://localhost:3005/comments?_page=1&_limit=8'
); 
    const data = await res.json();
    const total = res.headers.get('x-total-count')
    setPageCount(total/8)

setItems (data);
};
getComments();
}, []);

const fetchComments = async (currentPage) => {
  const res = await fetch(
  `http://localhost:3005/comments?_page=${currentPage}&_limit=8`
  );
  const data = await res.json();
  return data; 
  };
// Pagination 
const handlePageClick = async(data) =>{

 console.log(data.selected);
 let currentPage =data.selected + 1;
 const commentsFromServer= await fetchComments(currentPage);
 setItems(commentsFromServer)
 }
 // Add Cart
const {addItem}=useCart()

  return (
    <section className='shopMain'>
      <div className='introShop d-flex align-items-center justify-content-evenly flex-column '>
      <div>
        <h2>{t('nav.4')}</h2>
        <div className='d-flex  '>
          <Link to='/' className="color-main2">{t(`aboutFirst.2`)} &nbsp;  </Link>
          <p> / {t('nav.4')}</p>
        </div>
      </div>
    </div>
    <div className='shopProduct'>
    <div className="container">
    <div className="row">
    {
      items.map((product )=>{
        return(
          <div key={product.id} className="col-sm-12 col-md-3 col-xxl-3 mt-4 mb-3">
            <div className="card">
              <img src={product.img} className="card-img-top" alt="..."/>
              <button onClick={()=>addItem(product)} className='shopAdd btn d-flex align-items-center justify-content-center '>{t(`menuTabSilderAddBtn.1`)}</button>
                <div className="card-body">
                   <h5 className="card-title mt-4">{t(`titleFilter.${product.id}`)}</h5>
                   <p className="card-text">{t(`shopCartDetails.1`)}</p>
                 </div>
                <div className="container ps-3 pe-3">
                 <div className='d-flex justify-content-center addPrice '>
                    <h5>{t(`filterPrice.2`)}: {product.price}$</h5>
                 </div>
              </div>
             </div>
          </div>
        )
      })
    }
   <div>
      <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPages Displayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previous LinkClassName ={'page-link'}
          nextClassName = {'page-item'}
          nextLinkClassName ={'page-link'}
          activeClassName={'active'}
/>
      </div>
    </div>
    </div>
   </div>
    </section>
  )
}


export default Shop