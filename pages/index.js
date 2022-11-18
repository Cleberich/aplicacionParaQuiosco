import Layout from '../layout/layout'
import useQuiosco from'../hooks/useQuiosco'
import Producto from '../components/Producto'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { formatearDinero } from '../helpers'

export default function Home() {

  const { categoriaActual, pedido, total } = useQuiosco()
  const router = useRouter()
  return (
   <Layout
   pagina={`Menú - Cafetería`}
   >
   <div className=''>
   <h1 className='text-3xl font-bold mt-5'>{categoriaActual?.nombre}</h1>
   <p className='mt-5 text-xl'>Elige y personaliza tu pedido a continuación</p>
   <div className='grid gap-4 menu sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
   {categoriaActual?.productos?.map(producto =>(
    <Producto
    key={producto.id}
    producto={producto}
    />
   ))}
   </div>
   {pedido?.length > 0 ? (
    <div className='subtotal'>
    <Link href='/total' className='text-white text-xl font-bold'>Subtotal: {formatearDinero(total)} </Link>
    </div>
   ): ('')}
   </div>
   </Layout>
  )
}

