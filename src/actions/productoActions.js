import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types/index";

//Crear nuevos productos
export function crearNuevoProductoAction() {
  return () => {
    console.log("desde action");
  };
}