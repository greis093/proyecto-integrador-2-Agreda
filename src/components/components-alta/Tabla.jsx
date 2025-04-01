import TablaFila from "./TablaFila"
import './Tabla.scss'
import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext";

const Tabla = () => {
    const { productos } = useContext(ProductosContext);
  return (
  
       <div className="container_tabla" style={{overflow:"scroll"}}>
        <table className="tabla-alta">
          <thead className="cabecera_tabla">
             <tr>
                <th >Nombre</th>
                <th>Precio</th>
                <th>Precio antiguo</th>
                <th>Stock</th>
                <th>Categoría</th>
                <th>Foto</th>
                <th>Envío</th>
                <th>Acciones</th>
              </tr>
          </thead>
      <tbody className="cuerpo_tabla">
      { 
        productos && productos.map((producto)=>(
          <th> <TablaFila producto={producto} key={producto.id}/></th>
       ))
        }
      </tbody>
    </table>
    </div>

  )
}

export default Tabla
