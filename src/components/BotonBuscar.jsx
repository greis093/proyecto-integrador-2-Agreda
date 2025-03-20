import './BotonBuscar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faX} from '@fortawesome/free-solid-svg-icons'
const BotonBuscar = () => {
  return (
    <>
      <input type="checkbox" id="buscar"/>
    <div  className="search_button">
      <div className="search_button__form-submit">
    
      <input type="search" id="busqueda" className="search_button__form-search"  placeholder="Busca y descubre"/> 
      <button type="submit" className="search_button__form-submit__buscar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <button type="submit" className="search_button__form-submit__eliminar">
      <FontAwesomeIcon icon={faX} />
    </button>
      </div>
    </div> 
    </>
  )

}

export default BotonBuscar
