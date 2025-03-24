import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { peticionesHttp } from "../helpers/peticiones-http";

//! 1. Creación del contexto
const CarritoContext = createContext()
var cont = 0
//! 2. Armamos en Provider
const CarritoProvider = ({children}) => {
    const urlCarrito= import.meta.env.VITE_BACKEND_CARRITO
    const [cantCarrito, setcantCarrito] = useState(cont)
  const[agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito]=useLocalStorage('carrito',[])
  
  function elProductoEstaEnElCarrito(producto){
    //return true/false
    const nuevoArray = carrito.filter(prod=> prod.id === producto.id)
    // 1 -> El producto ya esta en el carrito (true)
    // 0 -> El producto no esta en el carrito (false)
    return nuevoArray.length

  }
  function obtenerProductoDeCarrito(producto){
    // Si encuentra el producto lo retorna
    return carrito.find(prod => prod.id === producto.id)
  }
  const agregarProductoAlCarritoContext= (producto) => {
    console.log('ya estoy en el agregar del contexto', producto)
    setcantCarrito(producto)
    // Averiguo si esta o no esta en el carrito
    if(!elProductoEstaEnElCarrito(producto)){
        console.log('No esta en el carrito')
        producto.cantidad = 1
        agregarAlCarrito(producto) //Agrega el producto en el localStorage y modifica el estado del app
    } else{
        console.log('Ya esta en el carrito')
        const productoDelCarrito = obtenerProductoDeCarrito(producto)
        productoDelCarrito.cantidad++
        window.localStorage.setItem('carrito', JSON.stringify(carrito))
    }

  }  
    const eliminarProductoDelCarritoContext = (id) =>{
         eliminarDelCarrito(id)
    }
    const limpiarCarritoContext = () => {
         limpiarCarrito()  
  }

    const guardarCarritoBackendContext = async() =>{
        try {
            const dataCarrito={
                createAt: Date.now(),
                carrito
            }
            const options={
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body:JSON.stringify(dataCarrito)
            }
           const carritoGuardado= await peticionesHttp(urlCarrito,options)
           console.log(carritoGuardado)
           limpiarCarrito()
        } catch (error) {
            console.error('[guardarCarritoBackendContext]', error)
        }
    }
    const calcularCantidadProductosCarritoContext=(carrito)=>{
        console.log("este es el carrito",carrito)
        return carrito.reduce((total, producto) => total + producto.cantidad, 0);
     
    
    }
  const data={
        agregarProductoAlCarritoContext,
        eliminarProductoDelCarritoContext,
        limpiarCarritoContext,
        guardarCarritoBackendContext,
        calcularCantidadProductosCarritoContext,
        cantCarrito,
        setcantCarrito,
        carrito
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

//! 3. Exportaciones
export {CarritoProvider}
export default CarritoContext