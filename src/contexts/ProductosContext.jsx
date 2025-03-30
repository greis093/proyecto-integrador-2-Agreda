import { createContext, useEffect, useState } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";

//! CREANDO CONTEXTO

//! 1.Creamos el Context
const ProductosContext= createContext()

//! 2.Armamos el Provider
const ProductosProvider = ({ children}) =>{
    const url= import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const [productoAEditar,setProductoAEditar]= useState(null)
    useEffect(()=>{
        getAllProductos()
    },[])

    const getAllProductos = async ()=>{
        try {
            const prods = await peticionesHttp(url, {})
            setProductos(prods)
        } catch (error) {
            console.error('[getAllProductos]',error)
        }
    }
    const crearProdutoContext = async(productoNuevo)=>{
            try {
                delete productoNuevo.id

                const options={
                    method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body:JSON.stringify(productoNuevo)
                }
                const prods = await peticionesHttp(url, options)
                //console.log(prods)
                const nuevoEstadoProductos= [...productos, prods]
                setProductos(nuevoEstadoProductos)

            } catch (error) {
                console.error('[crearProductoContext]',error)
            }
    }
    const actualizarProductoContext =async(productoAEditar) =>{
        
        try {
            const options={
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body:JSON.stringify(productoAEditar)
            }
            const urlActualizar = url + productoAEditar.id
            const productoEditado= await peticionesHttp (urlActualizar, options)
            console.log(productoEditado)

            const nuevoEstadoProductos= productos.map(prod =>
                prod.id === productoEditado.id ? productoEditado : prod)
                setProductos(nuevoEstadoProductos)
        } catch (error) {
            console.error('[actualizarProductoContext]',error)
        }
    }
    const eliminarProductoContext =async(id) =>{
            try {
                const urlEliminacion = url + id
                const options={
                    method: 'DELETE'
                }
                const prodEliminado = await peticionesHttp(urlEliminacion,options)
                    console.log(prodEliminado)
                const nuevoEstadoProductos = productos.filter(prod => prod.id !==id)
                setProductos(nuevoEstadoProductos)
            } catch (error) {
                console.error('[eliminarProductoContext]',error)
            }
    }
    const filtrarProductosATienda=async(filtroProducto)=>{
        const prodsFiltrados = productos.filter(producto => {
                
            if(filtroProducto.love && producto.categoria.indexOf("love") !=-1){
                return producto
            }
            if(filtroProducto.box && producto.categoria.indexOf("box") !=-1){
                return producto
            }
            if(filtroProducto.bouquet && producto.categoria.indexOf("bouquet") !=-1){
                return producto
            }
            if(filtroProducto.graduacion && producto.categoria.indexOf("graduacion") !=-1){
                return producto
            }
        }
          );
     setProductosFiltrados(prodsFiltrados) 
    }
    const botonFiltrarNavbar= (palabras)=>{
        const palabrasSeparadas = palabras.toLowerCase().split(/\s+/);
        console.log("ffxx",productos)
        if (!productos) {
            console.warn("No hay productos disponibles para filtrar");
            return;
        }
        const filtro =productos.filter(producto =>
            palabrasSeparadas.some(f => producto.categoria.includes(f))||
            // Verifica si el nombre incluye alguna palabra clave
            palabrasSeparadas.some(f => producto.nombre.toLowerCase().includes(f.toLowerCase()))
            ||
            // Verifica si el nombre incluye alguna palabra clave
            palabrasSeparadas.some(f => producto.detalles.toLowerCase().includes(f.toLowerCase()))
        );
        setProductosFiltrados(filtro);
        console.log(filtro)
    }

    const data={
        productos,
        crearProdutoContext,
        actualizarProductoContext,
        eliminarProductoContext,
        productoAEditar,  
        filtrarProductosATienda,
        setProductoAEditar,
        botonFiltrarNavbar,
        productosFiltrados
    }
    return<ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}

//! 3. Exportamos el Context y el Provider
export{ ProductosProvider}
export default ProductosContext