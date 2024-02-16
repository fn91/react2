const { createContext,useState } = from ("react");

export const CartContext = createContext();
export const CartProvider = ({children}) =>{
const [cartItems,setCartItems,item] =useState ([]);

const addToCart = (item) => {
setCartItems([...cartItems,item])

}

return (
<CartContext.Provider value = {{cartItems,addToCart}}>
    {children}

</CartContext.Provider>

)

}


