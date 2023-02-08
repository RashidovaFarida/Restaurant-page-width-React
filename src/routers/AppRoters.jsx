import React, { Suspense } from 'react';
import Nav from '../components/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Footer from '../components/Footer'
import About from '../pages/About';
import Rezervation from '../pages/Rezervation';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';
import { useState, useEffect } from 'react';
import ModeBtn from '../components/ModeBtn';
import Menu from '../pages/Menu';
import '../Languages/i18n';
import Cart from '../pages/Cart';
import { CartProvider } from 'react-use-cart';
import l from '../img/l.aspx'
import BlogTable from '../pages/BlogTable/BlogTable';
import Blog from '../pages/Blog';
import AddBlog from '../pages/BlogForms/AddBlog';
import EditBlog  from '../pages/BlogForms/EditBlog';
import BlogDetails from '../pages/BlogDetails';
import SignIn from '../pages/authentication/SignIn';
import SignUp from '../pages/authentication/SignUp';
import ProductDetails from '../pages/ProductDetails';
import Wishlist from '../pages/WishLisht';
import Pay from '../pages/Pay';
import NotFound from '../pages/NotFound';
import PaymentScfly from '../pages/PaymentScfly';
import UserPanel from '../pages/BlogTable/UserPanel';
const AppRoters = ()=> {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    document.body.className = mode;
  })
    return (
     <Suspense fallback={(<div className='loading'><img src={l}  alt="" /></div>)}>
      <BrowserRouter>
      <CartProvider>
     <Nav />
     <ModeBtn color={mode} setColor={setMode}   />
      <Switch>
        <Route path='/' exact component={Home} ></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/menu' component={Menu}></Route>
        <Route path='/comments/:id' component={ProductDetails}></Route>
        <Route path='/rezerv' component={Rezervation}></Route>
        <Route exact path='/blog' component={Blog}></Route>
        <Route path='/blog/:id' component={BlogDetails}></Route>
        <Route path='/onlineshop' component={Shop}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route path='/tableBlg' component={UserPanel}></Route>
        <Route path='/add' component={AddBlog}></Route>
        <Route path='/edit/:id' component={EditBlog}></Route>
        <Route path='/signIn' component={SignIn}></Route>
        <Route path='/signUp' component={SignUp}></Route>
        <Route path='/pay' component={Pay}></Route>
        <Route path='/wishlist' component={Wishlist}></Route>
        <Route path='/payment'  component={PaymentScfly}></Route>
        <Route path='/menu/:keyword' component={Menu}></Route>
        <Route  component={NotFound}></Route>
        </ Switch>
     <Footer />
    
     </CartProvider>  
     </BrowserRouter>
     </Suspense>
    )
  
}

export default AppRoters



