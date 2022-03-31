const productService = require('../services/productService');

const getAllProduct = async (req, res, next) => {
  try {
    const product = await productService.getAllProduct();

    if (!product) {
      return res.status(400).send({ message: 'Nenhum produto retornado' });
    }

    res.status(200).send(product);
  } catch (error) {
    next(error);
  }
};

const getByIdProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idProduct = await productService.getByIdProduct(id);

    if (!idProduct) {
      return res.status(400).send({ message: 'Product not found' });
    }

    return res.status(200).send(idProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProduct,
  getByIdProduct,
};
