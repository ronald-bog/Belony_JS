const productoRepository = require("../repositories/productoRepository");

async function getAllProducts() {
  try {
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

    if (!producto) {
      return {
        success: false,
        message: `Producto con id: ${id} no existe en la base de datos.`,
      };
    }

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

    if (!newProducto) {
      return {
        success: false,
        message: "No se pudo crear el producto.",
      };
    }

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

    if (!productoActualizado) {
      return {
        success: false,
        message: "No se pudo actualizar el producto.",
      };
    }

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

    if (!productoDeleted) {
      return {
        success: false,
        message: "No se pudo borrar el producto.",
      };
    }

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
