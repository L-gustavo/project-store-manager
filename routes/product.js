const router = require('express').Router();
const productController = require('../controllers/productController');

const {
  productValidateName,
  productValidateQuantity,
} = require('../middlewares/productValidate');

router.route('/')
  .get(productController.getAllProduct)
  .post(productValidateName,
    productValidateQuantity,
    productController.createProduct);

router.route('/:id')
  .get(productController.getByIdProduct)
  .put(productValidateName,
    productValidateQuantity,
    productController.updateProducts)
  .delete(productController.deleteProduct);

module.exports = router;
