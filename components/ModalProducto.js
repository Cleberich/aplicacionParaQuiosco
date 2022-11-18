import useQuiosco from "../hooks/useQuiosco"
import Image from "next/image"
import { formatearDinero } from '../helpers'
import { useState, useEffect } from "react"

export default function ModalProducto() {
    const { producto, handleChangeModal,handleAgregarPedido, pedido } = useQuiosco()
    const { nombre, precio, imagen } = producto
    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)
    

    
   useEffect(()=>{
    if(pedido.some((pedidoState) => pedidoState.id === producto.id)){
        const productoEdicion = pedido.find((pedidoState) => pedidoState.id === producto.id)
        setEdicion(true)
        setCantidad(productoEdicion.cantidad)
   }
},[producto, pedido])
    
    const decrement = ()=>{
       if(cantidad > 1) {
        setCantidad(cantidad-1)
       }
    }
    const increment = ()=>{
       if(cantidad < 6){
        setCantidad(cantidad+1)
       }
    }
    
  return (
    <div className="p-4 rounded-md flex">
        <div className="md:w-1/3">
            <Image 
            className="w-full"
            src={`/assets/img/${imagen}.jpg`}
            alt={nombre}
            width={550}
            height={600}
            />
        </div>
        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={()=>handleChangeModal()}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold m-5">{nombre}</h1>
            <p className="text-5xl text-red-600 font-bold m-5">{formatearDinero(precio)}</p>
            <div className="m-5 flex gap-4">
                <button
                    type="button"
                    onClick={()=>decrement()}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <p className="text-2xl text-black">{cantidad}</p>
                <button
                    type="button"
                     onClick={()=>increment()}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <button
                onClick={()=>handleAgregarPedido({...producto, cantidad})}
                type="button"
                className="bg-black p-2 text-white ml-5 hover:bg-gray-800 rounded-lg"
                >{edicion ? ('Actualizar cambios') : 'Añadir al pedido'}
            </button>
        </div>
    </div>
  )
}
