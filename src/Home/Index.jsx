import React from "react";
import "./style.css"

export const Index = () => {
    return (
      <>
      <header>
    <div className="header-banner">
        <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.16/mercadolibre/logo__large_plus.png" class="header-banner__imgButton" />
        
        <div className="header-banner__search">
            <input type="text" placeholder="Buscar productos, marcas y más..." />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        
        <img src="https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp" className="header-banner__imgSuscription" />
    </div>
      </header>
      
      </>
      )
  }