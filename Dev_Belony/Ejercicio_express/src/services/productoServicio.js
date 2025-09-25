const productoRepository = require("../repositories/productoRepository");
//const jwt = require("jsonwebtoken");
//require("dotenv").config({ quiet: true });

async function getAllProducts() {
  //const tokenSplit = token.split(" ")[1];

  try {
    //const verificarToken = jwt.verify(tokenSplit, process.env.JWT_SECRET);
    //console.log(verificarToken);
    const productos = await productoRepository.getAllProducts();
    if (productos.length === 0) {
      return {
        message: "La base de datos esta vacia.",
      };
    }
    return {
      success: true,
      data: productos,
      message: "Lista de productos",
    };
  } catch (error) {
    return {
      success: false,
      message: "ocurrio un error en la base de datos",
    };
  }
}

async function getProductById(id) {
  try {
    const producto = await productoRepository.getProductById(id);
    return {
      success: true,
      data: producto,
      message: `Producto con id: ${id}`,
    };
  } catch (error) {
    return {
      success: false,
      message: "Ocurrió un error al consultar la base de datos.",
    };
  }
}

async function postProduct(id, descripcion, valor) {
  try {
    const newProducto = await productoRepository.postProduct(
      id,
      descripcion,
      valor
    );

    return {
      success: true,
      message: "El producto se creó correctamente.",
      data: newProducto,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error al insertar el nuevo producto.",
      error: error.message,
    };
  }
}

async function putProduct(id, descripcion, valor) {
  try {
    const productoActualizado = await productoRepository.putProduct(
      id,
      descripcion,
      valor
    );

    return {
      success: true,
      message: "El producto se actualizó correctamente.",
      data: productoActualizado,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error al actualizar el producto.",
      error: error.message,
    };
  }
}

async function deleteProduct(id) {
  try {
    const productoDeleted = await productoRepository.deleteProduct(id);
    return {
      success: true,
      message: "El producto se borro correctamente.",
      data: productoDeleted,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error al borrar el producto.",
      error: error.message,
    };
  }
}
module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
};
