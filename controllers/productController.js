const productService = require('../services/productService');

const getAllProduct = async (req, res, next) => {
  try {
    const product = await productService.getAllProduct();
    if (!product) {
      return res.status(404).json({ message: 'Nenhum produto retornado' });
    }

    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const getByIdProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idProduct = await productService.getByIdProduct(id);

    if (!idProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(idProduct);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const product = await productService.createProduct({ name, quantity });

    if (product.code === 409) {
      return res.status(product.code).json({ message: product.message });
    }

    return res.status(product.code).json(product.payload);
  } catch (error) {
    next(error);
  }
};

const updateProducts = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, quantity } = req.body;
  
      const product = await productService.productUpdate({ id, name, quantity });
  
      if (product.message) {
        return res.status(product.code).json({ message: product.message });
      }
  
      return res.status(product.code).json(product.payload);
    } catch (error) {
      next(error);
    }
};

module.exports = {
  getAllProduct,
  getByIdProduct,
  createProduct,
  updateProducts,
};
