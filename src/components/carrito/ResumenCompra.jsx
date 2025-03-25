import React, { useContext } from 'react'
import CarritoContext from "../../contexts/CarritoContext"
const ResumenCompra = () => {
     const { carrito, 
        subtotalPrecioCarritoContext
         } = useContext(CarritoContext)

         const subtotalgeneral= subtotalPrecioCarritoContext(carrito) 

  return (
    <>
      <div>
        <table>
            <th>Resumen</th>
            <tr>Subtotal : {subtotalgeneral}</tr>
        </table>
      </div>
    </>
  )
}

export default ResumenCompra
