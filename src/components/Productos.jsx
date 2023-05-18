import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { obtenerProductosAction } from "../actions/productoActions"
import Producto from "./producto"
const Productos = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    //consultar api
    const cargarProductos = () => dispatch(obtenerProductosAction())
    cargarProductos()
  },[])

  //obtener state
  const productos = useSelector(state => state.productos.productos)

  return (
    <>
        <h2 className='text-center my-5'>Listado de Productos</h2>
        <table className='table table-striped'>
            <thead className='bg-primary table-dark'>
                <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Precio</th>
                    <th scope='col'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.length === 0 ? 'No hay productos' : (
                  productos.map(producto=>(
                    <Producto key={producto.id} producto={producto}/>
                  ))
                )
                }
                
            </tbody>
        </table>
    </>
  )
}

export default Productos
