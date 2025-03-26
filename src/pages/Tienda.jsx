import React, { useContext } from 'react'
import useTitulo from '../hooks/useTitulo'
import Card from "../components/Card"
import './Tienda.scss'
import ProductosContext from "../contexts/ProductosContext"


const Tienda = () => {
  const{ productos} = useContext(ProductosContext)
  useTitulo('Tienda')
  return (
    <>
    <section className="section-tienda">
            <header className="header">
                    <h1>Tienda</h1>
            </header>
        </section>

      <section className="tienda-container">
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
        <div className="nav-bar-tienda__titulo">
          <p>Tipo de arreglo</p>
        </div>
        <div className="nav-bar-tienda__filtros">
          <input type="checkbox" className="nav-bar-tienda__nav-item"/> Ramos de rosas<br/>
          <input type="checkbox" className="nav-bar-tienda__nav-item"/> Ramos de girasoles<br/>
          <input type="checkbox" className="nav-bar-tienda__nav-item"/> Ramo de tulipanes<br/>
          <input type="checkbox" className="nav-bar-tienda__nav-item"/> Caja de rosas<br/>
          <input type="checkbox" className="nav-bar-tienda__nav-item"/> Caja de tulipanes<br/>
          <input type="checkbox" className="nav-bar-tienda__nav-item"/> Caja de girasoles<br/>
        </div>

       
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

      <div className="productos-container" id="container-productos-tienda">
    
        {
          productos && productos.map((producto) =>(
            <Card producto={producto} key={producto.id}/>
          ))
        }
      
      </div>
      </section>
    </>
    
  )
}

export default Tienda
