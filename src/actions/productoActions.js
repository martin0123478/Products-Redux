import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
} from "../types/index";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());
    try {
      //insertar en API
      await clienteAxios.post("/productos", producto);

      dispatch(agregarProductoExito(producto));

      //alerta
      Swal.fire("Correcto", "El producto se agrego correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(agregarProductoError(true));
      //mensaje error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error,intenta de nuevo",
      });
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

//Funcion para descargar lista de productos
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());
    try {
      const resp = await clienteAxios.get("/a");
      dispatch(descargaProductosExitosa(resp.data));
    } catch (error) {
      console.log(error);
      dispatch(descargaProductosError());
    }
  };
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true,
});

const descargaProductosExitosa = (productos) => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos,
});
const descargaProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: true,
});
