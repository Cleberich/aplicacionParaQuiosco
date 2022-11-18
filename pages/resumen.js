import Layout from "../layout/Layout.js"
import useQuiosco from "../hooks/useQuiosco"
import ItemResumen from '../components/ItemResumen'


export default function Resumen() {
  
  const { pedido } = useQuiosco()
  return (
    <Layout>
       <div >
       <h1 className="text-2xl font-bold">Resumen</h1>
        <p className="text-xl">Revisa tu pedido</p>
        <div >
          {pedido.length == 0 ? (
            <h2>Aún no tienes productos agregados a tu pedido</h2>
          ):(
            pedido.map(producto => (
              <ItemResumen
              key={producto.id}
              producto={producto}
              />
            ))
          )}
        </div>
       </div>
    </Layout>
  )
}
