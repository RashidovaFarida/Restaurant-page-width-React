import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card from '../components/Menu/Card';
import { useState } from 'react';
import { AnimatePresence } from "framer-motion";
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import dp from '../data/menuData.json'
// import  Search  from '../components/Search';
const Menu = () => {

  let comments= dp.comments
  //validation 
  const [items, setItems] = useState(comments.sort());
  const [pageCount , setPageCount]=useState(0)
useEffect (() => {
   const getComments = async () => {
   const res= await fetch(
        'http://localhost:3004/comments?_page=1&_limit=12'
  ); 
    const data = await res.json();
    const total = res.headers.get('x-total-count')
    setPageCount(total/12)

    setItems (data);
  };
      getComments();
}, []);

const fetchComments = async (currentPage) => {
  const res = await fetch(
  `http://localhost:3004/comments?_page=${currentPage}&_limit=12`
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
  const { t } = useTranslation();
  // const [state, setItems]=useState(card)
  const handleBtn=(e)=>{
  let word=e.target.value
  if ( word === 'All'){
  setItems(comments)
  }
  else if (word === 'Dinner'){
  const filtered = comments.filter(fd => fd.catagory === 'Dinner')
  setItems(filtered)
  }
  else if (word === 'Lunch'){
  const filtered = comments.filter(fd => fd.catagory === 'Lunch')
  setItems(filtered)
  }
  else if (word === 'Brunch'){
  const filtered = comments.filter(fd => fd.catagory === 'Brunch')
  setItems(filtered)
  }
  else if (word === 'Breakfast'){
  const filtered = comments.filter(fd => fd.catagory === 'Breakfast')
  setItems(filtered)
  }
  else if (word === 'Drink'){
  const filtered = comments.filter(fd => fd.catagory === 'Drink')
  setItems(filtered)
  }
  else if (word === 'Vegan'){
  const filtered = comments.filter(fd => fd.catagory === 'Vegan')
  setItems(filtered)
  }
  else if (word === 'Dessert'){
  const filtered = comments.filter(fd => fd.catagory === 'Dessert')
  setItems(filtered)
  }
  }
  const [activeBtn, setAvtiveBtn] = useState(1);
  const activeButton = (index) =>{
  setAvtiveBtn(index);
  }
  // const handleSearch=(e)=>{
  //   if (e.target.value ==''){
  //     setItems(items)
  //     return
  //   }
  //  const searchResult=  items.filter(item => item.title.toLowerCase().startsWith(e.target.value.toLowerCase()))
  //  setItems(searchResult)
  // }
  const [searchTerm,setSearchTerm]=useState('')

  //////////////////////////////////////////////

  const addToWishlist = (item) => {
    localStorage.setItem('wishlist', JSON.stringify([...JSON.parse(localStorage.getItem('wishlist') || '[]'), item]));
  };

return (
// Menu Section First
<main className='menuMain'>
  <section className='menuFirst about-area d-flex align-items-center justify-content-evenly flex-column '>
    <div>
      <h2>{t(`menuFirst.1`)}</h2>
      <div className='d-flex  '>
        <Link to='/'>{t(`menuFirst.2`)} &nbsp; </Link>
        <p> / {t(`menuFirst.1`)}</p>
      </div>
    </div>
    <div className='menuBg'></div>
  </section>
  <section className='w-100 h-60 menuSecCard'>
    <div className="container">
      <div className="row">
      <div className='btnContan col-md-6 d-flex align-items-center justify-content-evenly'>

<button className={activeBtn===1 ? "filterActive filterBtn radius-0 btn" :"filterBtn radius-0 btn"}
  onClick={function(event){ handleBtn(event); activeButton(1);}} value='All'>{t(`filterBtn.7`)}</button>
<button className={activeBtn===2 ? "filterActive filterBtn radius-0 btn" :"filterBtn radius-0 btn"}
  onClick={function(event){ handleBtn(event); activeButton(2);}} value='Dinner'>{t(`filterBtn.1`)}</button>
<button className={activeBtn===3 ? "filterActive filterBtn radius-0 btn" :"filterBtn radius-0 btn"}
  onClick={function(event){ handleBtn(event); activeButton(3);}} value='Lunch'>{t(`filterBtn.2`)}</button>
<button className={activeBtn===4 ? "filterActive filterBtn radius-0 btn" :"filterBtn radius-0 btn"}
  onClick={function(event){ handleBtn(event); activeButton(4);}} value='Breakfast'>{t(`filterBtn.3`)}</button>
<button className={activeBtn===5 ? "filterActive filterBtn radius-0 btn" :"filterBtn radius-0 btn"}
  onClick={function(event){ handleBtn(event); activeButton(5);}} value='Drink'>{t(`filterBtn.4`)}</button>
<button className={activeBtn===6 ? "filterActive filterBtn radius-0 btn" :"filterBtn radius-0 btn"}
  onClick={function(event){ handleBtn(event); activeButton(6);}} value='Vegan'>{t(`filterBtn.5`)}</button>
<button className={activeBtn===7 ? "filterActive filterBtn radius-0 btn" :"filterBtn radius-0 btn"}
  onClick={function(event){ handleBtn(event); activeButton(7);}} value='Dessert'>{t(`filterBtn.6`)}</button>
  </div>
  <div className='col-md-6  pt-5'>
    {/* <Search onChange={(e)=>{setQuery(e.targe.value)}}/> */}
    <div className='searchMain d-flex align-items-center justify-content-end'>
        <input className='search' type="text"  placeholder='Search here...' onChange={(event)=>{
          setSearchTerm(event.target.value)
        }}/>
        <button className='btn searchBtn '><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </div>
      </div>
      <div className='row'>
        <AnimatePresence>
          {items.filter((item)=>{
            if(searchTerm ===''){
              return item;
            }
            else if ( item.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return item;
            }
          }).map((item)=>(
          <Card 
          title={item.id} 
          img={item.img} 
          key={item.id} 
          id={item.id}
          price={item.price}
          price1={t(`filterPrice.2`)}
          ing={t(`filterPrice.1`)} 
          menu={item} 
          item={item}
          
          
          
          />
          ))}
        </AnimatePresence>
      </div>
      <div>
      <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPages Displayed={3}
          pageRangeDisplayed={6}
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
  </section>
</main>
)
}

export default Menu;