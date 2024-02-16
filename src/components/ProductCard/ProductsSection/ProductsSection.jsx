
import React from "react";
import ProductCard from  "../ProductsSection/ProductCard";
import "../ProductsSection.css";
import data from "../../fakeapi/data.json";

function ProductsSection ({filtro}) { 
const products =data.filter ((product)=>
product.title.toLowerCase ().includes(filtro.toLowerCase())

);



return (

  
    <div className="product-section">
        {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        
        
            ))};
     
     

    </div>

);
        
        }

        

export default ProductsSection