const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection
    .execute(
      'INSERT INTO StoreManager.sales () VALUES (?, ?)',
    );

  return result;
};

const getByIdProduct = async (id) => {
  const query = 'SELECT * FROM StoreManager.sales WHERE id = ?';
  const [sales] = await connection.execute(query, [id]);

  return sales[0];
};

module.exports = {
  getAllSales,
  getByIdProduct,
};