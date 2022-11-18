import Image from "next/image"
import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

const ItemResumen = ({producto}) => {

  const { handleEliminarProducto, handleEditarProducto } = useQuiosco()

  return (
    <div className="flex items-center p-5  border bg-white shadow-lg my-3 ml-auto mr-auto">
        <div className="w-1/6">
            <Image 
            alt={producto.nombre}
            src={`/assets/img/${producto.imagen}.jpg`}
            width={200}
            height={300}
            />
        </div>
        <div className="p-4 w-4/6">
            <h2 className="text-2xl font-bold">{producto.nombre}</h2>
            <p>Precio {formatearDinero(producto.precio)}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p className="text-sm">Subtotal: {formatearDinero(producto.precio * producto.cantidad)}</p>
        </div>
        <div className="flex w-1/6">
        <button 
              type="button"
              onClick={()=> handleEliminarProducto(producto.id)}
              className="bg-red-600 p-1 rounded-md text-white mt-3"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
            <button 
              type="button"
              onClick={()=>handleEditarProducto(producto.id)}
              className="bg-yellow-500 p-1 rounded-md text-black mt-3 ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </button>
        </div>

    </div>
  )
}

export default ItemResumen