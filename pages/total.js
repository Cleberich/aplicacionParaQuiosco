import Layout from '../layout/Layout'
import { useEffect, useCallback, use } from 'react';
import useQuiosco from '../hooks/useQuiosco';
import { formatearDinero } from '../helpers';

export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()
  
  const comprobarPedido =useCallback(()=>{
    return pedido.length === 0 || nombre === ''
    
  }, [pedido, nombre])

  useEffect(()=>{
    comprobarPedido()
  },[pedido, comprobarPedido])

  return (
    <Layout 
    pagina={'Total'}
    >
      <div className=''>
            <h1 className='text-3xl font-bold mt-5'>Total</h1>
            <p className='mt-5 text-xl'>Ya casi terminas tu pedido...</p>
      </div>
      <div>
        <form className='mt-5' onSubmit={colocarOrden}>
          <label htmlFor='nombre' className='uppercase text-xl font-bold block'>Nombre</label>
          <input
              type="text"
              id="nombre"
              className="w-full lg:w-1/3 p-2 bg-slate-200 rounded-md mt-3"
             placeholder='Ingresa tu nombre'
             value={nombre}
             onChange={e => setNombre(e.target.value)}
          />
        <div className='mt-10'>
          <p>Total a pagar <span className='font-bold'>{formatearDinero(total)}</span></p>
        </div>
        <div className='mt-5'>
          <input 
            type="submit"
            className={`${comprobarPedido() ? 'bg-gray-400 cursor-not-allowed' : 'bg-black cursor-pointer'} text-white text-center p-2 w-full lg:w-auto rounded-md`}
            value="Confirmar pedido"
            disabled={comprobarPedido()}
          />
        </div>
          </form>
      </div>
      </Layout>
  )
}
