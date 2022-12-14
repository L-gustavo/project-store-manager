const productValidateName = (req, res, next) => {
  const { name } = req.body;
  const NUMBER = 5;
  if (!name) {
    return res.status(400).json(
      { message: '"name" is required' },
    );
  }

  if (name.length < NUMBER) {
    return res.status(422).json(
      { message: '"name" length must be at least 5 characters long' },
    );
  }

  next();
};

const productValidateQuantity = (req, res, next) => {
  const { quantity } = req.body;
  const NUMBER = 1;
  if (quantity < NUMBER) {
    return res.status(422).json(
      { message: '"quantity" must be greater than or equal to 1' },
    );
  }

  if (!quantity) {
    return res.status(400).json(
      { message: '"quantity" is required' },
    );
  }

  next();
};

module.exports = {
  productValidateName,
  productValidateQuantity,
};
