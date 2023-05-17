import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types/index";

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return (dispatch) => {
    dispatch(agregarProducto());
    try {
      dispatch(agregarProductoExito(producto));
    } catch (error) {
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
