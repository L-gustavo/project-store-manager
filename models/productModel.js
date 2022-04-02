const connection = require('./connection');

const getAllProduct = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);
  return result;
};

const getByIdProduct = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);

  return product;
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

const updateProduct = async ({ id, name, quantity }) => {
  const query = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?';

  await connection.execute(query, [name, quantity, id]);
  return {
    id,
    name,
    quantity,
  };
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';

  await connection.execute(query, [id]);
};

module.exports = {
  getAllProduct,
  getByIdProduct,
  createProduct,
  getNameExist,
  updateProduct,
  deleteProduct,
};
