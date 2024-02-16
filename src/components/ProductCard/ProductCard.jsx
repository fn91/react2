import React from "react";

import "./ProductCard.css"
import {useCart} from "../hooks/useCart"

const ProductCard = ({product}) =>{
    const {id,title,description,image,rating} = product;
    const {addToCart} =useCart();
return (

    <div className="product-card" key={id}>
    <img className="product-card" src={image} alt={title} />
    <div className="product-info">
    <h3 className="product-title">{title}</h3>
    <p className="product-description">{description}</p>
    </div>
    
    <div className="product-rating">
    <p>{`Rating: ${rating.rate} (${rating.count} reviews)`}</p>

    </div>
    <p className="product-price">{`$${price}`}</p>


    <button
    className="product-add-to-cart"
    onClick={()=>addToCart(product)}
    ></button>

   </div>
    
  


)





}

export default ProductCard