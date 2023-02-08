import  { useState, useEffect } from "react";
import dp from '../data/menuData.json'

const useCart2 = () => {
  // Set up state to hold the items in the cart and wishlist
//   const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState(dp.comments);

  // Use useEffect hook to load the items from local storage on component mount
  useEffect(() => {
    // const cartFromLocalStorage = localStorage.getItem("cart");
    const wishListFromLocalStorage = localStorage.getItem("wishlist");

    // if (cartFromLocalStorage) {
    //   setCartItems(JSON.parse(cartFromLocalStorage));
    // }

    if (wishListFromLocalStorage) {
      setWishList(JSON.parse(wishListFromLocalStorage));
    }
  }, []);

  // Use useEffect hook to save the items to local storage whenever the state updates
  useEffect(() => {
    // localStorage.setItem("cart", JSON.stringify(cartItems));
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [ wishList]);

//   // Create functions to add items to the cart and wishlist
//   const addToCart = item => {
//     setCartItems([...cartItems, item]);
//   };

  const addToWishList = item => {
    setWishList([...wishList, item]);
  };

  return {  wishList, addToWishList };
};

export default useCart2;
