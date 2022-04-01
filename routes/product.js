const router = require('express').Router();
const productController = require('../controllers/productController');

// const {
//   productValidateName,
//   productValidateQuantity,
// } = require('../middlewares/productValidate');

router.route('/')
  .get(productController.getAllProduct)
  .post();

router.route('/:id')
  .get(productController.getByIdProduct);

module.exports = router;
