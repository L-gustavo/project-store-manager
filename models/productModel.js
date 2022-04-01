const connection = require('./connection');

const getAllProduct = async () => {
  const [result] = await connection
    .execute('SELECT * FROM StoreManager.products');
  return result;
};

const getByIdProduct = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);

  return product[0];
};

const createProduct = async ({ name, quantity }) => {
  const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
  const [result] = await connection.execute(query, [name, quantity]);

  return {
    id: result.insertId,
    name,
    quantity,
  };
};

const getNameExist = async (name) => {
  const query = 'SELECT * FROM StoreManager.products WHERE name = ?';
  const [result] = await connection.execute(query, [name]);

  return result;
};

module.exports = {
  getAllProduct,
  getByIdProduct,
  createProduct,
  getNameExist,
};
