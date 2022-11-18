import Head from "next/head"
import Modal from "react-modal"
import ModalProducto from "../components/ModalProducto"
import Sidebar from "../components/Sidebar"
import useQuiosco from "../hooks/useQuiosco"
import { ToastContainer } from "react-toastify"
import Pasos from "../components/Pasos"
import 'react-toastify/dist/ReactToastify.css'


export default function Layout({children, pagina}) {

  const { modal, producto } = useQuiosco()
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#__next');
  return (
    <>
    <Head>
        <title>{pagina}</title>
        <meta name="description" content="Quiosco cafeteria"/>
    </Head>
    <div className="md:flex">
        <aside className="md:flex sm:w-1/1 md:w-4/12 xl:w-1/4 2xl:w-1/5 bg-red-700 sticky -top-44" >
            <Sidebar/>

        </aside>
        <main className="md:flex lg:flex sm:w-1/1 md:w-8/12 xl:w-3/4 2xl:w-4/5 bg-gray-100 h-screen overflow-y-scroll">
            
            <div className="p-10 w-full">
              <Pasos/>
              {children}
            </div>
        </main>
    </div>
    {modal && (
      <Modal
      isOpen={modal}
      style={customStyles}
      >
        <ModalProducto />
      </Modal>
    )}
    <ToastContainer/>
    </>
  )
}
