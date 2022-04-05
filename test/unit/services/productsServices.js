const sinon = require('sinon');
const { expect } = require('chai');

const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

describe('testing product service', () => {
  describe('getAllProduct function', () => {
    describe('when it returns the products', () => {
      const listProducts = [
        {
          id: 1,
          name: "product A",
          quantity: 10
        },
        {
          id: 2,
          name: "product B",
          quantity: 20
        }
      ];

      before(() => {
        sinon.stub(productModel, 'getAllProduct').resolves(listProducts);
      })

      after(() => {
        productModel.getAllProduct.restore();
      })

      it('returns an array', async () => {
        const response = await productService.getAllProduct();

        expect(response).to.be.a('array')
      })

      it('returns an object with the right properties', async () => {
        const response = await productService.getAllProduct();

        response.forEach((e) => expect(e).to.have.a.property('id'));
      })
    });
  })
  describe('getByIdProduct function', () => {
    describe('when it returns the product by id', () => {
      const product = {
        id: 1,
        name: "product A",
        quantity: 10
      }

      before(() => {
        sinon.stub(productModel, 'getByIdProduct').resolves([product]);
      })

      after(() => {
        productModel.getByIdProduct.restore();
      })
  
      it('returns an object from product', async () => {
        const response = await productService.getByIdProduct(1);
  
        expect(response).to.be.an('object');
      });
  
      it('returns an object with the right properties', async () => {
        const response = await productService.getByIdProduct(1);

        expect(response).to.have.property('id');
        expect(response).to.have.property('name');
        expect(response).to.have.property('quantity');
      });
    });
  })
});
