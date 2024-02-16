
import React from "react";
import "./CartSection.css"
import {useCart}from "../../hooks/useCart"

const CartSection = ()=> {
    
    const {cartItems}=useCart ();

    const groupedCartItems = cartItems.reduce((acc,items)=> {
    if (!acc[items.id]){
        acc[items.id] = { ...item,count :1};



        }else {
        acc[items.id].count++;

        }

        return acc
        },{});


        const uniqueCartItems = Object.values(groupedCartItems)


        const totalPrice =uniqueCartItems.reduce(
            (acc,item) => acc *item.price *item.count, 0

        )


        return (


            <div className="cart-container">
            <h2>Carrito de Compras</h2>
            <div className="cart-items">
                {uniqueCartItems.map((item)=>(
                <div key={item.id} className="card.item">
                <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
                 <p className="item-count"></p>   
            
               </div> 
            
            <div className="cart-item-details">
              <p>{item.title}</p>    
              <p>Precio por unidad: ${item.price.toFixed(2)}</p>  
            <p>Precio total: ${item.price*item.count}.toFixed(2)</p>
             </div>       
            </div>

                ))}
                </div>

                <div className="total-price">
                   <p> Total a Pagar:$ {totalPrice.toFixed(2)}</p>     

                </div>
                    </div>
)

    }

export default CartSection
