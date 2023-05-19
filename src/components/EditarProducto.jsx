import {useDispatch,useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { editarProductoAction } from '../actions/productoActions'
const EditarProducto = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [producto,guardarProducto] = useState({nombre:'',precio:''})

    const producteditar = useSelector(state =>state.productos.productoeditar)
  
    useEffect(()=>{
        guardarProducto(producteditar)
    },[producteditar])
    const {nombre,precio,id} = producto

    //leer datos del formulario
    const onChangeFormulario = e =>{
        guardarProducto({
            ...producto,
            [e.target.name]:e.target.value,
            
        })
    }

    const submitEditarProducto = e =>{
        e.preventDefault()
        dispatch(editarProductoAction(producto)) 
        navigate('/')
    }

  return (
     <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center mb-4 font-weigth-bold'>
                        Editar Prducto
                    </h2>

                    <form onSubmit={submitEditarProducto}>
                        <div className='form-group'>
                            <label>Nombre Producto</label>
                            <input className='form-control' type="text"
                            placeholder='Nombre Producto'
                            name='nombre'
                            value={nombre} 
                            onChange={onChangeFormulario}/>
                        </div>
                        <div className='form-group'>
                            <label>Precio Producto</label>
                            <input className='form-control' type="number"
                            placeholder='Precio Producto'
                            name='precio'
                            value={precio} 
                            onChange={onChangeFormulario}
                            />
                        </div>

                        <button type='submit' className='btn btn-primary font-weight-bold
                        text-uppercase d-block w-100'>
                            Guardar Cambios
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditarProducto
