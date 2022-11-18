import Layout from '../layout/layout'
import useQuiosco from'../hooks/useQuiosco'
import Producto from '../components/Producto'

export default function Home() {

  const { categoriaActual } = useQuiosco()
  
  return (
   <Layout
   pagina={`Menú - ${categoriaActual?.nombre}`}
   >
   <div className=''>
   <h1 className='text-3xl font-bold '>{categoriaActual?.nombre}</h1>
   <p className='mt-5 text-xl'>Elige y personaliza tu pedido a continuación</p>
   <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
   {categoriaActual?.productos?.map(producto =>(
    <Producto
    key={producto.id}
    producto={producto}
    />
   ))}
   </div>
   </div>
   </Layout>
  )
}

