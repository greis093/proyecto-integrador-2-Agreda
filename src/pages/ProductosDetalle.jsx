import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Spinner from "../components/spinner/Spinner"


const ProductosDetalle = () => {

  const { id } = useParams()
 

  const [productoDetalle, setProductoDetalle] = useState() // productoDetalle = {}

  useEffect(() => {
    console.log("aqui")
    getOne(id)
    
  },[])

  const getOne = async () => {

    // Verbo Get
    // http://localhost:8080/productos/id

    const urlGetOne = import.meta.env.VITE_BACKEND_PRODUCTOS + id

    try {
      const res = await fetch(urlGetOne)

      if (!res.ok) {

        throw new Error('No se pudo obtener el producto')
      }

      const data = await res.json()
      setProductoDetalle(data)
      
    } catch (error) {
    
     console.error(error)
    }

  }
  

  return (
    <>
      <h1>Producto detalle</h1>

      {
        productoDetalle ? 
          (
            <>
              <p>El nombre del producto: {productoDetalle.nombre}</p>
              <p> El stock del producto es: {productoDetalle.stock}</p>
              <p>El precio: {productoDetalle.precio}</p>
              <p>El precio antiguo: {productoDetalle.precio_antiguo}</p>
              <p>El detalle del producto: {productoDetalle.detalles}</p>
             <p>La foto del producto:</p>
             <img src={productoDetalle.foto} alt={productoDetalle.nombre} style={{width:'260px'}}/>

            </>
          ) :
          (
            <Spinner />
          )

      }
    </>
  )
}

export default ProductosDetalle