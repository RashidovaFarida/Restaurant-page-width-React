import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import AppRoters from './routers/AppRoters';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './sass/style.css'
import { Provider } from "react-redux";

import { addBlog,editBlog,removeBlog } from "./actions/blogAction";
import configureStore from './store/configureStore';
import { t } from 'i18next';
import { createRoot } from 'react-dom/client';
const store  = configureStore();
const root = createRoot(document.getElementById('root'));





// Dispatch Start

store.subscribe(()=>{
  console.log(store.getState());
})
const blog1 =  store.dispatch(addBlog({title:`Ideal Cocktails From Our Barmen For Pefect Mood` ,
desc:"There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or randomized words which don't look even slightly believable if you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.In the middle of text all the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet it uses a dictionary.There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or randomized words which don't look even slightly believable if you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.In the middle of text all the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet it uses a dictionary.",
img:`https://templates.hibootstrap.com/ruzo/default/assets/images/blog/blog-page-1.webp`}))
const blog2 =  store.dispatch(addBlog({title:`Turkish Soup With Species: Dish Of The Week`,desc:"There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or randomized words which don't look even slightly believable if you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.In the middle of text all the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet it uses a dictionary.There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or randomized words which don't look even slightly believable if you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.In the middle of text all the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet it uses a dictionary.",img:'https://templates.hibootstrap.com/ruzo/default/assets/images/blog/blog-page-2.webp'}))
const blog3 =  store.dispatch(addBlog({title:`Elegant Dessert: 10 Tips How To Make It At Home`,desc:"There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or randomized words which don't look even slightly believable if you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.In the middle of text all the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet it uses a dictionary.There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or randomized words which don't look even slightly believable if you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.In the middle of text all the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet it uses a dictionary.",img:'https://templates.hibootstrap.com/ruzo/default/assets/images/blog/blog-page-4.webp'}))
const blog4 =  store.dispatch(addBlog({title:`Turkish Soup With Species: Dish Of The Week`,desc:"There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or randomized words which don't look even slightly believable if you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.In the middle of text all the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet it uses a dictionary.There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or randomized words which don't look even slightly believable if you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.In the middle of text all the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the internet it uses a dictionary.",img:'https://templates.hibootstrap.com/ruzo/default/assets/images/blog/blog-page-6.webp'}))
console.log(blog1.blog.id);

root.render(<Provider store={store}><AppRoters /></Provider>);


