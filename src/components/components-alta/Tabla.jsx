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
                <td >Nombre</td>
                <td>Precio</td>
                <td>Precio antiguo</td>
                <td>Stock</td>
                <td>Categoría</td>
                <td>Foto</td>
                <td>Envío</td>
                <td>Acciones</td>
              </tr>
          </thead>
      <tbody className="cuerpo_tabla">
      <tr>{ 
        productos && productos.map((producto)=>(
           <TablaFila producto={producto} key={producto.id}/>
       ))
        }</tr>
      </tbody>
    </table>
    </div>

  )
}

export default Tabla
