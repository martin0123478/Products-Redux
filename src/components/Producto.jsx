import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
//redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction,obtenerProductoEditarAction } from '../actions/productoActions'

const Producto = ({producto}) => {
    const navigate = useNavigate()
    const {nombre,precio,id} = producto
    const dispatch = useDispatch()
    //confirmar si desea eliminarlo
    const confirmarProductoEliminar = id =>{
        //preguntar al usuario
        Swal.fire({
        title: '¿Estás seguro?',
        text: "No se puede recuperar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si eliminar',
        cancelButtonText:'Cancelar'
        }).then((result) => {
        if (result.isConfirmed) {
             //pasarlo al action
        dispatch(borrarProductoAction(id))
          
        }
        })

       
    }

    //funcion que redirige de forma programada
       const redireccionEdicion = producto =>{
        dispatch(obtenerProductoEditarAction(producto))
        navigate(`/productos/editar/${producto.id}`)
       }
  return (
    <tr>
        <td>{nombre}</td>
        <td>$ {precio}</td>
        <td className='acciones'>
            <button type='button' onClick={() =>redireccionEdicion(producto)} className="btn btn-primary mr-2">
                Editar
            </button>
            <button
            onClick={()=>confirmarProductoEliminar(id)}
            type='button'
            className='btn btn-danger'>
                Eliminar
            </button>
        </td>
    </tr>
  )
}

export default Producto
