import React, {  useState } from 'react'
import './ItemFiltro.scss'
import ProductosContext from "../../contexts/ProductosContext"
const ItemFiltro = () => {

    const Inicial={
        love:false,
        box:false,
        bouquet:false,
        graduacion:false,
  }
    const [filtro, setFiltro] = useState(Inicial)

    const handleChange =(e) =>{
        const { type, name, checked, value} = e.target
            if (type === "checkbox"  && !checked  ){
                filtro.categoria = filtro.categoria.filter((i) => i !== name);
              }
            
                setFiltro({
                    ...filtro,
                    [name]: type === 'checkbox' ? checked : value
                });
                console.log(e.target)
    }

    //const filtrarProductosATienda 
      const handleSubmit =(e)=>{            
        e.preventDefault()

               //filtrarProductosATienda(producto)
            
            }
        
  return (

    
    <>
     <div className="nav-bar-tienda__titulo">
          <p>Tipo de arreglo</p>
        </div>
        <div className="nav-bar-tienda__filtros">
          <input type="checkbox" 
          name="love"
          value={filtro.love} 
            onChange={handleChange} 
          className="nav-bar-tienda__nav-item"/>
           Detalles de amor<br/>

          <input type="checkbox"  
          name="box" 
          value={filtro.box} 
          onChange={handleChange} 
          className="nav-bar-tienda__nav-item"/> 
          Box de detalles<br/>

          <input type="checkbox"  
          name="bouquet" 
          value={filtro.bouquet} 
          onChange={handleChange}
          className="nav-bar-tienda__nav-item"/> 
          Detalles en bouquet<br/>

          <input type="checkbox"  
          name="graduacion"
          value={filtro.graduacion} 
          onChange={handleChange} 
          className="nav-bar-tienda__nav-item"/> 
          Detalles para graduación<br/>

        </div>
        <div className="nav-bar-tienda__boton">
          <button className="nav-bar-tienda__boton__busqueda"  type="submit" onClick={handleSubmit}>Filtrar</button>
        </div>
    </>
  )
}

export default ItemFiltro
