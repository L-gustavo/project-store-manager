const productModels = require('../models/productModel');

const getAllProduct = async () => {
  const result = await productModels
    .getAllProduct();
  return result;
};

const getByIdProduct = async (id) => {
  if (!id) return false;

  const result = await productModels.getByIdProduct(id);

  return result;
};

module.exports = {
  getAllProduct,
  getByIdProduct,
};
