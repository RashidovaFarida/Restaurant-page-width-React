import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import { t } from 'i18next';

const ProductDetails = ({match}) => {
  const [product, setProduct] = useState({});
  const productId = match.params.id;
  console.log(productId)

  useEffect(() => {
    console.log('ProductDetail component mounted');
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:3004/comments/${productId}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  ////
  const {addItem}=useCart()

const handleAddToCart = () => {
  addItem({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1
  });
};
  return (
    <>
    <div className="container">  
   <div className="row">
    <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
      <img src={product.img} alt="" className='product-img' />
    </div>
    <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6 pt-5">
      <h3>{product.title}</h3>
      {/* Accordion  */}
      <div className="accordion pt-5" id="accordionExample">
          <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Composition
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        3 cup all purpose flour <br />
      4 egg <br />
      2 teaspoon baking soda<br />
      2 teaspoon vanilla essence<br />
      1 1/2 cup powdered sugar<br />
      1 cup milk  <br />
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Preparation
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Bake the plain cake for 45 to 60 minutes. Put the cake on the center rack of your preheated oven and bake it for 45 minutes. The cake should become a rich golden color and start to pull away from the edges once it's baked. Since everyone's oven is a little different, it may take your oven more time to bake the cake, so don't worry if it needs up to 15 more minutes.[7]
      Avoid opening the oven door while the cake is in the middle of baking. Wait to open the door and test the cake for doneness until it's at or near the end of the baking time.
       <br />
      </div>
      <strong className='ps-2'> Waiting 45 minutes.</strong>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Feedback
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body  pt-4">
        <div className="rate">
        <input type="radio" id="star5" name="rate" defaultValue={5} />
        <label htmlFor="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name="rate" defaultValue={4} />
        <label htmlFor="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name="rate" defaultValue={3} />
        <label htmlFor="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name="rate" defaultValue={2} />
        <label htmlFor="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name="rate" defaultValue={1} />
        <label htmlFor="star1" title="text">1 star</label>
        <p className='pt-1'><strong>This meal goal is :</strong> 4.9</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='d-flex justify-content-between pt-5'>
<h5 className='price pt-2'><strong>Price:</strong> <i> {product.price}$ </i></h5>
<div>
<button className='btn addBtn mt-3 radius-0' onClick={handleAddToCart}>{t(`menuTabSilderAddBtn.1`)}</button>
</div>

</div>
    </div>
    </div>
   </div>
    </>
  );
};

export default ProductDetails;
