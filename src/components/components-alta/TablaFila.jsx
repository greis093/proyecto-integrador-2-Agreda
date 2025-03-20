import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import { useNavigate } from "react-router";
import Swal from "sweetalert2";


const TablaFila = ({producto}) => {
  const {eliminarProductoContext,setProdutoAEditar} =useContext(ProductosContext)
  const navigate = useNavigate()
  const handleEliminar =(id)=>{
    //lógica de Sweet Alert
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar el producto!"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductoContext(id)
        Swal.fire({
          title: "Deleted!",
          text: "Su archivo ha sido eliminado.",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "No lo borraste!",
          text: "El producto no se borro",
          icon: "info"
        });
      }
    });
      
  }
  
  const handleEditar = (producto) =>{
    setProdutoAEditar(producto)
  }

  const handleVer = (id) => {
    console.log(id)
    navigate(`/productos/detalle/${id}`)
  }
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.precio_antiguo}</td>
      <td>{producto.stock}</td>
      <td>{producto.categoria}</td>
      <td>
        <img src={producto.foto} alt={producto.nombre} style={{width:'40px'}}/>
      </td>
      <td>{producto.envio ? 'si' : 'no'}</td>
      <td>
        <button  onClick={() => handleVer(producto.id)}>Ver</button>
        <button onClick={()=>handleEditar(producto)}>Editar</button>
        <button onClick={()=>handleEliminar(producto.id)}>Borrar</button>
      </td>
    </tr>
  )
}

export default TablaFila
