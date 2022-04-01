const productModels = require('../models/productModel');

const getAllProduct = async () => {
  const result = await productModels.getAllProduct();
  return result;
};

const getByIdProduct = async (id) => {
  if (!id) return false;

  const result = await productModels.getByIdProduct(id);
  return result;
};

const createProduct = async (product) => {
  const productExist = await productModels.getNameExist(product.name);
  console.log(productExist);

  if (productExist.length) {
    return { code: 409, message: 'Product already exists' };
  }

  const result = await productModels.createProduct(product);

  return { code: 201, payload: result };
};

module.exports = {
  getAllProduct,
  getByIdProduct,
  createProduct,
};
