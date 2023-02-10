import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem('wishlist') || '[]'));
  }, []);

  const removeFromWishlist = (item) => {
    const newWishlist = wishlist.filter((i) => i.id !== item.id);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    setWishlist(newWishlist);
  };

  return (
  <div className="container ">
      <table className="table wishlist">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Img</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody className="table-group-divider">
     
      {wishlist.map((item) => (
            <tr  >
             <th scope="row">{item.id}</th>
             <td><img src={item.img} width='120' alt="" /></td>
             <td><Link to={`/comments/${item.id}`} className='wishTitle'>{item.title}</Link></td>
             <td>{item.price}$</td>
             <td><button className='bookBtn' onClick={() => removeFromWishlist(item)}>Remove</button></td>
             </tr>
        ))}
    </tbody>
  </table>
  </div>
);
}
    


export default WishlistPage;
