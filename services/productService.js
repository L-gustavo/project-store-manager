const productModels = require('../models/productModel');

const getAllProduct = async () => {
  const result = await productModels.getAllProduct();
  return result;
};

const getByIdProduct = async (id) => {
  if (!id) return false;

  const result = await productModels.getByIdProduct(id);
  return result[0];
};

const createProduct = async (product) => {
  const productExist = await productModels.getNameExist(product.name);

  if (productExist.length) {
    return { code: 409, message: 'Product already exists' };
  }

  const result = await productModels.createProduct(product);

  return { code: 201, payload: result };
};

const productUpdate = async (product) => {
  const productAtual = await productModels.getByIdProduct(product.id);

  if (!productAtual.length) {
    return { code: 404, message: 'Product not found' };
  }

  const result = await productModels.updateProduct(product);
  return { code: 200, payload: result };
};

const deleteProduct = async (id) => {
  const excludeProd = await productModels.getByIdProduct(id);

  if (!excludeProd.length) {
    return { code: 404, message: 'Product not found' };
  }

  await productModels.deleteProduct(id);
  return { code: 204 };
};

module.exports = {
  getAllProduct,
  getByIdProduct,
  createProduct,
  productUpdate,
  deleteProduct,
};
