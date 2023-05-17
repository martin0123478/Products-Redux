import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
//Actions
import {crearNuevoProductoAction} from '../actions/productoActions'
const NuevoProducto = () => {
   //utilizar useDispatch y crea una funcion
    const dispatch = useDispatch()
    //mandar a llamar action de productoActions
    const agregarProducto =()=> dispatch(crearNuevoProductoAction())
    
    const submitNuevoProducto = e =>{
        e.preventDefault()
        //validar form

        //crear nuevo producto
        agregarProducto()
    }
  return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center mb-4 font-weigth-bold'>
                        Agregar Nuevo Prducto
                    </h2>

                    <form
                    onSubmit={submitNuevoProducto}>
                        <div className='form-group'>
                            <label>Nombre Producto</label>
                            <input className='form-control' type="text"
                            placeholder='Nombre Producto'
                            name='nombre' />
                        </div>
                        <div className='form-group'>
                            <label>Precio Producto</label>
                            <input className='form-control' type="number"
                            placeholder='Precio Producto'
                            name='precio' />
                        </div>

                        <button type='submit' className='btn btn-primary font-weight-bold
                        text-uppercase d-block w-100'>
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NuevoProducto
