import Image from "next/image"
import  useQuiosco  from '../hooks/useQuiosco'

export default function Cat({categoria}) {
  
  const { handleClickCategoria, categoriaActual } = useQuiosco()
  const { nombre, id, icono} = categoria
  return (
    <div className={`${
          categoriaActual?.id === id  ? 'bg-yellow-500' : '' 
        } flex categorias items-center hover:cursor-pointer gap-10 ml-1 p-3 w-full border-b-2 border-gray-100 hover:bg-yellow-500`}>
        <Image 
          onClick={()=>handleClickCategoria(id)}
          src={`/assets/img/icono_${icono}.svg`} 
          alt="icono" 
          width={70} 
          height={70}
          className=""
          />
        <button
          type="button"
          className="text-2xl font-bold hover:cursor-pointer text-white botonCategoria"
          onClick={()=>handleClickCategoria(id)}
          >
            {nombre}
          </button>
    </div>
  )
}
