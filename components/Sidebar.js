import Image from "next/image"
import Link from "next/link"
import  useQuiosco  from '../hooks/useQuiosco'
import Cat from './Cat'


export default function Sidebar() {
  const { categorias } = useQuiosco()
  
  return (
    <div className="">
      <div className="flex items-center">
        <Link href={'/'}><Image className="ml-10 logo" src='/assets/img/logo.svg' width={200} height={200} alt="logo"/></Link>
      </div>
      <div>
          <nav className="mt-10 categorias">
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
