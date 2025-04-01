import './BotonBuscar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import ProductosContext from "../contexts/ProductosContext"
const BotonBuscar = () => {
  const {botonFiltrarNavbar} = useContext(ProductosContext)
  const [buscar, setBuscar] = useState({ filtro: '' });
  const handleChange =(e) =>{
    setBuscar({ filtro: e.target.value }); // Correcta actualización del estado
  
}

const handleSubmit = (e) => {
  e.preventDefault(); // Evita el comportamiento por defecto del formulario
  console.log("Valor buscado:", buscar.filtro);
  botonFiltrarNavbar(buscar.filtro)
};
  return (
    <>
      <input type="checkbox" id="buscar"/>
    <div  className="search_button">
      <div className="search_button__form-submit">
    
      <input type="search" 
      id="busqueda" className="search_button__form-search"  
       name="filtro" 
       maxLength="25" 
       value={buscar.filtro}
       onChange={handleChange}
      placeholder="Busca y descubre"/> 
      <Link type="submit" onClick={handleSubmit} className="search_button__form-submit__buscar" to='/buscar'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Link>
      </div>
    </div> 
    </>
  )

}

export default BotonBuscar
