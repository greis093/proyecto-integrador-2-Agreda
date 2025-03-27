import { useContext, useEffect, useState } from 'react'
import './Card.scss'
import CarritoContext from "../contexts/CarritoContext"

const Card = ({producto}) => {
  const {agregarProductoAlCarritoContext,elProductoEstaEnElCarrito} = useContext(CarritoContext)
  const [valor, setValor] = useState('añadir')

  useEffect(() => {
    // Si el producto ya está en el carrito, actualizar el estado al cargar la página
    if (elProductoEstaEnElCarrito(producto)) {
      setValor("añadido");
    }
  }, [producto, elProductoEstaEnElCarrito]);
  
 
 
  const handleAgregar = () => {
    if (!elProductoEstaEnElCarrito(producto)) {
      agregarProductoAlCarritoContext(producto);
      setValor("añadido");
    }
       
      
  }
  return (
    <div className="card">
    <article className="card__article">
        <div className="card__image-container">
            <img className="card__image" src={producto.foto} alt="texto foto"/>
        </div>
        <div className="card__content">
            <h2 className="card__heading"><a href=''>{producto.nombre}</a></h2>
        <div className="card__description">
              <span className="ProductItem__Price Price Price--highlight Text--subdued">
                 <span  className="lomoney-processed">S/{producto.precio}</span>
              </span>

            <bdi>
              <span  className="ProductItem__Price Price Price--compareAt Text--subdued">
              <span  className="lomoney-processed">S/{producto.precio_antiguo}</span> 
              </span>  
            </bdi> <br/>
            <div className='botones-card'>
            <button className='botones-card__detalle' onClick={()=> handleAgregar(producto)}>Detalle</button>
            <button  className='botones-card__compra' onClick={()=> handleAgregar(producto)}>{valor}</button>
            </div>
        </div>
        </div>
    </article>
    </div>
  )
}

export default Card
