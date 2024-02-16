// eslint-disable-next-line no-unused-vars
import React from "react";

import "./Banner.css";
import useAuth from "../../hooks/useAuth"
const Banner = () => {
    const {isLoggedIn,userData}=useAuth()

return (
  
        <div className="banner">
            <p className="banner-text">

            {isLoggedIn? (
                <>i{userData.name},aprovechate de tu 20% de descuento</>

            ) :(
                <>Crea una cuenta para disfrutar de tu descuento</>

            )
        }





            </p>



        </div>



)



}
export default Banner