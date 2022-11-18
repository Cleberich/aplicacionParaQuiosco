import Image from "next/image"
import useContext from 'react'
import  useQuiosco  from '../hooks/useQuiosco'
import Cat from './Cat'


export default function Sidebar() {
  const { categorias } = useQuiosco()
  
  return (
    <div className="">
      <div className="flex items-center">
        <Image className="ml-10" src='/assets/img/logo.svg' width={200} height={200} alt="logo"/>
      </div>
      <div>
          <nav className="mt-10 ">
            {categorias.map(categoria =>(
              <Cat
              key={categoria.id}
              categoria={categoria}
              />
            ))}
          </nav>
      </div>
    
    </div>
  )
}
