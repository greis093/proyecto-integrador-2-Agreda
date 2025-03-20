import './Formulario.scss'
import { useContext, useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"


const Formulario = () => {
    const {crearProdutoContext, 
        productoAEditar, 
        setProductoAEditar,
        actualizarProductoContext} = useContext(ProductosContext)
  const formInicial={
      id:null,
      nombre:'',
      precio:'',
      precio_antiguo:'',
      stock:'',
      categoria:'',
      detalles:'',
      foto:'',
      envio:false
  }
  useEffect(()=>(
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
  ),[productoAEditar])
      const [form, setForm] = useState(formInicial)

      const handleSubmit =(e)=>{
        e.preventDefault()
        if (form.id === null){
            crearProdutoContext(form)
        } else{
            actualizarProductoContext(form)
        }
      }

      const handleChange =(e) =>{
          //console.dir(e.target)
          const { type, name, checked, value} = e.target
          //debugger
          setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
          })
      }

      const handleReset =()=>{
          setForm(formInicial)
          setProductoAEditar(null)
      }
  return (
    <>
      <h2 className="titulo_formulario"> Agregar : Editar</h2>
        <div className="formu">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="formulario__fila">
            <label  className='formulario__datos'htmlFor="lbl-nombre">Nombre</label>
            <input  className='formulario__input'type="text" 
            id="lbl-nombre" 
            name="nombre" 
            value={form.nombre} 
            onChange={handleChange} />
        </div>
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-precio">Precio</label>
            <input className='formulario__input' type="text" 
            id="lbl-precio" 
            name="precio" 
            value={form.precio} 
            onChange={handleChange}/>
        </div>
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-precio_antiguo">precio antiguo</label>
            <input className='formulario__input' type="text" 
            id="lbl-precio_antiguo" 
            name="precio_antiguo" 
            value={form.precio_antiguo} 
            onChange={handleChange}/>
        </div>
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-stock">Stock</label>
            <input className='formulario__input' type="text" 
            id="lbl-stock" 
            name="stock" 
            value={form.stock} 
            onChange={handleChange}/>
        </div>
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-categoria">Categoria</label>
            <input className='formulario__input' type="text" 
            id="lbl-categoria" 
            name="categoria" 
            value={form.categoria} 
            onChange={handleChange}/>
        </div>
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-detalle">Detalles</label>
            <input className='formulario__input' type="text" 
            id="lbl-detalle" 
            name="detalles" 
            value={form.detalles} 
            onChange={handleChange}/>
        </div >
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-foto">Foto</label>
            <input className='formulario__input' type="text" 
            id="lbl-foto" 
            name="foto" 
            value={form.foto} 
            onChange={handleChange}/>
        </div>
        <div>
            <label className='formulario__datos' htmlFor="lbl-envio">Envio</label>
            <input className='formulario__check' type="checkbox" 
            id="lbl-envio" 
            name="envio" 
            checked={form.envio} 
            onChange={handleChange}/>
        </div>
        <div className='botones'>
        <button  className="formulario__submit" type="submit" onClick={handleSubmit}>Guardar : Editar</button>
        <button className="formulario__reset" type="reset" onClick={handleReset}>Limpiar</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Formulario
