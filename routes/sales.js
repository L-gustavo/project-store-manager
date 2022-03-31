const router = require('express').Router();
const salesController = require('../controllers/salesController');

router.route('/')
  .get(salesController.getAllSales);

router.route('/:id')
  .get(salesController.getByIdSales);

module.exports = router;
