import React from "react";

import "./Footer.css"

const Footer = () => {


    return (

        <footer className="footer">
        
        <div className="footer-content">
        <div className="footer-section">
        <h3>Contacto</h3>
        <p>Email:info@tienda.com</p>
        <p>Telefono:+34 123 456 789</p>
        </div>

        
        <div className="footer-section">
        <h3>Resdes Sociales</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
        </div>


       
        <div className="footer-section">
        <h3>Direccion</h3>
        <p>Calle Principal, 123</p>
        <p>Ciudad, País</p>
        </div>
        </div>
        <div className="footer-bottom">
        <p>&Copy;2023 MiTienda. Todos los derechos reservados</p>

       
        </div>
        
        
        </footer>





    )


}







export default Footer