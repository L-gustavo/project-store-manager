const router = require('express').Router();
const productController = require('../controllers/productController');

const {
  productValidateName,
  productValidateQuantity,
} = require('../middlewares/productValidate');

router.route('/')
  .get(productController.getAllProduct)
  .post(
    productValidateName,
    productValidateQuantity,
    productController.createProduct,
  );

router.route('/:id')
  .get(productController.getByIdProduct);

module.exports = router;
