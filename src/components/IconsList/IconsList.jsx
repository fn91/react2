// eslint-disable-next-line no-unused-vars
import React from "react";
import UserIcon from "../../icons/CartIcon.svg";
import LikeIcon from "../../icons/LikeIcon.svg";
import CartIcon from "../../icons/UserIcon.svg";
import ThemeIcon from "../../icons/ThemeIcon.svg";

function IconsList(){

const whiteIconStyle ={filter: "invert(100%)"};
const {cartItems} =useCart()
const {toggleTheme}=useTheme()

return (



        <ul className="user-icons">
        <li className="user-icons">
        <img src ={UserIcon} alt="" style={whiteIconStyle}/>
        </li>

        <li className="like-icon">
        <img src ={LikeIcon} alt="" style={whiteIconStyle}/>
        </li>
        
       <li className="theme-icon" onClick={()=>toggleTheme}>
        <img src={ThemeIcon} alt="" style={whiteIconStyle} />
       </li>

        <li className="card-icon" onClick={()=>toggleTheme()}>
        <img src ={CartIcon} alt="" style={whiteIconStyle}/>

        {cartItemsCount >  0 && (  
               <span className="cart-count">{cartItemsCount}</span> 

        )}
        </li>
       

       
        </ul>




)




}

export default IconsList