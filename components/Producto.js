import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"


export default function Producto({producto}) {

    const { nombre, precio, id, imagen }= producto
    const { handleClickProducto, handleChangeModal } = useQuiosco()

   
  return (
    <div className="mt-5 border p-3 shadow-lg ml-auto mr-auto bg-white ">
        <Image className=""src={`/assets/img/${imagen}.jpg`} alt={nombre} width={250} height={300}/>
       <div>
        <h1 className="font-bold">{nombre}</h1>
        <h2>${precio}</h2>
       </div>   
    <button
        className="bg-red-600 p-3 w-full  hover:bg-black text-white uppercase"
        onClick={()=>{
            handleClickProducto(producto)
            handleChangeModal()
        }}
        >Agregar
    </button>
    </div>
  )
}
