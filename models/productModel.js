const connection = require('./connection');

const getAllProduct = async () => {
  const [result] = await connection
    .execute(
      'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)',
    );

  return result;
};

const getByIdProduct = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);

  return product[0];
};

module.exports = {
  getAllProduct,
  getByIdProduct,
};
