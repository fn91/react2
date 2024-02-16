
import React from "react";


function HeaderNavBar (){
    const menuOptions = ["Inicio","Categorias","Ofertas","Contacto"];

    const handleInPutChange = (event)=> {
        const nuevoTexto = event.target.value;
        setTextoFiltro(nuevoTexto);
        onFilterChange(nuevoTexto);

    }

    
    

    return (
        <>
        
        <div className="logo">MiTienda</div>
        <ul>
        {menuOptions.map((opt) =>(
        <li key={opt}>{opt}</li>
        ))};
        </ul>


        
       <div className="search-bar"> 
        <input type="text" placeholder="Buscar productos" 
            value={textoFiltro}
            onChange={handleInPutChange}
            />
       </div>
        
        </>


    );

    }

export default HeaderNavBar