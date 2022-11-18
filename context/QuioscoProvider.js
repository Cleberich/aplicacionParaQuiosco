import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) =>{
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto,setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [paso, setPaso] = useState(1)
    const [valor, setValor] = useState(10)
    const [nombre,setNombre] = useState('')
    const [total, setTotal] = useState(0)

    const router = useRouter()

    const handleAgregarPedido =({categoriaId, ...producto})=>{
        if(pedido.some(productoState => productoState.id === producto.id)){
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado correctamente!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        } else {
            setPedido([...pedido,producto])
            toast.success('Agregado al pedido!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        setModal(false)
        
     }

    const handleChangePaso = (paso) =>{
        setPaso(paso)
        setValor(35)
        
    }
   
    const obtenerCategorias = async () =>{
        const { data } = await axios('/api/categorias')
        
        setCategorias(data)
    }

    useEffect(()=>{
        obtenerCategorias()
    },[])
    
    useEffect(()=>{
        setCategoriaActual(categorias[0])
    },[categorias])

    const handleClickCategoria =id=>{
       const cate = categorias.filter(cat => cat.id === id)
       setCategoriaActual(cate[0]);
       router.push('/')
       
    }
    const handleClickProducto =producto=>{
        setProducto(producto)
    }
    const handleChangeModal = () =>{
        setModal(!modal)
    }
    const handleEditarProducto = id =>{
        const productoActualizado = pedido.filter(producto => producto.id === id)
        setProducto(productoActualizado[0])
       setModal(!modal)
    }
    const handleEliminarProducto = (id)=>{
        const pedidoActualizado = pedido.filter(prod => prod.id !== id)
        setPedido(pedidoActualizado)
    }
    const colocarOrden = async(e) =>{
        e.preventDefault()
        try {
            await axios.post('/api/ordenes', {pedido, nombre, total, fecha: Date.now().toString()})
            setCategoriaActual(categorias[1])
            setPedido([])
            setNombre('')
            setTotal(0)
            toast.success('Pedido realizado correctamente')
            setTimeout(()=>{
                router.push('/')
            }, 1000)
        } catch (error) {
            console.log(error);
        }
      }

      useEffect(()=>{
        const nuevoTotal = pedido.reduce((total,producto) => (producto.precio * producto.cantidad) + total,0)
        setTotal(nuevoTotal)
    }, [pedido])

    
    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                handleClickCategoria,
                categoriaActual,
                handleClickProducto,
                producto,
                modal,
                handleChangeModal,
                pedido,
                handleAgregarPedido,
                handleChangePaso,
                paso,
                valor,
                setValor, 
                handleEliminarProducto,
                handleEditarProducto,
                nombre,
                setNombre,
                colocarOrden, 
                total
            }}
        >

        {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext