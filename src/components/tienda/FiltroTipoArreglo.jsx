import React from 'react'
import './FiltroTipoArreglo.scss'
import ItemFiltro from './ItemFiltro'
const FiltroTipoArreglo = () => {
  return (
    <>
         <label  htmlFor="menu-catalogo" className="catalogo-container">
          <div className="menu__catalogo">
            <p>Catálogo</p>
          </div> 
            <div className="menu__icono">
              <i className="fa-solid fa-square-caret-down"></i>
            </div>
      </label>

      <input type="checkbox" id="menu-catalogo"/>
      <nav className="nav-bar-tienda">
      <ItemFiltro/>

       
          <div className="price">
            <div className="price__title">
              <p>Filtrar por precio</p>
            </div>
         <div className="price__input" >
          <div className="price__field">
            <span>S/</span>
            <input type="number" className="input-min" value="2500" readOnly/>
          </div>
          <div className="price__separator">-</div>
          <div className="price__field">
            <span>S/</span>
            <input type="number" className="input-max" value="7500" readOnly/>
          </div>
        </div>
        <div className="price__slider">
          <div className="progress"></div>
        </div>
        <div className="range-input">
          <input type="range" className="range-min" min="0" max="10000" value="2500" step="100" readOnly/>
          <input type="range" className="range-max" min="0" max="10000" value="7500" step="100" readOnly/>
        </div>
      </div>
          
       
        <div className="nav-bar-tienda__boton">
          <button className="nav-bar-tienda__boton__busqueda">Filtrar</button>
        </div>

      </nav>

    </>
  )
}

export default FiltroTipoArreglo
