import { useRouter } from "next/router"
import useQuiosco from "../hooks/useQuiosco"


const pasos = [
    {paso: 1, nombre: "Menú", url: '/'},
    {paso: 2, nombre: "Pedido", url: '/resumen'},
    {paso: 3, nombre: "Total", url: '/total'}
]

const Pasos = () => {

    const { handleChangePaso, paso, pedido, valor, setValor } = useQuiosco()
    
    const  router  = useRouter()

    const calcularProgreso = () =>{
    
        if( paso == 1){
            setValor(10)
        } else if (paso === 2){
            setValor(55)
        } else {
            setValor(100)
        }

       return valor
    }
    
  return (
    <>
        <div className="flex justify-between gap-4 mb-5">
            {pasos.map(paso => (
                <button
                onClick={() => {
                    router.push(paso.url),
                    handleChangePaso(paso.paso)
                }}
                className="cursor:pointer text-2xl font-bold"
                key={paso.paso}
                >{paso.nombre}
                </button>
            ))}
        </div>
            <div className='w-100 block leading-none bg-red-600 rounded-full text-xs text-red-600' style={{width: `${calcularProgreso()}%`}}>.</div>
    </>
  )
}

export default Pasos