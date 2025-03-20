import './Card.scss'

const Card = ({producto}) => {
  return (
    <div className="card">
    <article className="card__article">
        <div className="card__image-container">
            <img className="card__image" src={producto.foto} alt="texto foto"/>
        </div>
        <div className="card__content">
            <h2 className="card__heading"><a href="">{producto.nombre}</a></h2>
        <div className="card__description">
            <span className="ProductItem__Price Price Price--highlight Text--subdued">
                 <span  className="lomoney-processed">{producto.precio}</span>
                 </span>
            <bdi>
              <span  className="ProductItem__Price Price Price--compareAt Text--subdued">
              <span  className="lomoney-processed">{producto.precio_antiguo}</span> 
              </span>  
            </bdi>
        </div>
        </div>
    </article>
    </div>
  )
}

export default Card
