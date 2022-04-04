const validateProductId = (req, res, next) => {
  const result = req.body.some(({ productId }) => Number.isInteger(productId));
  if (!result) {
    return res.status(400).json(
      { message: '"productId" is required' },
      );
         }
   next();
};

const validateQuantity = (req, res, next) => {
  const result = req.body.some(({ quantity }) => Number.isInteger(quantity));
  if (!result) {
    return res.status(400).json(
      { message: '"quantity" is required' },
    );
  }
  const result2 = req.body.some(({ quantity }) => quantity <= 0);
    if (result2) {
      return res.status(422).json(
        { message: '"quantity" must be greater than or equal to 1' },
      );
    }
  next();
};

module.exports = {
  validateProductId,
  validateQuantity,
};
