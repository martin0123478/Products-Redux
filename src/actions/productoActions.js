import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types/index";
import clienteAxios from "../config/axios";
//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());
    try {
      //insertar en API
      await clienteAxios.post("/hols", producto);

      dispatch(agregarProductoExito(producto));
    } catch (error) {
      console.log(error);
      dispatch(agregarProductoError(true));
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
});

//si es producto de guarda en bd
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});
