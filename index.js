require('dotenv').config();

const express = require('express');

const productRouter = require('./routes/product');
const salesRouter = require('./routes/sales');

const app = express();
app.use(express.json());

app.use('/products', productRouter);
app.use('/sales', salesRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
